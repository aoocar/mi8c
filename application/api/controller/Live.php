<?php

namespace app\api\controller;

use think\Controller;
use think\Db;

use EasyWeChat\Factory;
use HttpCurl;
use PclZip;
use Workerman\Protocols\Http;

class Live extends Controller
{
    protected $uniacid;

    protected $mp_app;

    public function __construct()
    {
        parent::__construct();
        if (input('uniacid')) {
            $this->uniacid = input('uniacid');
            $applet = Db::table('wd_xcx_applet')->where("id", $this->uniacid)->find();
            $config = [
                'app_id' => $applet['appID'],
                'secret' => $applet['appSecret'],
            ];
            $this->mp_app = Factory::miniProgram($config);
        }
    }

    //上传附件到微信服务器获取附件id
    public function uploadImageWechat($path='')
    {
        if ($path=='') {
            return json(['code'=>1, 'msg'=>'缺少参数', 'data'=>[]]);
        }
        $result = $this->mp_app->media->uploadImage($path);
        return $result['media_id'];
    }

    //上传文件
    public function upload()
    {
        $dir = 'images';
        $size_limit = 5*1024*1024;
        $ext_limit = ['png', 'gif', 'jpg'];

        $file = $this->request->file('file');
        if ($size_limit > 0 && ($file->getInfo('size') > $size_limit)) {
            return json(['code'=>0, 'msg'=>'附件过大', 'data'=>[]]);
        }
        $file_name = $file->getInfo('name');
        $file_ext  = strtolower(substr($file_name, strrpos($file_name, '.')+1));
        $error_msg = '';
        if ($ext_limit == '') {
            $error_msg = '获取文件信息失败！';
        }
        if (preg_grep("/php/i", $ext_limit)) {
            $error_msg = '禁止上传非法文件！';
        }
        if (!preg_grep("/$file_ext/i", $ext_limit)) {
            $error_msg = '附件类型不正确！';
        }

        if ($error_msg != '') {
            return json(['code'=>0, 'msg'=>$error_msg, 'data'=>[]]);
        }
        $info = $file->move('uploads' . DIRECTORY_SEPARATOR . $dir);
        $path = 'uploads/' . $dir . '/' . str_replace('\\', '/', $info->getSaveName());

        $data = [
            'path' => $path,
            'url_path' => $this->request->domain().'/'.$path,
        ];
        return json(['code' =>1, 'msg'=>'success', 'data'=>$data]);
    }

    //申请成为主播(创建直播间的信息)
    public function applyLive()
    {
        $id = input('id', '0');
        $post_data = [
            'uniacid' => $this->uniacid,
            'name' => input('name'),
            'cover_img' => input('cover_img'),
            'anchor_name' => input('anchor_name'),
            'anchor_wechat' => input('anchor_wechat'),
            'share_img' => input('share_img'),
            'update_time' => time(),
            'user_id' => input('user_id'),
        ];

        $validate = [
            'name|直播间名字'   => 'require',
            'cover_img|直播间背景图'   => 'require',
            'anchor_name|主播昵称'   => 'require',
            'anchor_wechat|主播微信号'   => 'require',
            'share_img|直播间分享图'   => 'require',
        ];
        $result = $this->validate($post_data, $validate);
        if (true !== $result) {
            return json(['code'=>0, 'msg'=>$result, 'data'=>[]]);
        }
        
        
        $base_info = Db::name('wd_xcx_base')->where('uniacid', $this->uniacid)->field('anchor_audit_type')->find();
        if($base_info['anchor_audit_type']==1){
            $post_data['status'] = 1;
        }
        
        
        if ($id>0) {
            Db::table('wd_xcx_live_room')->where('id', $id)->update($post_data);
            $msg = '修改资料成功';
        } else {
            $post_data['create_time'] = time();
            Db::table('wd_xcx_live_room')->insert($post_data);
            $msg = '提交资料成功，请耐心等待审核';
        }
        return json(['code' => 1, 'msg' => $msg, 'data' => []]);
    }

    //调用接口创建直播间预约直播
    public function appointmentRoom()
    {
        $start_time = strtotime(input('start_date').' '.input('start_time'));
        $end_time = strtotime(input('end_date').' '.input('end_time'));
        $id = input('id');
        $post_data = [
            'id' => input('id'),
            'start_time' => $start_time,
            'end_time' => $end_time,
        ];
        $validate = [
            'id|直播间id'   => 'require',
            'start_time|直播开始时间'   => 'require',
            'end_time|直播结束时间'   => 'require',
        ];
        $result = $this->validate($post_data, $validate);
        if (true !== $result) {
            return json(['code'=>0, 'msg'=>$result, 'data'=>[]]);
        }

        if ($start_time <= time()+600) {
            return json(['code'=>0, 'msg'=>'直播开始时间需在当前时间10min后', 'data'=>[]]);
        }

        if ($start_time >= time()+86400*30*6) {
            return json(['code'=>0, 'msg'=>'直播开始时间不能在6个月后', 'data'=>[]]);
        }

        if ($start_time >= $end_time) {
            return json(['code'=>0, 'msg'=>'直播开始时间不能大于结束时间', 'data'=>[]]);
        }

        if ($end_time-$start_time <= 1800) {
            return json(['code'=>0, 'msg'=>'直播开始时间和结束时间间隔不得短于30min', 'data'=>[]]);
        }

        if ($end_time-$start_time >= 43200) {
            return json(['code'=>0, 'msg'=>'直播时间不能超过12小时', 'data'=>[]]);
        }

        $room_info = Db::name('wd_xcx_live_room')->where('id', $id)->find();
        if (empty($room_info)) {
            return json(['code'=>0, 'msg'=>'直播间信息不存在', 'data'=>[]]);
        }

        $accessToken = $this->mp_app->access_token;
        $token = $accessToken->getToken();

        $roomInfo = array(
            'name' => input('name'),
            'coverImg' => $this->uploadImageWechat(ROOT_PATH .'public'.DS . input('cover_img')),
            'startTime' => (int)$start_time,
            'endTime' => (int)$end_time,
            'anchorName' => input('anchor_name'),
            'anchorWechat' => input('anchor_wechat'),
            'shareImg' => $this->uploadImageWechat(ROOT_PATH .'public'.DS . input('share_img')),
            'type' => 0,
            'screenType' => 0,
            'closeLike' => 0,
            'closeGoods' => 0,
            'closeComment' => 0,
        );

        $url = 'https://api.weixin.qq.com/wxaapi/broadcast/room/create?access_token='.$token['access_token'];
        $ch = curl_init($url);//初始化
        curl_setopt_array($ch, array(
            CURLOPT_POST => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => array('Content-type: application/json'),
            CURLOPT_POSTFIELDS => json_encode($roomInfo),
        ));
        $res = json_decode(curl_exec($ch), true);
        curl_close($ch);
        
        if (is_array($res) && $res['errcode']==0) {
            $post_data['room_id'] = $res['roomId'];
            $post_data['like_num'] = rand(0, 99);
            Db::name('wd_xcx_live_room')->where('id', $id)->update($post_data);
            // dump($post_data);
            return json(['code'=>1, 'msg'=>'预约直播成功，请准时进入直播间进行直播', 'data'=>$res]);
        } else {
            return json(['code'=>0, 'msg'=>'预约直播失败', 'data'=>$res]);
        }
    }

    //调用接口获取直播房间列表
    public function getRoomList()
    {
        $accessToken = $this->mp_app->access_token;
        $token = $accessToken->getToken();
        $uniacid = input('uniacid');

        $url = 'https://api.weixin.qq.com/wxa/business/getliveinfo?access_token=' . $token['access_token'];
        $page = input('page', 0);
        $limit = 20;

        $post_data = [
            'start' => $page * $limit,
            'limit' => $limit,
        ];
        $res = json_decode(HttpCurl::post($url, json_encode($post_data)), true);
        // dump($res);
        if ($res['errcode'] == 1) {
            return json(['code' => 0, 'msg' => '暂无直播房间', 'data' => []]);
        } else {
            $room_id_arr = Db::table('wd_xcx_live_room')->column('room_id');
            $like_num_arr = Db::table('wd_xcx_live_room')->column('like_num');
            // dump($like_num_arr);
            $room_user_id_arr = Db::table('wd_xcx_live_room')->column('user_id');
            foreach ($room_user_id_arr as $key => $value) {
                if ($value == 0) {
                    unset($room_user_id_arr[$key]);
                }
            }
           
            //取出相应的商家用户头像
            $user_avatar_arr = array();
            // dump($uniacid);
            foreach ($room_user_id_arr as $key=> $value) {
                $avatar = Db::table('wd_xcx_user')->where('suid', $value)->where('uniacid', $uniacid)->find();
                // dump($avatar['avatar']);
                array_push($user_avatar_arr, $avatar['avatar']);
            }

            $user_avatar_arr =  array_filter($user_avatar_arr);
            // $new_avatar_arr = array_values($user_avatar_arr);
            $new_avatar_arr = array_reverse($user_avatar_arr);
            // 过滤空数组
            $new_like_num_arr =array_filter($like_num_arr);
         
            // dump($room_user_id_arr);
            // dump($new_like_num_arr);
            $status_text = [
                '101' => '直播中',
                '102' => '未开始',
                '103' => '已结束',
                '104' => '禁播',
                '105' => '暂停中',
                '106' => '异常',
                '107' => '已过期',
            ];
            $room_info = $res['room_info'];
            foreach ($room_info as $key=>$value) {
                if (!in_array($value['roomid'], $room_id_arr)) {
                    unset($room_info[$key]);
                } else {
                    $room_info[$key]['live_status_text'] = $status_text[$value['live_status']];
                }
            }

            foreach ($room_info as $key=>$value) {
                if (!in_array($value['roomid'], $room_id_arr)) {
                    unset($room_info[$key]);
                } else {
                    $room_info[$key]['live_status_text'] = $status_text[$value['live_status']];
                }
            }
            $new_room_info = [];
            foreach ($room_info as $value) {
                array_push($new_room_info, $value);
            }

            foreach ($new_avatar_arr as $key=> $value) {
                //当存在房间id
                if ($new_room_info[$key]['roomid']) {
                    $new_room_info[$key]['avatar'] = $value;
                }

                // $new_room_info = array_column($new_room_info, $new_avatar_arr);
            }
                // dump($new_room_info);
            foreach ($new_like_num_arr as $key => $value) {
                  if ($new_room_info[$key]['roomid']) {
                     $new_room_info[$key]['like_num'] = $value;       
                    }
            }

               
            // dump($new_room_info);
                
            // /dump($new_room_info);
            // echo json_encode($new_room_info);
            // dump($r)
            return json_encode(['code' => 1, 'msg' => 'success', 'data' => $new_room_info]);
        }
    }

    //获取个人的直播间信息
    public function getRoomInfo()
    {
        $map['uniacid'] = $this->uniacid;
        $map['user_id'] = input('user_id');
        $info = Db::table('wd_xcx_live_room')->where($map)->find();
        $info['cover_img_url'] = $info['cover_img'] ? $this->request->domain().'/'.$info['cover_img'] : '';
        $info['share_img_url'] = $info['share_img'] ? $this->request->domain().'/'.$info['share_img'] : '';

        //是否有未完成的直播
        if ($info['end_time']>time()) {
            $info['is_living'] = '1';
        } else {
            $info['is_living'] = '0';
        }

        return json(['code'=>1, 'msg'=>'success', 'data'=>$info]);
    }

    //获取个人直播商品列表
    public function getRoomProdustList()
    {
        $accessToken = $this->mp_app->access_token;
        $token = $accessToken->getToken();
        $page = input('page', 0);
   
        $productStatus = input('status');
        $limit =100;
        $query_data = [
            'offset' => $page,
            'limit' => $limit,
            'status' => $productStatus
        ];
        $status = '';
        $url = "https://api.weixin.qq.com/wxaapi/broadcast/goods/getapproved?access_token=".$token["access_token"].'&offset='.$query_data['offset'].'&limit='.$query_data['limit'].'&status='.$query_data['status'];
        // dump($url);
        //获取商品数据
        // echo $token["access_token"];
        $res = file_get_contents($url);
      
        
        $deRes = json_decode($res);
        $goodsArr = $deRes->goods;
       
        if ($productStatus == 1) {
            if (count($goodsArr) != 0) {
                $status = 1;
            } elseif (count($goodsArr) === 0) {
                $status = 2;
            }
        } elseif ($productStatus == 2) {
            if (count($goodsArr) != 0) {
                $status = 2;
            } elseif (count($goodsArr) === 0) {
                $status = 3;
            }
        } elseif ($productStatus == 3) {
            $status = 3;
        }
        //状态码被重新赋值，重新请求数据
        $url2 = "https://api.weixin.qq.com/wxaapi/broadcast/goods/getapproved?access_token=".$token["access_token"].'&offset='.$query_data['offset'].'&limit='.$query_data['limit'].'&status='.$status;
        $res = file_get_contents($url2);
      
        $deRes2 = json_decode($res);
        $goodsArr = $deRes2->goods;
        // dump($status);
        for ($i = 0; $i < count($goodsArr); $i++) {
            $updatetData[$i] = [
             'goodsId' => $goodsArr[$i]->goodsId,
             'name' => $goodsArr[$i]->name,
             'coverImgUrl' => $goodsArr[$i]->coverImgUrl,
             'price' => $goodsArr[$i]->price,
             'url' => $goodsArr[$i]->url,
             'thirdPartyTag' => $goodsArr[$i]->thirdPartyTag,
             'status' => $status
         ];
            $updateRes =  Db::name('wd_xcx_live_product')->where('goodsId', $goodsArr[$i]->goodsId)->update($updatetData[$i]);
        }
        $uniacid = input('uniacid');
        $suid = input('suid');
        $shop = Db::name('wd_xcx_shops_shop')->where('uniacid', $uniacid)->where('suid', $suid)->field('id')->find();
        $sid = $shop['id'];
        
        $getAll['goods'] = Db::name('wd_xcx_live_product')->where('sid', $sid)->where('status', $productStatus)->select();
        $getAll['total'] = count($getAll['goods']);
        $getAll['errcode'] = 0;
    
        return json_encode($getAll);
        //  /   return $res;
    }
    //获取商家商品
    public function getMerchantProdust()
    {
        $uniacid = input('uniacid');
        $status = input('status');
        $suid = input('suid');
        $shop = Db::name('wd_xcx_shops_shop')->where('uniacid', $uniacid)->where('suid', $suid)->field('id')->find();
        $sid = $shop['id'];
        $products = Db::name('wd_xcx_shops_goods')->where('uniacid', $uniacid)->where('sid', $sid)->where('status', $status)->field('id,sid,uniacid,title,createtime,flag,thumb,is_live,descp,storage,vsales,rsales,sellprice,num,status')->select();
        foreach ($products as $key => &$res) {
            $res['createtime'] = date("Y-m-d H:i:s", $res['createtime']);
            $res['sales'] = $res['vsales'] + $res['rsales'];
            $res['thumb'] = remote($uniacid, $res['thumb'], 1);
        }
        $data['data'] = $products;
        return json_encode($data);
    }
    //添加直播商品
    public function addRoomProdust()
    {
        $accessToken = $this->mp_app->access_token;
        $token = $accessToken->getToken();
        $uniacid = input('uniacid');
        $produstId = $_POST['produstid'];
        // dump($produstId);
        $suid = input('suid');
        $shop = Db::name('wd_xcx_shops_shop')->where('uniacid', $uniacid)->where('suid', $suid)->field('id')->find();
        $sid = $shop['id'];
        // dump($sid);
        //将数据分割并转换成数组
        $produstIdExplode = explode(',', $produstId);
        // dump($produstId);
    
        // $produstIdSplit = str_split($produstId);
        // dump($produstIdSplit);
        $resArr =[];
        foreach ($produstIdExplode as  $value) {
            $res=  Db::name('wd_xcx_shops_goods')->where('id', $value)->find();
            //更新商家商品状态，0: 没有加入直播商品库存, 1: 已经加入直播商品库， 2: 已加入微信小程序直播货架
            Db::name('wd_xcx_shops_goods')->where('id', $value)->update(['is_live' => 1]);
            array_push($resArr, $res);
        }
        //  dump($resArr);
      
        for ($i = 0; count($resArr) > $i; $i++) {
            $url = 'https://'.$_SERVER['HTTP_HOST'];
            $thumbImg[$i] = $resArr[$i]['thumb'];
           
            $repThumbImg[$i] = str_replace($url, '', $thumbImg[$i]);
            $conventThumbImg[$i] = ROOT_PATH .'public'.DS .$repThumbImg[$i];
            //获取微信服务器的附件madia_Id
            $mediaId[$i] = $this->uploadImageWechat($conventThumbImg[$i]);
            //组装到直播商品接口数据，并提交审核
            $post_data[$i]['goodsInfo'] = [
                'coverImgUrl' => $mediaId[$i],
                'name' => $resArr[$i]['title'],
                'priceType' => 1,
                'price' => $resArr[$i]['sellprice'],
                'price2' => '',
                'url' => 'pagesPluginShop/goods_detail/goods_detail?id='.$resArr[$i]['id']
            ];
         
            $url = 'https://api.weixin.qq.com/wxaapi/broadcast/goods/add?access_token='.$token['access_token'];
            
            $result[$i] = HttpCurl::post($url, json_encode($post_data[$i]), '', array('content-Type:application/json'));
            $deData[$i] = json_decode($result[$i]);
            
            $insertData['sid'] = $sid;
            $insertData['goodsId'] = $deData[$i]->goodsId;
            $insertData['auditId'] = $deData[$i]->auditId;
            $insertData['shop_product_id'] = $resArr[$i]['id']; //商家商品id
         
            $Res =  Db::name('wd_xcx_live_product')->insert($insertData);
          
            $insertRes['insertRes'] = $Res;
            $insertRes['errcode'] = $deData[$i]->errcode;
        }

        return json_encode($insertRes);
    }

    // public function test()
    // {
    //     $accessToken = $this->mp_app->access_token;
    //     $token = $accessToken->getToken(true);
    //     dump($token);
    // }

    // 删除直播商品
    public function delLiveProduct()
    {
        $accessToken = $this->mp_app->access_token;
        $token = $accessToken->getToken();
        $uniacid = input('uniacid');

        $productId = $_POST['productid'];
        $suid = input('suId');
        $shop = Db::name('wd_xcx_shops_shop')->where('uniacid', $uniacid)->where('suid', $suid)->field('id')->find();
        $sid = $shop['id'];

        $url = "https://api.weixin.qq.com/wxaapi/broadcast/goods/delete?access_token=".$token['access_token'];
       
        $productIdExplode = explode(',', $productId);
        $resArr =[];
     
        for ($i = 0; $i < count($productIdExplode); $i++) {
            //删除直播表数据
            //获取直播goodsId，获取商家商品id
            $shop_product = Db::name('wd_xcx_live_product')->where('id', $productIdExplode[$i])->find();
            $post_data = [
                "goodsId" =>  $shop_product['goodsId']
            ];
    
            if ($shop_product['shop_product_id'] != null && $shop_product['shop_product_id'] != '') {
                Db::name('wd_xcx_shops_goods')->where('id', $shop_product['shop_product_id'])->update(['is_live' => 0]);
                //  dump($updateProductIsLive);
            }
            
            Db::name('wd_xcx_live_product')->where('id', $productIdExplode[$i])->delete();

            $delRes =  HttpCurl::post($url, json_encode($post_data), '', array('content-Type:application/json'));
        }
        return $delRes;
    }

    //将商品导入小程序直播间货架
    public function addLiveGoodsRoom()
    {
        $accessToken = $this->mp_app->access_token;
        $token = $accessToken->getToken();
        $uniacid = input('uniacid');

        $productId = $_POST['productid'];
        $suid = input('suId');
        $shop = Db::name('wd_xcx_shops_shop')->where('uniacid', $uniacid)->where('suid', $suid)->field('id')->find();
        $sid = $shop['id'];
        //转换成数组
        $productIdExplode = explode(',', $productId);
    
        // 微信小程序直播，将已有商品加入货架接口
        $url = 'https://api.weixin.qq.com/wxaapi/broadcast/room/addgoods?access_token='.$token['access_token'];
        //取出房间号
        $res =   Db::name('wd_xcx_live_room')->where('user_id', $suid)->find();
        
        $GoodsIds = array();
        foreach ($productIdExplode as $item) {
            $resGid = Db::name('wd_xcx_live_product')->where('id', $item)->find();
            array_push($GoodsIds, $resGid['goodsId']);
        }
        // dump($url);
        $post_data = [
            'ids' =>$GoodsIds,
            'roomId' => $res['room_id']
        ];
        //    echo json_encode($post_data);
        $result = HttpCurl::post($url, json_encode($post_data), '', array('content-Type:application/json'));
        return $result;
        // Db::name('wd_xcx_live_room')->where('')
        // dump($url);
    }

    //写入访问记录
    public function addVisitLog()
    {
        if(input('goods_type')==1){
            $goods_info = Db::name('wd_xcx_products')->where(array('id'=>input('o_id')))->find();
        }else{
            $goods_info = Db::name('wd_xcx_shops_goods')->where(array('id'=>input('o_id')))->find();
        }
        
        if(empty($goods_info)) return json(array('code'=>0, 'msg'=>'fail', 'data'=>[]));
        
        $data = array(
            'uniacid' => $this->uniacid,
            'user_id' => input('user_id'),
            'thumb' => $goods_info['thumb'],
            'remark' => $goods_info['title'],
            'o_id' => input('o_id'),
            'goods_type' => input('goods_type'),
            'create_time' => time(),
        );
        if(empty($data)) return json(array('code'=>0, 'msg'=>'fail', 'data'=>[]));
        $res = Db::name('wd_xcx_visit_log')->insert($data);
        if($res){
            return json(array('code'=>1, 'msg'=>'success', 'data'=>[]));
        }else{
            return json(array('code'=>0, 'msg'=>'fail', 'data'=>[]));
        }

    }
}

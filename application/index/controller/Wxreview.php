<?php
/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-04-02 15:59:16 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-04-02 16:23:42
 */
namespace app\index\controller;

use Exception;
use think\Cache;
use think\Controller;
use think\Db;
use think\Request;
use think\Session;

class Wxreview extends Base
{
    public function index()
    {
        if (check_login()) {
            if (powerget()) {
                $id = input("appletid");

                $res = Db::table('wd_xcx_applet')->where("id", $id)->find();
                if (!$res) {
                    $this->error("找不到对应的小程序！");
                }
                $this->assign('applet', $res);

                $applet_uid = $res['adminid'];
                if ($applet_uid) {
                    session('applet_uid', $applet_uid);
                    $pub = Db::table('pubs')->where('uid', $applet_uid)->find();
                } else {
                    session('applet_uid', null);
                    $pub['authorizer_access_token'] = null;
                }

                if (!$pub['authorizer_access_token']) {
                    header("Location: " . url('index/wxreview/rebind', '', false, true) . '?appletid=' . $_GET['appletid']);
                    exit();
                } else {
                    try {
                        // dump(get_component_access_token());
                        //获取小程序基本信息
                        $this->assign("authorizer_info", get_authorizer_info());
                    //    dump(get_authorizer_access_token());
                        //获取体验二维码
                        $this->assign("test_qrcode", get_test_qrcode());

                        //获取正式二维码
                        $this->assign("release_qrcode", get_release_qrcode());
                        $this->assign("appletid", $id);
                    } catch (Exception $e) {
                        header("Location: " . url('index/wxreview/rebind', '', false, true) . '?appletid=' . $_GET['appletid']);
                        exit();
                    }

                    $this->assign("open_platform", get_open_platform());

                    //体验者列表
                    $this->assign("testers", Db::table('wx_tester')->where('wid', session('applet_uid'))->select());

                    //上传的小程序列表，找出ID用来查询审核状态
                    $uploadRecordList = Db::table('user_upload_code_record')->order('id desc')->where(['wid' => session('applet_uid')])->select();
                    foreach ($uploadRecordList as $k => $uploadRecord) {
                        get_audit_status($uploadRecord['id']);
                    }
                   $this->assign("uploadRecordList", $uploadRecordList);
                }
               $template_list =  get_template_list();
                $this->assign('templateList',$template_list);
           return $this->fetch('index');
            } else {
                $usergroup = Session::get('usergroup');
                if ($usergroup == 1) {
                    $this->error("您没有权限操作该小程序或找不到相应小程序！", 'Applet/applet');
                }
                if ($usergroup == 2) {
                    $this->error("您没有权限操作该小程序或找不到相应小程序！", 'Applet/index');
                }
                if ($usergroup == 3) {
                    $this->error("您没有权限操作该小程序或找不到相应小程序！", 'Applet/index');
                }
           }
//         dump(get_template_list());
            return $this->fetch();
        } else {
            $this->redirect('Login/index');
        }
    }

    //扫码二维码授权页面
    public function rebind()
    {
        $id = input("appletid");
        $res = Db::table('wd_xcx_applet')->where("id", $id)->find();
        if (!$res) {
            $this->error("找不到对应的小程序！");
        }
        $this->assign('applet', $res);
        $component_access_token = get_component_access_token();
     
        // dump($component_access_token);
        //未绑定或重新绑定
        $open_platform = Db::table('wd_xcx_open_platform')->order('id asc')->find();
        $pre_auth_code = get_pre_auth_code();
        //设置缓存
      //  Cache::set('pre_auth_code', $pre_auth_code, 1000);
        $redirect_uri = url('index/wxreview/finishAuth', ['appletid' => $_GET['appletid'], 'pre_auth_code' => $pre_auth_code], false, true);

        $url = "https://mp.weixin.qq.com/cgi-bin/componentloginpage?component_appid=" . $open_platform['app_id'] . "&pre_auth_code=" . $pre_auth_code . "&redirect_uri=" . $redirect_uri . "&auth_type=2";
        $this->assign("url", $url);
        $open_platform = get_open_platform();
        $ticket = Db::table('wd_xcx_component_verify_ticket')->where('app_id', $open_platform['app_id'])->find();
        // dump($ticket);
        // dump($url);
        // echo '<br>';
        // dump($pre_auth_code);
        // $cat = Db::table('wd_xcx_component_access_token')->where('app_id', $open_platform['app_id'])->find();
        // dump($open_platform);
        // //$component_access_token = get_component_access_token();
        // dump($cat);
        // dump($ticket);
        return $this->fetch();
       
    }

    public function test()
    {
        if (check_login()) {
            echo '已经登录';
        }
    }
    //完成授权后的redirect_uri
    public function finishAuth()
    {
        $auth_code = input('auth_code');
        //  $pre_auth_code = Cache::get('pre_auth_code');
        $appletid = input('appletid');

        $authorizer_access_token = get_authorizer_access_token($auth_code);
   
        $component_access_token = get_component_access_token();
        
        if ($authorizer_access_token) {
            $host = $this->request->host();
            applet_domains('set', 'https://' . $host, 'wss://' . $host, 'https://' . $host, 'https://' . $host);
            webview_domains('set', 'https://' . $host);
            $url = url('index/wxreview/index', '', false, true) . '?appletid=' . $appletid;
            echo '<script>window.parent.location.href="' . $url . '"</script>';
            exit();
        }
      
        exit();
    }

    //上传代码小程序代码
    public function uploadCode()
    {
        $wid = session('applet_uid');
        $pub = Db::table('pubs')->where('uid', $wid)->find();
        if (!$pub['authorizer_access_token']) {
            return json(array('status' => 'error', 'msg' => '请先完成授权绑定'));
        }
    
//        $open_platform = get_open_platform();
        $save_data = [
            'wid' => $wid,
            'upload_time' => time(),
            'template_id' => input('template_version'),
            'is_audit' => -1,
            'version_code' => input('version_code'),
            'remark_info' => input('remark_info'),
        ];
        Db::table('user_upload_code_record')->insert($save_data);
        $upload = wx_upload_code(input('template_version'), input('version_code'), input('remark_info'), input('appletid'));
        if ($upload) {
            return json(array('status' => 'success', 'msg' => '上传成功'));
        } else {
            return json(array('status' => 'success', 'msg' => '上传失败'));
        }
    }

    //获取审核时可填写的类目信息接口
    public function getCates()
    {
        $cate = get_wx_category();
        return json(array('status' => 'success', 'msg' => '上传失败', 'data' => $cate));
    }

    //提交审核
    public function submitAudit()
    {
        $wid = session('applet_uid');
        $pub = Db::table('pubs')->where('uid', $wid)->find();
        if (!$pub['authorizer_access_token']) {
            return json(array('status' => 'error', 'msg' => '请先完成授权绑定'));
        }

        $pages = get_wx_page();

        $cate = get_wx_category();
        $params = $cate[input('cateIdx')];
        $params['address'] = $pages[0];
        $params['title'] = '首页';
        $submit = wx_submit_audit(array('item_list' => array($params)));
        if ($submit['errcode'] == 0) {
            $lastRecord = Db::table('user_upload_code_record')->order('id desc')->where('wid', $wid)->find();

            $save_data = [
                'is_audit' => 2,
                'audit_id' => $submit['auditid'],
            ];
            Db::table('user_upload_code_record')->where('id', $lastRecord['id'])->update($save_data);
            return json(array('status' => 'success', 'msg' => '已提交审核，请耐心等待'));
        } else {
            return json(array('status' => 'error', 'msg' => $submit['diy_reason']));
        }
    }

    //撤销审核
    public function undoCodeAudit()
    {
        $wid = session('applet_uid');
        $pub = Db::table('pubs')->where('uid', $wid)->find();
        if (!$pub['authorizer_access_token']) {
            return json(array('status' => 'error', 'msg' => '请先完成授权绑定'));
        }

        $undo = undo_code_audit();
        if ($undo['errcode'] == 0) {
            $auditing = Db::table('user_upload_code_record')->where(['wid' => $wid, 'is_audit' => 2])->find();
            $save_data = [
                'is_audit' => 1,
                'unpass_reason' => '审核失败，原因：撤销审核',
            ];
            Db::table('user_upload_code_record')->where('id', $auditing['id'])->update($save_data);
            return json(array('status' => 'success', 'msg' => '已经成功撤销审核！【请注意，每个月只有10次撤销机会】'));
        } else {
            return json(array('status' => 'error', 'msg' => $undo['diy_reason']));
        }
    }

    //立即发布
    public function submitRelease()
    {
        $wid = session('applet_uid');
        $pub = Db::table('pubs')->where('uid', $wid)->find();
        if (!$pub['authorizer_access_token']) {
            return json(array('status' => 'error', 'msg' => '请先完成授权绑定'));
        }

        $release = set_wx_release();
        if ($release['errcode'] == 0) {
            $uploadRecordList = Db::table('user_upload_code_record')->where(['wid' => $wid, 'is_audit' => 2])->select();
            foreach ($uploadRecordList as $k => $uploadRecord) {
                get_audit_status($uploadRecord['id']);
            }
            Db::table('user_upload_code_record')->where(['wid' => $wid, 'is_publish' => 1])->update(['is_publish' => 0]);
            $last = Db::table('user_upload_code_record')->order('id desc')->where(['wid' => $wid, 'is_audit' => 0])->find();
            Db::table('user_upload_code_record')->where('id', $last['id'])->update(['is_publish' => 1]);
            return json(array('status' => 'success', 'msg' => '已发布'));
        } else {
            return json(array('status' => 'error', 'msg' => $release['diy_reason']));
        }
    }

    //取消授权
    public function cancelAuth()
    {
        $wid = session('applet_uid');
        $save_data = [
            'authorizer_appid' => null,
            'authorizer_access_token' => null,
            'authorizer_refresh_token' => null,
            'token_create_time' => null,
        ];
        Db::table('pubs')->where('uid', $wid)->update($save_data);
        return json(array('status' => 'success', 'msg' => '解绑成功'));
    }

    //添加体验者
    public function addTester()
    {
        $wid = session('applet_uid');
        $pub = Db::table('pubs')->where('uid', $wid)->find();
        if (!$pub['authorizer_access_token']) {
            return json(array('status' => 'error', 'msg' => '请先完成授权绑定'));
        }

        $tester_account = trim(input('testerAccount'));
        if (!$tester_account) {
            return json(array('status' => 'error', 'msg' => '请输入体验者微信号'));
        }

        $addTester = bind_tester($tester_account);
        if ($addTester[0]) {
            $findExists = Db::table('wx_tester')->where(['wid' => $wid, 'tester_account' => $tester_account])->find();
            if (!$findExists['id']) {
                $save_data = [
                    'wid' => $wid,
                    'tester_account' => $tester_account,
                ];
                Db::table('wx_tester')->insert($save_data);
            }
            return json(array('status' => 'success', 'msg' => '添加成功'));
        }
        return json(array('status' => 'error', 'msg' => $addTester[1]));
    }

    //解绑体验者
    public function delTester()
    {
        $wid = session('applet_uid');
        $pub = Db::table('pubs')->where('uid', $wid)->find();
        if (!$pub['authorizer_access_token']) {
            return json(array('status' => 'error', 'msg' => '请先完成授权绑定'));
        }

        $tester_account = trim(input('testerAccount'));
        if (!$tester_account) {
            return json(array('status' => 'error', 'msg' => '参数错误'));
        }

        $delTester = unbind_tester($tester_account);
        if ($delTester) {
            Db::table('wx_tester')->where(['wid' => $wid, 'tester_account' => $tester_account])->delete();
            return json(array('status' => 'success', 'msg' => '解绑成功'));
        }
        return json(array('status' => 'error', 'msg' => '系统繁忙'));
    }

    //设置域名
    public function setDomain()
    {
        $appletid = input('appletid');
        $data = input('param.');
        if (isset($data['type'])) {
            if ($data['type'] == 'main') {
                $res = applet_domains('set', $data['requestdomain'], $data['wsrequestdomain'], $data['uploaddomain'], $data['downloaddomain']);
                return json(array('status' => 'success', 'msg' => $res['errmsg'], 'data' => $data));
            } else {
                if ($data['type'] == 'webview') {
                    $res = webview_domains('set', $data['requestdomain']);
                    return json(array('status' => 'success', 'msg' => $res['errmsg'], 'data' => $data));
                }
            }
        }
        $this->assign('appletid',$appletid);
        $this->assign("domains", applet_domains('get'));
        $this->assign("webview", webview_domains('get'));
       return $this->fetch();
    }

    //删除提交记录
    public function deleteRecord()
    {
        $id = input('id');
        if(!$id) return json(['code'=>0, 'msg'=>'缺少参数']);

        $res = Db::table('user_upload_code_record')->where('id', $id)->delete();
        if($res){
            return json(['code'=>1, 'msg'=>'删除成功']);
        }else{
            return json(['code'=>0, 'msg'=>'删除失败，请重试']);
        }
    }

    //添加跳转小程序
    public function add_Appid()
    {
        $appletid = input('appletid');
        echo $appletid;
        return $this->fetch();
    }

    //保存跳转小程序Id
    public function save_Appid()
    {
        $appletId = input('appletid');
        $appId  = $_POST['appid'];
        $arrObj = array($appId);
        //dump($arrs);
        if($appId){
            $tominiprogramIs  = Db::name('wd_xcx_applet')->where('id',$appletId)->find();               
            if($tominiprogramIs['tominiprogram'] != null && $tominiprogramIs['tominiprogram'] != ''){
                $unserializeOldRes =  unserialize($tominiprogramIs['tominiprogram']);
                //是否超过10条
                if(sizeof($unserializeOldRes) == 10){
                    return $this->error('跳转小程序不能超过10个！');
                }

                //将数据的tominiprogramIs['tominiprogram']反序列
            
             //将旧的字串添加到旧的数组中
             foreach($arrObj as $item){
             array_push($unserializeOldRes,$item);
             }
                $arrs = serialize($unserializeOldRes);
          
               $res = Db::name('wd_xcx_applet')->where('id',$appletId)->update(['tominiprogram' => $arrs]);
              //  dump($res);
             // header('Location: https: /index/index/wxset.html?appletid='+$appId);
                 return $this->success('成功添加!');

            }else{
                $arrs = serialize($arrObj);

                $res = Db::name('wd_xcx_applet')->where('id',$appletId)->update(['tominiprogram' => $arrs]);
    
                  return $this->success('成功添加!');
            }

        }else{
          return $this->error('小程序ID不能为为空！');
        }


    }

    public function del()
    {
        $appletId = input('appletid');
        $appId = input('appid');
        $tominiprogramIs  = Db::name('wd_xcx_applet')->where('id',$appletId)->find();              
        //反序列        
        $unserializeOldRes =  unserialize($tominiprogramIs['tominiprogram']);
        //dump($unserializeOldRes);
        foreach($unserializeOldRes as $key => $item){
            if($item === $appId){
                //删除数组对应的元素
                
                unset($unserializeOldRes[$key]);
                 //将数组重新序列化
        $arrs = serialize($unserializeOldRes);

        //   dump($unserializeOldRes);
           $updateRes = Db::name('wd_xcx_applet')->where('id',$appletId)->update(['tominiprogram' => $arrs]);
         return $this->success('删除成功!');
            }
        }
       


    }
}

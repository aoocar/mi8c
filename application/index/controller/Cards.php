<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
use think\Request;
use think\Session;
use think\View;

use app\index\model\Applet;
use app\index\model\ImsSudu8PageStaffset as Staffsets;

class Cards extends Base
{
    public function set(){
        $uniacid = input('appletid');
        $app = new Applet;
        $appinfo = $app ->getAppInfo();
        $this->assign('applet',$appinfo);

        $staffsetdata = array(
            'uniacid' => $uniacid,
        );

        // $setM = new Staffsets;
        // $staffset = $setM->get(['uniacid' => $uniacid]);
        $staffset = Db::name('wd_xcx_staffset') ->where('uniacid', $uniacid) ->find();
        if(!$staffset){
            // $setM->save($staffsetdata);
            // $staffset = $setM->get(['uniacid' => $uniacid]);
            Db::name('wd_xcx_staffset') ->insert($staffsetdata);
            $staffset = Db::name('wd_xcx_staffset') ->where('uniacid', $uniacid) ->find();
        }
        $staffset['tabbar'] = unserialize($staffset['tabbar']);

        if(!$staffset['tabbar']){
            $staffset1 = "";
            $staffset2 = "";
            $staffset3 = "";
            $staffset4 = "";
            $staffset5 = "";
        }
        if(isset($staffset['tabbar'][0]) && $staffset['tabbar'][0]){
            $staffset['tabbar'][0] = unserialize($staffset['tabbar'][0]);

            $staffset1 = $staffset['tabbar'][0];
        }else{
            $staffset1 = "";
        }
        if(isset($staffset['tabbar'][1]) && $staffset['tabbar'][1]){
            $staffset['tabbar'][1] = unserialize($staffset['tabbar'][1]);
            $staffset2 = $staffset['tabbar'][1];
        }else{
            $staffset2 = "";
        }
        if(isset($staffset['tabbar'][2]) && $staffset['tabbar'][2]){
            $staffset['tabbar'][2] = unserialize($staffset['tabbar'][2]);
            $staffset3 = $staffset['tabbar'][2];
        }else{
            $staffset3 = "";
        }
        if(isset($staffset['tabbar'][3]) && $staffset['tabbar'][3]){
            $staffset['tabbar'][3] = unserialize($staffset['tabbar'][3]);
            $staffset4 = $staffset['tabbar'][3];
        }else{
            $staffset4 = "";
        }
        if(isset($staffset['tabbar'][4]) && $staffset['tabbar'][4]){
            $staffset['tabbar'][4] = unserialize($staffset['tabbar'][4]);
            $staffset5 = $staffset['tabbar'][4];
        }else{
            $staffset5 = "";
        }

        $this->assign('staffset1', $staffset1);
        $this->assign('staffset2', $staffset2);
        $this->assign('staffset3', $staffset3);
        $this->assign('staffset4', $staffset4);
        $this->assign('staffset5', $staffset5);
        $this->assign('staffset', $staffset);
        return $this->fetch('set');
    }
    //??????????????????
    public function staffset_save(){
        $uniacid = input('appletid');
        $data = array();
        //????????????  ????????????
        $data['card_style'] = input('card_style');

        //?????????????????????????????????
        $data['is_share'] = input('is_share');
        $share_score = input('share_score');
        if(!isset($share_score)){
            $share_score = 10;
        }
        $data['share_score'] = $share_score;   //input('means'] != NULL ? input('means'] : 1

        $share_scount = input('share_scount');
        if(!isset($share_scount)){
            $share_scount = 3;
        }
        $data['share_scount'] = $share_scount;

        $share_prize = input('share_prize');
        if(!isset($share_prize)){
            $share_prize = 1;
        }
        $data['share_prize'] = $share_prize;

        $share_pcount = input('share_pcount');
        if(!isset($share_pcount)){
            $share_pcount = 3;
        }
        $data['share_pcount'] = $share_pcount;

        //?????????????????????????????????
        $data['is_save'] = input('is_save');
        $save_score = input('save_score');
        if(!isset($save_score)){
            $save_score = 10;
        }
        $data['save_score'] = $save_score;

        $save_scount = input('save_scount');
        if(!isset($save_scount)){
            $save_scount = 3;
        }
        $data['save_scount'] = $save_scount;

        $save_prize = input('save_prize');
        if(!isset($save_prize)){
            $save_prize = 1;
        }
        $data['save_prize'] = $save_prize;

        $save_pcount = input('save_pcount');
        if(!isset($save_pcount)){
            $save_pcount = 3;
        }
        $data['save_pcount'] = $save_pcount;

        //????????????????????????
        $data['tabbar_t'] = input('tabbar_t');
        $data['tabbar_bg'] = input('tabbar_bg');
        $data['color_bar'] = input('color_bar');
        $data['tabbar_tc'] = input('tabbar_tc');
        $data['tabbar_tca'] = input('tabbar_tca');


        //????????????
        $tabbar = array();
        $tabbar1=array(
        'tabbar_name' => input('tabbar1_name'),
        'tabbar_url' => input('tabbar1_url'),
        'tabbar_linktype' => input('tabbar1_linktype'),
        'tabbar' => input('tabbar1')?input('tabbar1'):1
        );
        if(input('tabbar1')==2){
            $tabbar1['tabimginput_1'] = input('tabimginput1_3');
        }else{
            $tabbar1['tabimginput_1']= '';
            $tabimginput1_1 = input("commonuploadpic1");
            if($tabimginput1_1){
                $tabbar1['tabimginput_1'] = remote($uniacid, $tabimginput1_1,2);
            }
            $tabbar1['tabimginput_2']= '';
            $tabimginput1_2 = input("commonuploadpic2");
            if($tabimginput1_2){
                $tabbar1['tabimginput_2'] = remote($uniacid, $tabimginput1_2,2);
            }
        }
        $tabbar2=array(
        'tabbar_name' => input('tabbar2_name'),
        'tabbar_url' => input('tabbar2_url'),
        'tabbar_linktype' => input('tabbar2_linktype'),
        'tabbar' => input('tabbar2')?input('tabbar2'):1
        );
        if(input('tabbar2')==2){
            $tabbar2['tabimginput_1'] = input('tabimginput2_3');
        }else{
            $tabbar2['tabimginput_1']= '';
            $tabimginput2_1 = input("commonuploadpic3");
            if($tabimginput2_1){
                $tabbar2['tabimginput_1'] = remote($uniacid, $tabimginput2_1,2);
            }

            $tabbar2['tabimginput_2']= '';
            $tabimginput2_2 = input("commonuploadpic4");
            if($tabimginput2_2){
                $tabbar2['tabimginput_2'] = remote($uniacid, $tabimginput2_2,2);
            }
        }
        $tabbar3=array(
        'tabbar_name' => input('tabbar3_name'),
        'tabbar_url' => input('tabbar3_url'),
        'tabbar_linktype' => input('tabbar3_linktype'),
        'tabbar' => input('tabbar3')?input('tabbar3'):1
        );
        if(input('tabbar3')==2){
            $tabbar3['tabimginput_1'] = input('tabimginput3_3');
        }else{
            $tabbar3['tabimginput_1']= '';
            $tabimginput3_1 = input("commonuploadpic5");
            if($tabimginput3_1){
                $tabbar3['tabimginput_1'] = remote($uniacid, $tabimginput3_1,2);
            }

            $tabbar3['tabimginput_2']= '';
            $tabimginput3_2 = input("commonuploadpic6");
            if($tabimginput3_2){
                $tabbar3['tabimginput_2'] = remote($uniacid, $tabimginput3_2,2);
            }
        }
        $tabbar4=array(
        'tabbar_name' => input('tabbar4_name'),
        'tabbar_url' => input('tabbar4_url'),
        'tabbar_linktype' => input('tabbar4_linktype'),
        'tabbar' => input('tabbar4')?input('tabbar4'):1
        );
        if(input('tabbar4')==2){
            $tabbar4['tabimginput_1'] = input('tabimginput4_3');
        }else{
            $tabbar4['tabimginput_1']= '';
            $tabimginput4_1 = input("commonuploadpic7");
            if($tabimginput4_1){
                $tabbar4['tabimginput_1'] = remote($uniacid, $tabimginput4_1,2);
            }
            $tabbar4['tabimginput_2']= '';
            $tabimginput4_2 = input("commonuploadpic8");
            if($tabimginput4_2){
                $tabbar4['tabimginput_2'] = remote($uniacid, $tabimginput4_2,2);
            }
        }
        $tabbar5=array(
        'tabbar_name' => input('tabbar5_name'),
        'tabbar_url' => input('tabbar5_url'),
        'tabbar_linktype' => input('tabbar5_linktype'),
        'tabbar' => input('tabbar5')?input('tabbar5'):1
        );
        if(input('tabbar5')==2){
            $tabbar5['tabimginput_1'] = input('tabimginput5_3');
        }else{
            $tabbar5['tabimginput_1']= '';
            $tabimginput5_1 = input("commonuploadpic9");
            if($tabimginput5_1){
                $tabbar5['tabimginput_1'] = remote($uniacid, $tabimginput5_1,2);
            }
            $tabbar5['tabimginput_2']= '';                
            $tabimginput5_2 = input("commonuploadpic-10");
            if($tabimginput5_2){
                $tabbar5['tabimginput_2'] = remote($uniacid, $tabimginput5_2,2);
            }
        }

        $tabbar1 = serialize($tabbar1);

        $tabbar2 = serialize($tabbar2);

        $tabbar3 = serialize($tabbar3);

        $tabbar4 = serialize($tabbar4);

        $tabbar5 = serialize($tabbar5);

        if(input('tabbar1_url') != ''){

            $tabbar[0]=$tabbar1;

        }

        if(input('tabbar2_url') != ''){

            $tabbar[1]=$tabbar2;

        }

        if(input('tabbar3_url') != ''){

            $tabbar[2]=$tabbar3;

        }

        if(input('tabbar4_url') != ''){

            $tabbar[3]=$tabbar4;

        }

        if(input('tabbar5_url') != ''){

            $tabbar[4]=$tabbar5;

        }

        $tabnum = count($tabbar);

        $tabbar = serialize($tabbar);

        $data['tabbar'] = $tabbar;
        $data['tabnum'] = $tabnum;
        $data['uniacid'] = $uniacid;

        // dump($data);die;
        $res = Db::name('wd_xcx_staffset') ->where('uniacid', $uniacid) ->update($data);
        if($res){
            $this->success('????????????????????????!');
        }else{
            $this->error('??????????????????, ????????????, ???????????????!');
        }
    }
    public function lists(){
        if(check_login()){
            if(powerget()){
                $uniacid = input('appletid');
                $app = new Applet;
                $appinfo = $app ->getAppInfo();
                $this->assign('applet',$appinfo);

                $where = "";
                $skey = input('skey');
                if(!empty($skey)){
                    $where = " and realname like '%".$skey."%'";
                    $staffslist = Db::query("SELECT * FROM {$this->prefix}wd_xcx_staff WHERE `uniacid` = {$uniacid} {$where}");
                    $counts = count($staffslist);
                    $staffs = "";
                }else{
                    $counts = Db::name('wd_xcx_staff')->where("uniacid",$uniacid)->where($where)->count();
                    $staffs = Db::name('wd_xcx_staff')->where("uniacid",$uniacid)->where($where)->order('sort desc')->paginate(10,false,[ 'query' => array('appletid'=>input("appletid"))]);
                    $staffslist = $staffs->toArray()['data'];
                }

                if($staffslist){
                    foreach ($staffslist as $key => &$value) {
                        if($value['pic']){
                            $value['pic'] = remote($uniacid,$value['pic'],1);
                        }
                    }
                }

                $this->assign('counts',$counts);
                $this->assign('staffslist',$staffslist);
                $this->assign('staffs',$staffs);
                $this->assign('skey',$skey);
    
            }else{
                $usergroup = Session::get('usergroup');
                if($usergroup==1){
                    $this->error("???????????????????????????????????????????????????????????????",'Applet/applet');
                }
                if($usergroup==2){
                    $this->error("???????????????????????????????????????????????????????????????",'Applet/index');
                }
                if($usergroup==3){
                    $this->error("???????????????????????????????????????????????????????????????",'Applet/index');
                }
            }
            return $this->fetch('lists');
        }else{
            $this->redirect('Login/index');
        }
    }
    public function add(){
        if(check_login()){
            if(powerget()){
                $uniacid = input('appletid');
                $app = new Applet;
                $appinfo = $app ->getAppInfo();
                $this->assign('applet',$appinfo);

                $allimg = "";
                $id = input("id");
                $stores=Db::name('wd_xcx_store')->where("uniacid",$uniacid)->select();
                $this->assign("stores",$stores);

                $staff = array();
                if($id){
                    $staff = Db::name('wd_xcx_staff')->where("uniacid",$uniacid)->where("id",$id)->find();
                    if(!empty($staff['expand'])){
                        $staff['expand'] = unserialize($staff['expand']);
                    }
                    if(!empty($staff['pic'])){
                        $staff['pic'] = remote($uniacid, $staff['pic'], 1);
                    }
                }else{
                    $id=0;
                }
                $this->assign('id',$id);
                $this->assign('staff',$staff);
            }else{
                $usergroup = Session::get('usergroup');
                if($usergroup==1){
                    $this->error("???????????????????????????????????????????????????????????????",'Applet/applet');
                }
                if($usergroup==2){
                    $this->error("???????????????????????????????????????????????????????????????",'Applet/index');
                }
                if($usergroup==3){
                    $this->error("???????????????????????????????????????????????????????????????",'Applet/index');
                }
            }
            return $this->fetch('add');
        }else{
            $this->redirect('Login/index');
        }
    }

    public function save(){
        $uniacid = input("appletid");
        $id = intval(input('id'));
        $duogg = input('duogg');
        $duoggarr = explode(',',substr($duogg, 0,strlen($duogg)-1));
        $kkk = serialize($duoggarr);
        $mobile = input('mobile');
        if (!preg_match("/^1[3456789]{1}\d{9}$/",$mobile)) {
            $this->error("????????????????????????");
        }
        $score = input('score');
        if(!$score){
            $score = 0;
        }
        if(!is_numeric($score)){
            $this->error('???????????????,???????????????');
        }else{
            if($score < 0 || $score > 5){
                $this->error('???????????????0-5???,????????????????????????');
            }
        }
        $len = strlen($score);

        if($len>3){

            $score = substr($score,0,3);

        }
        $proid = input('province');

        $cityid = input('city');

        $areaid = input('area');

        $province =  input('pro') ? input('pro') : "";

        $city = input('cit') ? input('cit') : "";
        // $store = input('store') ? input('store') : "";
        $area = input('are') ? input('are') : "";
        //?????????????????????
        $descp = htmlspecialchars_decode(input('descp'));

        
        // $hxmm=input("hxmm");
        // $hxmms=array();
        // $a= Db::name('wd_xcx_base')->where("uniacid", $uniacid)->find();
        // if($hxmm==$a['hxmm']){
        //     $this->error('???????????????????????????????????????????????????');
        // }else{
            // if(empty($id)){
            //     $staffs= Db::name('wd_xcx_staff')->where("uniacid",$uniacid)->select();
            //     $hxmms=array();
            //     foreach($staffs as $k=>$v){
            //         array_push($hxmms,$v["hxmm"]);
            //     }
            //     if(in_array($hxmm,$hxmms)){
            //         $this->error('????????????????????????????????????????????????????????????');
            //     }
            // }else{
            //     $staffs= Db::name('wd_xcx_staff')->where("uniacid",$uniacid)->where("id","neq",$id)->select();
            //     $hxmms=array();
            //     foreach($staffs as $k=>$v){
            //         array_push($hxmms,$v["hxmm"]);
            //     }
            //     if(in_array($hxmm,$hxmms)){
            //         $this->error('????????????????????????????????????????????????????????????');
            //     }
            // }

        // }
        $data = array(
                    'sort' => input('sort'),

                    'uniacid' => $uniacid,

                    'realname' => input('realname'),

                    'mobile' => $mobile,

                    'wxnumber' => input('wxnumber'),

                    'email' => input('email'),

                    'company' => input('company'),

                    'province' => $province,

                    'city' => $city,

                    'area' => $area,

                    'address' => input('address'),

                    'title' => input('title'),

                    'job' => input('job'),

                    'contract' => input('contract'),

                    'auth' => input('auth'),

                    'score' => $score,

                    'visit' => input('visit'),

                    'zan' => input('zan'),

                    'forward' => input('forward'),

                    'price' => input('price'),

                    'descp' => $descp,

                    'expand' => $kkk,

                    'proid' => $proid,

                    'cityid' => $cityid,

                    'areaid' => $areaid,

                    'voice' => input('voice'),

                    // 'hxmm' => input('hxmm'),

                    'autovoice' => input('autovoice'),

                    // 'store'=>$store,

                    'age' => input('age')

                );
        $pic = input('commonuploadpic1');
        if($pic){
            $data['pic'] = remote($uniacid,$pic,2);
        }else{
            $this ->error('?????????????????????');
        }

        if (empty($id)) {
            $res = Db::name("wd_xcx_staff")->insert($data);
        } else {
            $res = Db::name("wd_xcx_staff")->where("id", $id)->where("uniacid", $uniacid)->update($data);
        }
        if($res){
            $this->success("????????????/????????????", Url('Cards/lists').'?appletid='.$uniacid);
        }else{
            $this->error("????????????/????????????");
        }
    }


    public function del(){
        $appletid = input("appletid");
        $cid = input("id");
        $res = Db::name('wd_xcx_staff')->where("uniacid",$appletid)->where("id",$cid)->delete();
        if($res){
            $this->success('????????????');
        }else{
            $this->success('????????????');
        }
    }

    //??????????????????
    public function delall(){
        if(check_login()){
            if(powerget()){
                $uniacid = input('appletid');
                $app = new Applet;
                $appinfo = $app ->getAppInfo();
                $this->assign('applet',$appinfo);
                
                $array1=input('staffs');
                $arr=explode(',',$array1);

                $res = Db::name('wd_xcx_staff')->where("uniacid",$uniacid)->where('id',"in",$arr)->delete();
                if($res){
                    $this->success('????????????');
                }else{
                    $this->error('????????????');
                }
            }else{
                $usergroup = Session::get('usergroup');
                if($usergroup==1){
                    $this->error("???????????????????????????????????????????????????????????????",'Applet/applet');
                }
                if($usergroup==2){
                    $this->error("???????????????????????????????????????????????????????????????",'Applet/index');
                }
                if($usergroup==3){
                    $this->error("???????????????????????????????????????????????????????????????",'Applet/index');
                }

            }
            return $this->fetch('index');
        }else{
            $this->redirect('Login/index');
        }
    }

    //?????????????????????
    public function qrcode(){
        $appletid = input("appletid");
        $cid = input("id");

        $app = Db::name('wd_xcx_applet')->where("id",$appletid)->find();
        $appid = $app['appID'];
        $appsecret = $app['appSecret'];
        $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$appsecret;
        $weixin = file_get_contents($url);
        $jsondecode = json_decode($weixin); //???JSON??????????????????????????????
        $array = get_object_vars($jsondecode);//???????????????
        $access_token = $array['access_token'];//??????openid

        $ewmurl = "https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=" . $access_token;
        $sjc = time().rand(1000,9999);
        $pagepath = 'sudu8_page/staff_card/staff_card';
        $data = [
                    'page' => $pagepath,
                    'width' => '500',
                    'scene' => $cid
                ];
        $data=json_encode($data);
        //$result = $this->_requestPost($ewmurl,$data); 
        //_requestPost($url, $data, $ssl=true) {  
        $curl = curl_init();  
        //??????curl??????  
        curl_setopt($curl, CURLOPT_URL, $ewmurl);//URL  
        $user_agent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0 FirePHP/0.7.4';  
        curl_setopt($curl, CURLOPT_USERAGENT, $user_agent);//user_agent?????????????????????  
        curl_setopt($curl, CURLOPT_AUTOREFERER, true);//referer??????????????????  
        curl_setopt($curl, CURLOPT_TIMEOUT, 30);//??????????????????  
        //SSL??????  
        if (true) {  
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);//?????????cURL?????????????????????????????????  
            curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);//???????????????SSL????????????????????????????????????(common name)???  
        }  
        // ??????post????????????  
        curl_setopt($curl, CURLOPT_POST, true);// ?????????POST??????  
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);// ??????????????????  
        // ??????????????????  
        curl_setopt($curl, CURLOPT_HEADER, false);//?????????????????????  
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);//curl_exec()???????????????????????? 
        //??????IPv4
        curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4); 

        // ????????????  
        $response = curl_exec($curl);
        
        if (false === $response) {  
            echo '<br>', curl_error($curl), '<br>';  
            return false;  
        }  
        curl_close($curl);  

        // var_dump($response);die;
        // var_dump($result);
        // die();
        $newpath = ROOT_PATH."public/ewmimg";
        if(!file_exists($newpath)){
            mkdir($newpath);
        }
        
        file_put_contents(ROOT_PATH."public/ewmimg/".$sjc.".jpg", $response); 
        $path = ROOT_HOST."/ewmimg/".$sjc.".jpg";
        
        $tdata = array(
            "bqrcode" => $path
        );
        
        $res = Db::name('wd_xcx_staff') ->where('id', $cid) ->update($tdata);
        if($res){
            $this->success('?????????????????????!');
        }else{
            $this->error('??????????????????, ?????????????????????, ???????????????!');
        }
    }
}
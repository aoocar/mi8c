<?php
namespace app\comadmin\controller;

use think\Controller;
use think\Db;
use think\Request;
use think\Session;
use think\View;

class Platformsetting extends Controller
{
	public function index(){

		if(check_login()){
			$uid=session('uid');
            $open_platform = Db::name('wd_xcx_open_platform')->where("uid",$uid)->find();
            if($open_platform){
            	$open_set['app_id'] = $open_platform['app_id'];
            	$open_set['app_secret'] = $open_platform['app_secret'];
            	$open_set['token'] = $open_platform['token'];
            	$open_set['encoding_aes_key'] = $open_platform['encoding_aes_key'];
            	$open_set['config_domain'] = $open_platform['config_domain'];
            	$open_set['template_id'] = $open_platform['template_id'];
            }

            $this->assign('open_set',$open_set);
            
            return $this->fetch('index');
        }else{
            $this->redirect('Login/index');
        }

	}

	public function save(){
		if(check_login()){
			
			$uid=session('uid');
			
	        $data = array();
	        $data = array(
	            "app_id" => trim(input("tx_app_id")),
	            "app_secret" => trim(input("tx_app_secret")),
	            "token" => trim(input("tx_token")),
	            "encoding_aes_key" => trim(input("tx_encoding_aes_key")),
	            "config_domain" => trim(input("tx_config_domain")),
	            "template_id" => trim(input("tx_template_id"))
	        );
	        
	        $open_set = Db::name('wd_xcx_open_platform')->where("uid", $uid)->count();
	        if($open_set > 0){
	        	$data['update_time'] = time();
	            $open_res = Db::name('wd_xcx_open_platform')->where("uid", $uid)->update($data);
	        }else{
	        	$data['uid'] = $uid;
	            $data['create_time'] = time();
	            $data['update_time'] = time();
	            $open_res = Db::name('wd_xcx_open_platform')->insert($data);
	        }
	        
	        if($open_res){
	          $this->success('设置成功');
	        }else{
	          $this->error('没有修改项！');
	        }

		}else{
			$this->redirect('Login/index');
		}
	}
}
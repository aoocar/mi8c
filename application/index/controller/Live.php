<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
use think\Session;

class Live extends Controller
{
    public $appletid;
    public function __construct()
    {
        parent::__construct();
        if(!check_login()) $this->redirect('Login/index');
        if(!powerget()){
            $usergroup = Session::get('usergroup');
            if($usergroup==1){
                $this->error("您没有权限操作该小程序或找不到相应小程序！",'Applet/applet');
            }
            if($usergroup==2){
                $this->error("您没有权限操作该小程序或找不到相应小程序！",'Applet/index');
            }
            if($usergroup==3){
                $this->error("您没有权限操作该小程序或找不到相应小程序！",'Applet/index');
            }
        }

        $this->appletid = input("appletid");
        $appletid_info = Db::name('wd_xcx_applet')->where("id", $this->appletid)->find();
        if(empty($appletid_info)) $this->error("找不到对应的小程序！");
        $this->assign("appletid_info", $appletid_info);
    }

    public function index(){
        $map = [
            'uniacid' => $this->appletid,
        ];
        if(input('keywords')){
            $map['name'] = ['like', '%'. input('keywords') .'%'];
        }

        if(input('status')){
            $map['status'] = input('status');
        }

        $count = Db::table('wd_xcx_live_room')->where($map)->count();
        $this->assign('count', $count);

        $list = Db::table('wd_xcx_live_room')->where($map)->paginate(10,false, [ 'query' => array('appletid'=>input("appletid"))]);
        $this->assign('list', $list);

        return $this->fetch('index');
    }

    public function pass()
    {
        $map['uniacid'] = $this->appletid;
        $map['id'] = input('id');

        $data = [
            'status' => 1,
            'update_time' => time(),
        ];
        $res = Db::table('wd_xcx_live_room')->where($map)->update($data);
        if($res){
            $this->success('操作成功');
        }else{
            $this->error('操作失败');
        }
    }

    public function nopass()
    {
        $map['uniacid'] = $this->appletid;
        $map['id'] = input('id');

        $data = [
            'status' => '-1',
            'update_time' => time(),
        ];
        $res = Db::table('wd_xcx_live_room')->where($map)->update($data);
        if($res){
            $this->success('操作成功');
        }else{
            $this->error('操作失败');
        }
    }

    public function delete()
    {
        $map['uniacid'] = $this->appletid;
        $map['id'] = input('id');

        $res = Db::table('wd_xcx_live_room')->where($map)->delete();
        if($res){
            $this->success('操作成功');
        }else{
            $this->error('操作失败');
        }
    }
}
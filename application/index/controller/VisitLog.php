<?php
namespace app\index\controller;

use think\Controller;
use think\Db;
use think\Session;

class VisitLog extends Controller
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
            'a.uniacid' => $this->appletid,
        ];

        if(input('keywords')){
            $map['b.phone'] = ['like', '%'. input('keywords') .'%'];
        }
        $count = Db::name('wd_xcx_visit_log')->alias('a')->join('wd_xcx_user b', 'a.user_id=b.suid')->where($map)->count();
        $this->assign('count', $count);

        $list = Db::name('wd_xcx_visit_log')
            ->alias('a')
            ->join('wd_xcx_user b', 'a.user_id=b.id', 'left')
            ->join('wd_xcx_superuser c', 'b.suid=c.id', 'left')
            ->where($map)
            ->order('a.create_time desc')
            ->field('b.*,a.*,c.phone')
            ->paginate(10,false,[ 'query' => array('appletid'=>input("appletid"))]);
        $page = $list->render();
        $this->assign('page', $page);
        
        $count = Db::name('wd_xcx_visit_log')
            ->alias('a')
            ->join('wd_xcx_user b', 'a.user_id=b.id', 'left')
            ->join('wd_xcx_superuser c', 'b.suid=c.id', 'left')
            ->where($map)
            ->order('a.create_time desc')
            ->field('b.*,a.*,c.phone')
            ->count();
        $this->assign('count', $count);
        
        $list = $list->toArray();
        foreach ($list['data'] as $key=>&$vol){
            if($vol['goods_type']==1){
                $vol['remark'] = '用户访问了商城的商品：'.$vol['remark'];
            }else{
                $shop_name = Db::name('wd_xcx_shops_goods')->alias('a')->join('wd_xcx_shops_shop b', 'a.sid=b.id')->where(['a.id'=>$vol['o_id']])->value('name');
                $vol['remark'] = '用户访问了入驻商家 '. $shop_name .' 的商品：'.$vol['remark'];
            }
        }
        $this->assign('list', $list['data']);
        
        return $this->fetch('index');
    }

    public function delete()
    {
        $map['uniacid'] = $this->appletid;
        $map['id'] = input('id');

        $res = Db::table('wd_xcx_visit_log')->where($map)->delete();
        if($res){
            $this->success('操作成功');
        }else{
            $this->error('操作失败');
        }
    }
    
    public function delete_all()
    {
        $map['uniacid'] = $this->appletid;

        $res = Db::table('wd_xcx_visit_log')->where($map)->delete();
        if($res){
            $this->success('操作成功');
        }else{
            $this->error('操作失败');
        }
    }
    
    public function top_list()
    {
         //排名前三的访问记录
        $top_list = Db::name('wd_xcx_visit_log')
            ->alias('a')
            ->join('wd_xcx_user b', 'a.user_id=b.id', 'left')
            ->join('wd_xcx_superuser c', 'b.suid=c.id', 'left')
            ->where(['a.uniacid' => $this->appletid])
            ->order('top_count desc')
            ->group('o_id')
            ->field('b.*,a.*,count(*) as top_count,c.phone')
            ->limit(10)
            ->select();
         foreach ($top_list as $key=>&$vol){
            if($vol['goods_type']==1){
                $vol['remark'] = '商城商品：'.$vol['remark'];
            }else{
                $shop_name = Db::name('wd_xcx_shops_goods')->alias('a')->join('wd_xcx_shops_shop b', 'a.sid=b.id')->where(['a.id'=>$vol['o_id']])->value('name');
                $vol['remark'] = '入驻商家 “'. $shop_name .'” 商品：'.$vol['remark'];
            }
        }
            
        $this->assign('top_list', $top_list);
        return $this->fetch();
    }
}
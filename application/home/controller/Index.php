<?php
namespace app\home\controller;
use think\Controller;
use think\Db;
use think\Request;
use think\Session;
use think\View;
use think\Url;

class Index extends Controller
{
    public function index(){
        // Url::root('/index.php');
        $sbase = "";
        $sbase =  Db::name('wd_xcx_com_about')->find();

        $sbase['banner'] = unserialize($sbase['banner']);
        $sbase['bannernum'] = 0;
        if($sbase['banner']['banner1'] != ""){
            $sbase['bannernum'] += 1;
        }
        if($sbase['banner']['banner2'] != ""){
            $sbase['bannernum'] += 1;
        }
        if($sbase['banner']['banner3'] != ""){
            $sbase['bannernum'] += 1;
        }
        //功能介绍
        $func = Db::name('wd_xcx_com_func')->limit(12)->order("num desc,id desc")->select();
        //小程序产品动态
        $news1 = Db::name('wd_xcx_com_news')->where("type",1)->limit(3)->order("num desc,id desc")->select();
        if($news1){
            foreach ($news1 as &$res) {
                $res['createtime'] = date("Y-m-d",$res['createtime']);
            }
        }
        // 小程序公司公告
        $news2 = Db::name('wd_xcx_com_news')->where("type",2)->limit(3)->order("num desc,id desc")->select();
        if($news2){
            foreach ($news2 as &$res) {
                $res['createtime'] = date("Y-m-d",$res['createtime']);
            }
        }
        // 小程序更新版本
        $news3 = Db::name('wd_xcx_com_news')->where("type",3)->limit(3)->order("num desc,id desc")->select();
        if($news3){
            foreach ($news3 as &$res) {
                $res['createtime'] = date("m-d",$res['createtime']);
            }
        }
        $register_flag = Db::name('wd_xcx_register')->value("flag");
        $register_flag = intval($register_flag) > 0 ? $register_flag : 2;

        $item = Db::name("wd_xcx_com_about")->find();
        $item['homeslide'] = unserialize($item['homeslide']);

        $item['slice1'] = $item['homeslide']['slice1'];

        $item['slice2'] = $item['homeslide']['slice2'];

        $item['slice3'] = $item['homeslide']['slice3'];

        $item['slice4'] = $item['homeslide']['slice4'];




        $news = Db::table('wd_xcx_com_news')->limit(3)->select();

        $this->assign("news",$news);
        $this->assign("newsinfo",$item);

        $this->assign('register_flag',$register_flag);
        $this->assign('func',$func);
        $this->assign('news1',$news1);
        $this->assign('news2',$news2);
        $this->assign('news3',$news3);
        $this->assign('sbase',$sbase);
//		dump($func);
        $list = Db::name("wd_xcx_com_func")->order("num desc,id desc")->paginate(100);
        $lists = [];
        foreach ($list as $key => $item) {
            $funcimg = unserialize($item['funcimg']);
            $item['funcimg'] =  '//'.$_SERVER['HTTP_HOST'].$funcimg[0];
            array_push($lists,$item);
        }
//             dump($lists);
        $this->assign("list",$lists);
        return $this->fetch('index');

    }
}
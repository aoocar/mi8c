<?php

namespace app\comhome\controller;



use think\Controller;

use think\Db;

use think\Request;

use think\Session;

use think\View;



class Functionshow extends Controller
{
    protected $navbar_items_list;
    protected $navbar_items_lists;
    public function __construct(Request $request = null)
    {
        parent::__construct($request);
        $navbar_items_list = Db::name("wd_xcx_com_func")->order("num desc,id desc")->paginate(100);
        $navbar_items_lists = [];
        foreach ($navbar_items_list as $key => $item) {
            $funcimg = unserialize($item['funcimg']);
            $item['funcimg'] =  '//'.$_SERVER['HTTP_HOST'].$funcimg[0];
            array_push($navbar_items_lists,$item);
        }
//             dump($lists);
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
        $this->assign('sbase',$sbase);
        $this->assign("navbar_items_lists",$navbar_items_lists);
//      dump($navbar_items_lists);
    }

    public function index(){
		$list = Db::name("wd_xcx_com_func")->order("num desc,id desc")->paginate(20);
//		dump($list);
		$this->assign("lists",$list);
		$this->assign("page",1);
		$this->assign("list",$list->toArray()['data']);
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
		$this->assign('sbase',$sbase);
		$register_flag = Db::name('wd_xcx_register')->value("flag");  

		$register_flag = intval($register_flag) > 0 ? $register_flag : 2;

		$this->assign('register_flag',$register_flag);
		return $this->fetch("index");

	}

	public function show(){

		$id = input("id");

		$info = Db::name("wd_xcx_com_func")->where("id",$id)->find();

		if($info){
			if($info['funcimg']){
				$info['funcimg'] = unserialize($info['funcimg']);
			}
			if($info['place']){
				$info['place'] = explode(",", $info['place']);
			}
			if($info['func']){
				$info['func'] = explode(",", $info['func']);
			}
		}
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
		$this->assign('sbase',$sbase);
		$this->assign("info",$info);
		$this->assign("page",1);
		$register_flag = Db::name('wd_xcx_register')->value("flag");  

		$register_flag = intval($register_flag) > 0 ? $register_flag : 2;
//		dump($info);
		$this->assign('register_flag',$register_flag);
		return $this->fetch("show");

	}
	public function addHits(){
		$id = input("id");
		$is = Db::name("wd_xcx_com_func")->where("id",$id)->field("hits")->find();
		$hits = $is['hits'] + 1;
		$res = Db::name("wd_xcx_com_func")->where("id",$id)->update(array("hits" => $hits));
		if($res){
			return 1;
		}
	}

	public function shared_hosting(){
        return $this->fetch();
}
	//测试地图
    public function testmap(){
	    return $this->fetch('testmap');
    }
}
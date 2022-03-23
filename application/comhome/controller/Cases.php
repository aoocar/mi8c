<?php

namespace app\comhome\controller;



use think\Controller;

use think\Db;

use think\Request;

use think\Session;

use think\View;



class Cases extends Controller

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

		$list = Db::name("wd_xcx_com_cases") ->where('flag', 1)->order("num desc,id desc")->paginate(20);

		$this->assign("lists",$list);
		$this->assign("page",3);
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

}
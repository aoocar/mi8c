<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
use think\Request;
use think\Session;
use think\View;
class Test extends Controller
{

    public function index(){
      $data = 'a:5:{s:14:"M1545293933396";a:6:{s:4:"icon";s:40:"iconfont2 icon-icon_xuanxiangqiayangshi-";s:3:"max";s:1:"2";s:6:"params";a:6:{s:9:"styledata";s:1:"0";s:6:"repeat";s:6:"repeat";s:9:"positionx";s:4:"left";s:9:"positiony";s:3:"top";s:4:"size";s:1:"0";s:13:"backgroundimg";s:0:"";}s:5:"style";a:11:{s:10:"background";s:7:"#ffffff";s:5:"color";s:7:"#666666";s:16:"activebackground";s:7:"#ffffff";s:11:"activecolor";s:7:"#ffcc00";s:12:"activeborder";s:7:"#ffcc00";s:7:"padding";s:1:"6";s:11:"paddingleft";s:1:"8";s:2:"mt";s:1:"0";s:9:"scrollnum";s:1:"3";s:5:"sizew";s:2:"20";s:5:"sizeh";s:2:"20";}s:4:"data";a:2:{s:14:"C1545293933396";a:2:{s:4:"text";s:12:"品牌故事";s:7:"linkurl";s:0:"";}s:14:"C1545293933397";a:3:{s:4:"text";s:12:"门店导航";s:7:"linkurl";s:23:"/sudu8_page/store/store";s:8:"linktype";s:4:"page";}}s:2:"id";s:6:"tabbar";}s:14:"M1545293752099";a:5:{s:4:"icon";s:28:"iconfont2 icon-tuoyuankaobei";s:6:"params";a:10:{s:5:"totle";s:1:"2";s:8:"navstyle";s:1:"0";s:9:"styledata";s:1:"0";s:6:"repeat";s:6:"repeat";s:9:"positionx";s:4:"left";s:9:"positiony";s:3:"top";s:4:"size";s:1:"0";s:13:"backgroundimg";s:0:"";s:9:"navstyle2";s:1:"0";s:4:"imgh";s:3:"250";}s:5:"style";a:18:{s:8:"dotstyle";s:5:"round";s:8:"dotalign";s:4:"left";s:10:"paddingtop";s:1:"0";s:11:"paddingleft";s:1:"9";s:10:"background";s:7:"#ffffff";s:13:"backgroundall";s:7:"#ffffff";s:9:"leftright";s:1:"5";s:6:"bottom";s:1:"5";s:7:"opacity";s:3:"0.8";s:10:"text_color";s:4:"#fff";s:2:"bg";s:7:"#000000";s:9:"jsq_color";s:3:"red";s:3:"pdh";s:1:"0";s:3:"pdw";s:1:"0";s:2:"mt";s:1:"0";s:5:"sizew";s:2:"20";s:5:"sizeh";s:2:"20";s:5:"speed";s:1:"5";}s:4:"data";a:2:{s:14:"C1545293752099";a:4:{s:6:"imgurl";s:66:"https://www.myyooo.com/template_img/template_food/page/banner1.png";s:7:"linkurl";s:0:"";s:6:"single";s:1:"1";s:4:"text";s:12:"文字描述";}s:14:"C1545293752100";a:4:{s:6:"imgurl";s:66:"https://www.myyooo.com/template_img/template_food/page/banner2.png";s:7:"linkurl";s:0:"";s:6:"single";s:1:"2";s:4:"text";s:12:"文字描述";}}s:2:"id";s:6:"banner";}s:14:"M1545288146922";a:5:{s:3:"max";s:1:"5";s:4:"icon";s:23:"iconfont2 icon-fuwenben";s:6:"params";a:1:{s:7:"content";s:608:"PHAgc3R5bGU9ImxpbmUtaGVpZ2h0OiAxLjVlbTsgbWFyZ2luLWJvdHRvbTogMTBweDsiPjxzcGFuIHN0eWxlPSJmb250LXNpemU6IDE4cHg7Ij48c3Ryb25nPuiCr+W+t+Wfujwvc3Ryb25nPjwvc3Bhbj48YnIvPjwvcD48cCBzdHlsZT0ibGluZS1oZWlnaHQ6IDEuNzVlbTsiPjxzcGFuIHN0eWxlPSJjb2xvcjogcmdiKDE2NSwgMTY1LCAxNjUpOyBmb250LXNpemU6IDE0cHg7Ij7mmK/nvo7lm73ot6jlm73ov57plIHppJDljoXkuYvkuIDvvIzkuZ/mmK/kuJbnlYznrKzkuozlpKfpgJ/po5/lj4rmnIDlpKfngrjpuKHov57plIHkvIHkuJrvvIwxOTUy5bm055Sx5Yib5aeL5Lq65ZOI5YWw4oCi5bGx5b635aOr5Yib5bu677yM5Li76KaB5Ye65ZSu54K46bih44CB5rGJ5aCh44CB6Jav5p2h44CB55uW6aWt44CB6JuL5oye44CB5rG95rC0562J6auY54Ot6YeP5b+r6aSQ6aOf5ZOB44CCPC9zcGFuPjwvcD4=";}s:5:"style";a:3:{s:10:"background";s:7:"#ffffff";s:7:"padding";s:2:"18";s:9:"margintop";s:1:"0";}s:2:"id";s:8:"richtext";}s:14:"M1545288892439";a:4:{s:4:"icon";s:32:"iconfont2 icon-liebiao_biaotilan";s:6:"params";a:10:{s:5:"title";s:26:"连锁电话：400-3625870";s:4:"icon";s:15:"icon-x-dianhua5";s:9:"styledata";s:1:"0";s:6:"repeat";s:6:"repeat";s:9:"positionx";s:4:"left";s:9:"positiony";s:3:"top";s:4:"size";s:1:"0";s:13:"backgroundimg";s:0:"";s:4:"link";s:15:"tel:400-3625870";s:8:"linktype";s:3:"tel";}s:5:"style";a:9:{s:10:"background";s:7:"#ffffff";s:5:"color";s:7:"#808080";s:9:"textalign";s:4:"left";s:8:"fontsize";s:2:"14";s:10:"paddingtop";s:2:"10";s:11:"paddingleft";s:2:"23";s:5:"sizew";s:2:"20";s:5:"sizeh";s:2:"20";s:2:"mt";s:1:"0";}s:2:"id";s:5:"title";}s:14:"M1545288895832";a:5:{s:4:"icon";s:32:"iconfont2 icon-liebiao_biaotilan";s:6:"params";a:8:{s:5:"title";s:27:"营业时间：8:00 - 20:00";s:4:"icon";s:15:"icon-x-shijian2";s:9:"styledata";s:1:"0";s:6:"repeat";s:6:"repeat";s:9:"positionx";s:4:"left";s:9:"positiony";s:3:"top";s:4:"size";s:1:"0";s:13:"backgroundimg";s:0:"";}s:5:"style";a:9:{s:10:"background";s:7:"#ffffff";s:5:"color";s:7:"#808080";s:9:"textalign";s:4:"left";s:8:"fontsize";s:2:"14";s:10:"paddingtop";s:2:"10";s:11:"paddingleft";s:2:"23";s:5:"sizew";s:2:"20";s:5:"sizeh";s:2:"20";s:2:"mt";s:1:"0";}s:2:"id";s:5:"title";s:5:"index";s:3:"NaN";}}';
    $Udata = unserialize($data);
    $dataKey = array_keys($Udata);
//   dump($dataKey);
    $nowData = [];
        foreach ($Udata as $key => $value) {
//            dump($key);
//            dump($value);
            if ($value['id'] === richtext){
               $value['style']['isscroll'] = 0;
            }
//           $v =  array_column($key,$value);
            array_push($nowData,$value);
        }
        $nowData = array_combine($dataKey,$nowData);
//        dump($nowData);
        dump(serialize($nowData));
//    dump($dataTwo);
    }

  public function test(){
  	$this->getShareBackGroubd(162);
  }
  
  public function getShareBackGroubd($uniacid){
  	$setColor = Db::name('wd_xcx_base') ->where('uniacid', $uniacid)->field('base_color, base_color2') ->find();
  	$down = $this->hex2rgb($setColor['base_color']);
  	$up = $this->hex2rgb($setColor['base_color2']);
  	
    $height = 534;
	$width = 300;

	$im = ImageCreateTrueColor($width, $height);
	//上边  162 172 254   
	//下边  119 131 234
	
	//上边： 217 237 30
	//下边： 124 212 22 根据这几个值，调整$i的系数
	//计算变化值
	$diff_r = $down['r'] - $up['r'];
	$diff_g = $down['g'] - $up['g'];
	$diff_b = $down['b'] - $up['b'];
	
	$diff_r_num = round(abs($diff_r)/530, 2);
	$diff_g_num = round(abs($diff_g)/530, 2);
	$diff_b_num = round(abs($diff_b)/530, 2);
	
	for ($i=0; $i < 534; $i++)
	{
		if($diff_r > 0){
			$diff_r_num_d = $up['r'] + floor($i * $diff_r_num);
		}else{
			$diff_r_num_d = $up['r'] - floor($i * $diff_r_num);
		}
		
		if($diff_g > 0){
			$diff_g_num_d = $up['g'] + floor($i * $diff_g_num);
		}else{
			$diff_g_num_d = $up['g'] - floor($i * $diff_g_num);
		}
		
		if($diff_b > 0){
			$diff_b_num_d = $up['b'] + floor($i * $diff_b_num);
		}else{
			$diff_b_num_d = $up['b'] - floor($i * $diff_b_num);
		}
		
		
		$Color=ImageColorAllocate($im, $diff_r_num_d, $diff_g_num_d, $diff_b_num_d);
		ImageLine($im, 0, 0+$i, $width, 0+$i, $Color);
		
	}
	
	$path = ROOT_PATH . 'public/shareImg/' .$uniacid.'_share_back.png';
	 
	//output image
	Header('Content-type: image/png');
	ImagePng($im, $path);
	 
	return $path;
  }
  
  
  private function hex2rgb($hexColor){
        $color=str_replace('#','',$hexColor);
        if (strlen($color)> 3){
            $rgb=array(
                'r'=>hexdec(substr($color,0,2)),
                'g'=>hexdec(substr($color,2,2)),
                'b'=>hexdec(substr($color,4,2))
            );
        }else{
            $r=substr($color,0,1). substr($color,0,1);
            $g=substr($color,1,1). substr($color,1,1);
            $b=substr($color,2,1). substr($color,2,1);
            $rgb=array(
                'r'=>hexdec($r),
                'g'=>hexdec($g),
                'b'=>hexdec($b)
            );
        }
        return $rgb;
    }
  
}
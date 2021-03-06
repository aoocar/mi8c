<?php
namespace app\comadmin\controller;

use think\Controller;
use think\Db;
use think\Request;
use think\Session;
use think\View;

class Funcrules extends Controller
{
    public function index(){
        if(check_login()){
//        	include ROOT_PATH.'application/index/controller/Ordinary.php';
	       // $or = new \Ordinary();
	        //$license = $or ->checkAuth();
	       // $this->assign("license", $license);
	       
            return $this->fetch('index');
        }else{
            $this->redirect('Index/Login/index');
        }
    }
    public function keys(){
    	//include ROOT_PATH.'application/index/controller/Ordinary.php';
       // $or = new \Ordinary();
       // $license = $or ->checkAuth();

  	$op = input('op');
    	$keys = '';

    	if($license[$op]){
    		$keys_arr = include ROOT_PATH.'application/index/controller/License.php';
            $keys = $keys_arr[$op];
    	}
		$this->assign("op", $op);
    	$this->assign("keys", $keys);
    	return $this->fetch('keys');
    }
    public function checkauth(){
        $op = input('op');
        $keys = input('keys');
        if($keys){
            $keys_arr = include ROOT_PATH.'application/index/controller/License.php';
             
            if(!isset($keys_arr[$op])){
                $license = urlencode($keys_arr['license']);
                $subkey = urlencode($keys);
                $hosturl = urlencode($_SERVER['HTTP_HOST']);

               $authhosturl = self::UPDATE_ENDPOINT . '?a=auth&u=' . $hosturl . '&key=' . $license . '&op=' . $op . '&subkey=' . $subkey;
                $authinfo = file_get_contents($authhosturl);
                $authinfo = json_decode($authinfo, true);
                if($authinfo['code'] == 0){
                    $keys_arr[$op] = htmlspecialchars_decode($keys);
                    $str = '<?php return [';
                    foreach ($keys_arr as $k => $v){
                        $str .= '\''.$k.'\''.'=>'.'\''.$v.'\''.',';
                    };
                    $str .= ']; ';
                    $path = ROOT_PATH.'application/index/controller/License.php';
                    if(file_put_contents($path, $str)){
                        $this->success("????????????");
                    }else {
                        $this->error("?????????????????????????????????????????????");
                    }
                }else{
                    $this->error("???????????????".$authinfo['message']);
                }
            }else{
                $this->error("??????????????????????????????????????????????????????");
            }
        }else{
            $this->error("???????????????????????????????????????");
        }
    }
}
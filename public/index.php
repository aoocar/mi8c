<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]
if(file_exists("../public/install") && !file_exists("../public/install/install.lock")){
    // 组装安装url
    $url=$_SERVER['HTTP_HOST'].trim($_SERVER['SCRIPT_NAME'],'index.php').'install/index.php';
    // 使用http://域名方式访问；避免./Public/install 路径方式的兼容性和其他出错问题
    header("Location:http://$url");
    die;
    }

// 定义应用目录
define('APP_PATH', __DIR__ . '/../application/');
define('APP_DEBUG',True);
define('APP_COMPANY',"百搜云端门店系统");
define('__PUBLIC__', '/..');
define('PAGELIMT',20);
define('PLATFORM', 'wn');

//define('LEFTFLAG',2);
$http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://'; 
$ROOT =  $http_type.$_SERVER['HTTP_HOST'];
define('ROOT_HOST',$ROOT);

$host = $_SERVER['HTTP_HOST'];

if(PLATFORM == 'wq'){
    define('STATIC_ROOT', '/addons/worldidc_cloud/core/public');
}else{
    define('STATIC_ROOT', '');
}


// 加载框架引导文件
require __DIR__ . '/../thinkphp/start.php';
require_once __DIR__ . '/../vendor/aliyun/autoload.php';
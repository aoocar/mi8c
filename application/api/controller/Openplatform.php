<?php

namespace app\api\controller;

use think\Controller;
use think\Db;

include_once EXTEND_PATH.'wxcypto'. DIRECTORY_SEPARATOR .'WXBizMsgCrypt.php';


class Openplatform extends Controller
{
    public function receiveTicket()
    {
        $timestamp = input('param.timestamp');
        $nonce = input('param.nonce');
        $msg_signature = input('param.msg_signature');
        $xml = preg_replace("/[\n\\s]/", "", file_get_contents("php://input"));

        $open_platform = Db::table('wd_xcx_open_platform')->order('id asc')->find();
        $wx = new \WXBizMsgCrypt($open_platform['token'], $open_platform['encoding_aes_key'], $open_platform['app_id']);
        $msg = "";

        $err_code = $wx->decryptMsg($msg_signature, $timestamp, $nonce, $xml, $msg);

        if(!$err_code ) {

            $res = simplexml_load_string($msg, 'SimpleXmlElement', LIBXML_NOCDATA);
            $arr = json_decode(json_encode($res), true);
            $cvt = Db::table('wd_xcx_component_verify_ticket')->where('app_id', $arr["AppId"])->find();
            $save_data['app_id'] = $arr["AppId"];
            $save_data['info_type'] = $arr["InfoType"];
            $save_data['create_time'] = $arr["CreateTime"];
            $save_data['component_verify_ticket'] = $arr["ComponentVerifyTicket"];
         
            if( !$cvt['id'] ) {
                Db::table('wd_xcx_component_verify_ticket')->insert($save_data);
            }else{
                Db::table('wd_xcx_component_verify_ticket')->where('app_id', $arr["AppId"])->update($save_data);
            }
        } else {
            file_put_contents('diy.log', date('H:i:s',time()).': '.$err_code."\n",FILE_APPEND);
        }
        echo "success";
        exit();
    }

    public function callback()
    {
        file_put_contents('diy.log', file_get_contents("php://input"));
        echo "";
    }


}
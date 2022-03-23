<?php

use think\Db;

/*
 * 获取平台信息
 */
function get_open_platform()
{
    $open_platform = Db::table('wd_xcx_open_platform')->order('id asc')->find();
    return $open_platform;
}

/*
 * 获取令牌(component_access_token)
 */
function get_component_access_token()
{
    $open_platform = get_open_platform();
    $cat = Db::table('wd_xcx_component_access_token')->where('app_id', $open_platform['app_id'])->find();
    if (!empty($cat)) {
        if (intval($cat['create_time']) + 7200 > time()) {
            return $cat['component_access_token'];
        }
    }
    
    $ticket = Db::table('wd_xcx_component_verify_ticket')->where('app_id', $open_platform['app_id'])->find();
    $body = HttpCurl::post(
        "https://api.weixin.qq.com/cgi-bin/component/api_component_token",
        json_encode([
            "component_appid"         => $open_platform['app_id'],
            "component_appsecret"     => $open_platform['app_secret'],
            "component_verify_ticket" => $ticket['component_verify_ticket']
        ])
    );
  
    $resp_arr = json_decode($body, 1);
  
    if (array_key_exists('component_access_token', $resp_arr)) {
        //请求component_access_token成功
        $save_data['app_id'] = $open_platform['app_id'];
        $save_data['component_access_token'] = $resp_arr['component_access_token'];
        $save_data['create_time'] = time();
        if($cat['id']){
            Db::table('wd_xcx_component_access_token')->where('id', $cat['id'])->update($save_data);
        }else{
            Db::table('wd_xcx_component_access_token')->insert($save_data);
        }
        return $resp_arr['component_access_token'];
    } else {
        diy_log($resp_arr);
        return false;
    }
}

/*
 * 获取预授权码(pre_auth_code)
 */
function get_pre_auth_code() {
    $component_access_token = get_component_access_token();
    if (!$component_access_token) {
        return false;
    }
    $open_platform = get_open_platform();

    $body = HttpCurl::post("https://api.weixin.qq.com/cgi-bin/component/api_create_preauthcode?component_access_token=" . $component_access_token,
        json_encode([
            "component_appid" => $open_platform['app_id'],
        ])
    );
    $resp_arr = json_decode($body, 1);
    if (array_key_exists('pre_auth_code', $resp_arr)) {
        //成功获取
        return $resp_arr['pre_auth_code'];
    } else {
        //获取失败
        return false;
    }
}

/*
 * 授权码(authorization_code) $auth_code
 * 使用授权码获取授权信息
 */
function get_authorizer_access_token($auth_code = null) {
    $wid = session('applet_uid');//当前小程序的管理员id
    $pub = Db::table('pubs')->where('uid', $wid)->find();

    $open_platform = get_open_platform();

    //参数是否存在
    if (!$auth_code) {
        //直接获取存储的authorizer_access_token
        if (intval($pub['token_create_time']) + 7000 < time()) {
            //当前存储的令牌已经失效
            //发起令牌刷新请求
            //获取cat令牌
            $component_access_token = get_component_access_token();
            if (!$component_access_token) {
                return false;
            }
            $open_platform = get_open_platform();

            //发起刷新请求
            $body = HttpCurl::post(
                "https://api.weixin.qq.com/cgi-bin/component/api_authorizer_token?component_access_token=" . $component_access_token,
                json_encode([
                    "component_appid"          => $open_platform['app_id'],
                    "authorizer_appid"         => $pub['authorizer_appid'],
                    "authorizer_refresh_token" => $pub['authorizer_refresh_token'],
                ])
            );
            $resp_arr = json_decode($body, 1);
            if (array_key_exists('authorizer_access_token', $resp_arr)) {
                //成功获取
                $save_data['authorizer_access_token'] = $resp_arr['authorizer_access_token'];
                $save_data['authorizer_refresh_token'] = $resp_arr['authorizer_refresh_token'];
                $save_data['token_create_time'] = time();
                Db::table('pubs')->where('uid', $wid)->update($save_data);
                return $resp_arr['authorizer_access_token'];
            } else {
                return false;
            }
        }
        //未失效
        return $pub['authorizer_access_token'];
    }
    //第一次授权，回调url中使用
    $component_access_token = get_component_access_token();
    if (!$component_access_token) {
        return false;
    }

    $body = HttpCurl::post(
        "https://api.weixin.qq.com/cgi-bin/component/api_query_auth?component_access_token=" . $component_access_token,
        json_encode([
            "component_appid"    => $open_platform['app_id'],
            "authorization_code" => $auth_code
        ])
    );
    $resp_arr = json_decode($body, 1);
    if (array_key_exists('authorization_info', $resp_arr)) {
        //成功获取
        $save_data['authorizer_access_token'] = $resp_arr['authorization_info']['authorizer_access_token'];//权限令牌
        $save_data['authorizer_refresh_token'] = $resp_arr['authorization_info']['authorizer_refresh_token'];//刷新令牌
        $save_data['authorizer_appid'] = $resp_arr['authorization_info']['authorizer_appid'];//授权方appid
        $save_data['token_create_time'] = time();//令牌创建时间
        $save_data['uid'] = $wid;
        if($pub){
            Db::table('pubs')->where('uid', $wid)->update($save_data);
        }else{
            Db::table('pubs')->insert($save_data);
        }
        return $resp_arr['authorization_info']['authorizer_access_token'];
    } else {
        return false;
    }
}


/*
 * 获取当前用户的小程序基本信息
 */
function get_authorizer_info() {
    $wid = session('applet_uid');
    $pub = Db::table('pubs')->where('uid', $wid)->find();
    $open_platform = get_open_platform();

    $component_access_token = get_component_access_token();
    $resp = HttpCurl::post(
        "https://api.weixin.qq.com/cgi-bin/component/api_get_authorizer_info?component_access_token=" . $component_access_token,
        json_encode([
            "component_appid"  => $open_platform['app_id'],
            "authorizer_appid" => $pub['authorizer_appid']
        ])
    );
    $resp_arr = json_decode($resp, 1);
    if (array_key_exists('authorizer_info', $resp_arr)) {
        return $resp_arr;
    } else {
        return false;
    }
}

/*
 * 获取体验小程序的体验二维码
 */
function get_test_qrcode() {
    $authorizer_access_token = get_authorizer_access_token();
    $resp = HttpCurl::get("https://api.weixin.qq.com/wxa/get_qrcode?access_token=" . $authorizer_access_token, []);
    return base64_encode($resp);
}

/*
 * 获取正式二维码
 */
function get_release_qrcode() {
    $info = get_authorizer_info();
    $qrcode_url = $info['authorizer_info']['qrcode_url'];
    $resp = HttpCurl::get($qrcode_url, []);
    return base64_encode($resp);
}

/*
 * 获取小程序状态信息
 */
function get_audit_status($item_id) {
    $item = Db::table('user_upload_code_record')->where('id', $item_id)->find();
    if ($item['id'] && $item['audit_id']) {
        $authorizer_access_token = get_authorizer_access_token();//获取当前后台登陆着的用户的授权令牌
        $resp = HttpCurl::post(
            "https://api.weixin.qq.com/wxa/get_auditstatus?access_token=" . $authorizer_access_token,
            json_encode(['auditid' => $item['audit_id']], JSON_UNESCAPED_UNICODE)
        );
        $resp_arr = json_decode($resp, 1);
        if (0 == $resp_arr['errcode']) {
            $save_data['is_audit'] = $resp_arr['status'];
            $save_data['unpass_reason'] = key_exists('reason', $resp_arr) ? $resp_arr['reason'] : '';
        } else {
            $errMap = [
                '-1'    => '系统繁忙',
                '86000' => '不是由第三方代小程序进行调用',
                '86001' => '不存在第三方的已经提交的代码',
                '85012' => '无效的审核id',
            ];
            $resp_arr['diy_reason'] = $errMap[$resp_arr['errcode']];
            if ($resp_arr['errcode'] != -1) {
                $save_data['is_audit'] = 1;
                $save_data['unpass_reason'] = $resp_arr['diy_reason'];
            }
        }
        Db::table('user_upload_code_record')->where('id', $item_id)->update($save_data);
    }
}

/*
 * 为授权的小程序帐号上传小程序代码
 */
function wx_upload_code($template_id, $ver,$remark, $uniacid) {
    $wid = session('applet_uid');//当前小程序的管理员id
    $pub = Db::table('pubs')->where('uid', $wid)->find();
    $authorizer_access_token = get_authorizer_access_token();//获取当前后台登陆着的用户的授权令牌
    //发起请求
    $body = HttpCurl::post("https://api.weixin.qq.com/wxa/commit?access_token=" . $authorizer_access_token, json_encode([
            "template_id"  => $template_id,
            "ext_json"     => json_encode([
                "extEnable" => true,
                'extAppid' => $pub['authorizer_appid'],//授权方的appid
                'ext'      => [
                    'wid' => $wid,
                    'uniacid' => $uniacid
                ]
            ]),
            "user_version" => $ver,
            "user_desc"    => $remark,
        ])
    );
    $resp_arr = json_decode($body, 1);
    if ($resp_arr['errcode'] == 0) {
        return true;
    } else {
        return false;
    }
}

/*
 * 获取可选的类目
 */
function get_wx_category() {
    $authorizer_access_token = get_authorizer_access_token();//获取当前后台登陆着的用户的授权令牌
    $resp = HttpCurl::get("https://api.weixin.qq.com/wxa/get_category?access_token=" . $authorizer_access_token, []);
    $resp_arr = json_decode($resp, 1);
    if (0 == $resp_arr['errcode']) {
        return $resp_arr['category_list'];
    } else {
        return false;
    }
}

/*
 * 获取小程序的页面
 */
function get_wx_page() {
    $authorizer_access_token = get_authorizer_access_token();//获取当前后台登陆着的用户的授权令牌
    $resp = HttpCurl::get("https://api.weixin.qq.com/wxa/get_page?access_token=" . $authorizer_access_token, []);
    $resp_arr = json_decode($resp, 1);
    if (0 == $resp_arr['errcode']) {
        return $resp_arr['page_list'];
    } else {
        return false;
    }
}

/*
 * 提交审核
 */
function wx_submit_audit($params) {
    $authorizer_access_token = get_authorizer_access_token();//获取当前后台登陆着的用户的授权令牌
    $resp = HttpCurl::post(
        "https://api.weixin.qq.com/wxa/submit_audit?access_token=" . $authorizer_access_token,
        json_encode($params, JSON_UNESCAPED_UNICODE)
    );
    $resp_arr = json_decode($resp, 1);
    if (0 == $resp_arr['errcode']) {
        return $resp_arr;
    } else {
        $errMap = [
            '-1'    => '系统繁忙',
            '86000' => '不是由第三方代小程序进行调用',
            '86001' => '不存在第三方的已经提交的代码',
            '85006' => '标签格式错误',
            '85007' => '页面路径错误',
            '85008' => '类目填写错误',
            '85009' => '已经有正在审核的版本',
            '85010' => 'item_list有项目为空',
            '85011' => '标题填写错误',
            '85023' => '审核列表填写的项目数不在1-5以内',
            '85077' => '小程序类目信息失效（类目中含有官方下架的类目，请重新选择类目）',
            '86002' => '小程序还未设置昵称、头像、简介。请先设置完后再重新提交。',
        ];
        $resp_arr['diy_reason'] = $errMap[$resp_arr['errcode']];
        return $resp_arr;
    }
}

/*
 * 撤销审核
 */
function undo_code_audit() {
    $wid = session('applet_uid');//当前小程序的管理员id
    $pub = Db::table('pubs')->where('uid', $wid)->find();
    $authorizer_access_token = get_authorizer_access_token();//获取当前小程序管理员用户的授权令牌
    $resp = HttpCurl::get("https://api.weixin.qq.com/wxa/undocodeaudit?access_token=" . $authorizer_access_token, []);
    $resp_arr = json_decode($resp, 1);
    if (0 == $resp_arr['errcode']) {
        return $resp_arr;
    } else {
        $errMap = [
            '-1'    => '系统繁忙',
            '87013' => '撤回次数达到上线（每天一次，每个月10次）',
        ];
        $resp_arr['diy_reason'] = $errMap[$resp_arr['errcode']];
        return $resp_arr;
    }
}
/*
 * 发布已通过审核的代码
 */
function set_wx_release() {
    $authorizer_access_token = get_authorizer_access_token();//获取当前后台登陆着的用户的授权令牌
    $resp = HttpCurl::post("https://api.weixin.qq.com/wxa/release?access_token=" . $authorizer_access_token, '{}');
    $resp_arr = json_decode($resp, 1);
    if (0 == $resp_arr['errcode']) {
        return $resp_arr;
    } else {
        $errMap = [
            '-1'    => '系统繁忙',
            '85019' => '没有审核版本',
            '85020' => '审核状态未满足发布',
        ];
        $resp_arr['diy_reason'] = $errMap[$resp_arr['errcode']] ? $errMap[$resp_arr['errcode']] : '未知的错误，请稍后重试';
        return $resp_arr;
    }
}

/*
 * 绑定微信用户为小程序体验者
 */
function bind_tester($wechatid) {
    $authorizer_access_token = get_authorizer_access_token();//获取当前后台登陆着的用户的授权令牌
    //发起请求
    $body = HttpCurl::post(
        "https://api.weixin.qq.com/wxa/bind_tester?access_token=" . $authorizer_access_token,
        json_encode([
            "wechatid" => $wechatid
        ])
    );
    $resp_arr = json_decode($body, 1);
    if ($resp_arr['errcode'] == 0 || $resp_arr['errcode'] == 85004) {
        return [true];
    } else {
        //获取失败
        $errMap = [
            '-1'    => '系统繁忙',
            '85001' => '微信号不存在或微信号设置为不可搜索',
            '85002' => '小程序绑定的体验者数量达到上限',
            '85003' => '微信号绑定的小程序体验者达到上限',
            '85004' => '微信号已经绑定',
        ];
        return [
            false,
            $errMap[$resp_arr['errcode']]
        ];
    }
}

/*
 * 解除绑定小程序的体验者
 */
function unbind_tester($wechatid) {
    $authorizer_access_token = get_authorizer_access_token();//获取当前后台登陆着的用户的授权令牌
    //发起请求
    $body = HttpCurl::post(
        "https://api.weixin.qq.com/wxa/unbind_tester?access_token=" . $authorizer_access_token,
        json_encode([
            "wechatid" => $wechatid
        ])
    );
    $resp_arr = json_decode($body, 1);
    if ($resp_arr['errcode'] == 0) {
        //成功设置
        return true;
    } else {
        //获取失败
        return false;
    }
}

/*
 * 获取or设置服务器域名
 */
function applet_domains($method, $requestdomain = [], $wsrequestdomain = [], $uploaddomain = [], $downloaddomain = []) {
    if (!in_array($method, ['get', 'set'])) {
        return false;
    }
    if ($method == 'get') {
        $data = [
            "action" => 'get',
        ];
    } else if ($method == 'set') {
        $data = [
            "action"          => 'set',
            "requestdomain"   => $requestdomain,
            "wsrequestdomain" => $wsrequestdomain,
            "uploaddomain"    => $uploaddomain,
            "downloaddomain"  => $downloaddomain,
        ];
    }
    $authorizer_access_token = get_authorizer_access_token();//获取当前后台登陆着的用户的授权令牌
    //发起请求
    $body = HttpCurl::post(
        "https://api.weixin.qq.com/wxa/modify_domain?access_token=" . $authorizer_access_token,
        json_encode($data)
    );
    $resp_arr = json_decode($body, 1);
    return $resp_arr;
}
/*
 * 设置业务域名
 */
function webview_domains($method, $webviewdomain = []) {
    if (!in_array($method, ['get', 'set'])) {
        return false;
    }
    if ($method == 'get') {
        $data = [
            "action" => 'get',
        ];
    } else if ($method == 'set') {
        $data = [
            "action"        => 'set',
            "webviewdomain" => $webviewdomain,
        ];
    }
    $authorizer_access_token = get_authorizer_access_token();//获取当前后台登陆着的用户的授权令牌
    //发起请求
    $body = HttpCurl::post(
        "https://api.weixin.qq.com/wxa/setwebviewdomain?access_token=" . $authorizer_access_token,
        json_encode($data)
    );
    $resp_arr = json_decode($body, 1);
    return $resp_arr;
}

/*
 * 获取获取微信开放平台代码模板列表
 */
function get_template_list()
{
    $compoent_access_token = get_component_access_token();
    //发送请求
    $body = HttpCurl::get('https://api.weixin.qq.com/wxa/gettemplatelist?access_token='.$compoent_access_token,[]);
    $res = json_decode($body,1);
    if ($res['errcode'] === 0){
        return $res['template_list'];
    }else{
        return false;
    }

}
/*
 * 写入日志
 */
function diy_log ($data) {
    file_put_contents('diy.log', date('H:i:s',time()).': '.json_encode($data,JSON_UNESCAPED_UNICODE)."\n",FILE_APPEND);
}

function xml_to_array($xml)
{
    $res = simplexml_load_string($xml, 'SimpleXmlElement', LIBXML_NOCDATA);
    return json_decode(json_encode($res), true);
}
function audit_status_to_text($item)
{
    $status = $item['is_audit'];
    switch ($status) {
        case -1:
            return '未提交审核';
            break;
        case 0:
            return '审核成功';
            break;
        case 1:
            return '审核未通过 : ' . $item['unpass_reason'];
            break;
        case 2:
            return '审核中，请耐心等待';
            break;
        default:
            return '查询状态信息出现错误';
            break;
    }
}

var addr, port, version, clientid, username, password, clean_session;
var pub_topic_handle_json = {};
var sup_topic_id = 0, pup_topic_id = 0;
var ca_file_str = '';

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "H+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
}

function get_value() {
    addr = document.getElementById("brokerAddress").value;
    port = document.getElementById("brokerPort").value;
    version = document.getElementById("mqttVersion").value;
    clientid = document.getElementById("clientID").value;
    username = document.getElementById("userName").value;
    password = document.getElementById("password").value;
    clean_session = document.getElementById("cleanSession").checked;
}

function print_value() {
    get_value();
    console.log("addr: " + addr);
    console.log("port: " + port);
    console.log("version: " + version);
    console.log("clientid: " + clientid);
    console.log("username: " + username);
    console.log("password: " + password);
    console.log("clean_session: " + clean_session);
}

function random_string(min, max = 32, flag = false) {
    var str = "";
    range = min;
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
            'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 
            'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 
            'Y', 'Z'];

    if (flag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i=0; i<range; i++) {
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

function code_render(code, context) {
    var template = code;
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => context[key]);
}


function do_import_template()
{
    get_value();

    if (addr != "" || port != "" || clientid != ""
        || username != "" || password != "") {
        var is_yes = window.confirm("已经填写数据，是否导入模板覆盖填写的内容？");
        if (!is_yes)
            return false;//返回
    }

    $("#brokerAddress").val("www.jiejie01.top");
    $("#brokerPort").val("1883");
    $("#clientID").val(random_string(10));
    $("#userName").val(random_string(10));
    $("#password").val(random_string(10));
    $("#keepAliveInterval").val(50);
    $("#cmdTimeout").val(5000);
    $("#ReadBufSize").val(2048);
    $("#WriteBufSize").val(2048);
    $("#subTopic1").val("sub_topic1");
    $("#subTopicHandle1").val("sub_topic_handle1");
    // $("#subTopic2").val("sub_topic2");
    // $("#subTopicHandle2").val("sub_topic_handle2");
    $("#pubTopic1").val("sub_topic1");
    $("#pubTopicMessage1").val(random_string(20));
}

function get_json_val(json, key) 
{
    return json[''+key+''];
}

function do_generate_code_form_data(code_json, json) 
{
    var tmp_code = '';
    for (var val in json) {
        if ((json[val] != "") && (json[val] != "NULL")) {
            tmp = get_json_val(code_json, val);
            if ((typeof(tmp) != "undefined") && (tmp != "")) {
                // console.log(tmp);
                tmp_code += code_render(tmp, json);
                tmp_code += '\n';
                // console.log(tmp_code);
            }
        }
    }
    return tmp_code;
}

function generate_include_code() {
    var time = {};
    time["now_time"] = new Date().Format("yyyy-MM-dd HH:mm:ss");
    return code_render(necessary_include_code, time);
}

function generate_ca_file_code(json) 
{
    if (ca_file_str != '') {
        var ca_tmp ='';
        var ca_json = {};
        ca_file_str.trim().split('\n').forEach(function(v, i) {
            window['str' + (i+1)] = v

            ca_tmp += '\"' + v + "\\r\\n" + '\"' + '\n'; 
        })
        // console.log(ca_tmp);
        ca_json["ca"] = ca_tmp;
        return do_generate_code_form_data(input_ca_file_code_json, ca_json);
    }
    return '';
}


function generate_sub_topic_handle_code(json) 
{
    return do_generate_code_form_data(sub_topic_handle_code_json, json);
}

function generate_pub_topic_handle_code(json) 
{
    for (var val in publish_handle_json) {
        // console.log(val);
        var tmp =json[val];
        if ((typeof(tmp) != "undefined") && (tmp != "")) {
            // console.log(publish_handle_json[val]);
            pub_topic_handle_json[val] = publish_handle_json[val];
        } else {
            pub_topic_handle_json[val] = '';
        }
    }

    return do_generate_code_form_data(pub_topic_handle_code_json, json);
}

function generate_connect_setting_code(json) 
{
    return do_generate_code_form_data(connect_setting_code_json, json);
}

function generate_subscribe_topic_code(json) 
{
    return do_generate_code_form_data(subscribe_topic_code_json, json);
}

function generate_main_end_code() 
{
    return code_render(necessary_main_end_code, pub_topic_handle_json);
}

function do_generate_code()
{
    var i = 0;
    var tmp;
    var generate_code = '';
    var json = {};

    json = traverse_get_json();

    generate_code += generate_include_code();

    generate_code += generate_ca_file_code(json)

    generate_code += generate_sub_topic_handle_code(json);

    generate_code += generate_pub_topic_handle_code(json);

    generate_code += necessary_main_start_code; 

    generate_code +=generate_connect_setting_code(json);

    generate_code += necessary_main_middle_code; 

    generate_code +=generate_subscribe_topic_code(json);

    generate_code += generate_main_end_code(); 

    return generate_code;
}


function traverse_resets()
{
    var controls = document.getElementsByTagName('input');
    for (var i=0; i<controls.length; i++) {
        if (controls[i].type=='text') {
            controls[i].value='';
        }
    }
}

function traverse_get_json()
{
    var json = {};
    var controls = document.getElementsByTagName('input');
    for (var i=0; i<controls.length; i++) {
        if (controls[i].type=='text') {
            var id = controls[i].name;
            json[id] = controls[i].value;
        }
        else if (controls[i].type=='checkbox') {
            var id = controls[i].name;
            if (controls[i].checked == true) {
                json[id] = 1;
            } else {
                json[id] = 0;
            }
        }        
        else if (controls[i].type=='file') {
            var id = controls[i].name;
            if (ca_file_str != '') {
                json[id] = "ca_file_str";
            } else {
                json[id] = '';
            }
        }
    }

    controls = document.getElementsByTagName('select');
    for (var i=0; i<controls.length; i++) {
        var index = controls[i].selectedIndex ; 
        var id = controls[i].name;
        json[id] = controls[i].options[index].value;
    }

    controls = document.getElementsByTagName('textarea');
    for (var i=0; i<controls.length; i++) {
        var id = controls[i].name;
        json[id] = controls[i].value;
    }

    // console.log(json);
    return json;
}

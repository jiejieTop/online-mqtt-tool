
var addr, port, ca, version, clientid, username, password, clean_session;

var code_template = 
    "mqtt_set_port(client, \"1883\");" +
    "mqtt_set_host(client, \"www.jiejie01.top\");" +
    "mqtt_set_ca(client, (char*)test_ca_get());" +
    "mqtt_set_client_id(client, random_string(10));" +
    "mqtt_set_user_name(client, random_string(10));" +
    "mqtt_set_password(client, random_string(10));" +
    "mqtt_set_clean_session(client, 1);"+
    "mqtt_connect(client);" +
    "mqtt_subscribe(client, \"topic1\", QOS0, topic1_handler);" 


var necessary_code = '\
mqtt_client_t *client = NULL;\n\n\
mqtt_log_init();\n\n\
client = mqtt_lease();\n\n'

// var setting_code = new Array();
// setting_code[0] = 'mqtt_set_host(client, "{{host}}");';
// setting_code[1] = 'mqtt_set_port(client, "{{port}}");';
// setting_code[2] = 'mqtt_set_ca(client, "{{ca}}");';
// setting_code[3] = 'mqtt_set_client_id(client, "{{client_id}}");';
// setting_code[4] = 'mqtt_set_user_name(client, "{{user_name}}");';
// setting_code[5] = 'mqtt_set_password(client, "{{password}}");';
// setting_code[6] = 'mqtt_set_clean_session(client, {{clean_session}});';
// setting_code[7] = 'mqtt_set_version(client, {{version}});';
// setting_code[8] = 'mqtt_set_cmd_timeout(client, {{cmd_timeout}});';
// setting_code[9] = 'mqtt_set_keep_alive_interval(client, {{keep_alive_interval}});';
// setting_code[10] = 'mqtt_set_read_buf_size(client, {{read_buf_size}});';
// setting_code[11] = 'mqtt_set_write_buf_size(client, {{write_buf_size}});';

var connect_code_json = {
    host: 'mqtt_set_host(client, "{{host}}");',
    port: 'mqtt_set_port(client, "{{port}}");',
    ca: 'mqtt_set_ca(client, "{{ca}}");',
    client_id: 'mqtt_set_client_id(client, "{{client_id}}");',
    user_name: 'mqtt_set_user_name(client, "{{user_name}}");',
    password: 'mqtt_set_password(client, "{{password}}");',
    version: 'mqtt_set_version(client, {{version}});',
    clean_session: 'mqtt_set_clean_session(client, {{clean_session}});',
    cmd_timeout: 'mqtt_set_cmd_timeout(client, {{cmd_timeout}});',
    keep_alive_interval: 'mqtt_set_keep_alive_interval(client, {{keep_alive_interval}});',
    read_buf_size: 'mqtt_set_read_buf_size(client, {{read_buf_size}});',
    write_buf_size: 'mqtt_set_write_buf_size(client, {{write_buf_size}});',
}



function get_value() {
    addr = document.getElementById("brokerAddress").value;
    port = document.getElementById("brokerPort").value;
    ca = document.getElementById("brokerCA").value;
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
    console.log("ca: " + ca);
    console.log("version: " + version);
    console.log("clientid: " + clientid);
    console.log("username: " + username);
    console.log("password: " + password);
    console.log("clean_session: " + clean_session);
}

// function import_template_file() {
//     var openf = fso.OpenTextFile("template.c");
//     var str2 = openf.ReadAll();
//     return str2;
// }



function import_template_file() {
    var fso, str2;
    var ForReading = 1;
    var fso = new FileReader();
    // fso = new ActiveXObject("Scripting.FileSystemObject");
    // 打开文件
    // openf = fso.OpenTextFile("./template.c", ForReading);
    fso.readAsText("./template.c");

    var str2 = openf.ReadAll();
    openf.Close();
    return str2;
}


function code_render(code, context) {
    // console.log("code_render" + code + ":" + context)
    var template = code;
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => context[key]);
}


function do_import_template()
{
    get_value();

    if (addr != "" || port != "" || ca != "" || clientid != ""
        || username != "" || password != "") {
        var is_yes = window.confirm("已经填写数据，是否导入模板覆盖填写的内容？");
        if(!is_yes)
            return false;//返回
    }

    $("#brokerAddress").val("www.jiejie01.top");
    $("#brokerPort").val("1883");
    $("#clientID").val("123456");
    $("#userName").val("jiejie");
    $("#password").val("jiejietop");
}

function get_json_val(json, key){
    return json[''+key+''];
}

function do_generate_code()
{
    var i = 0;
    var generate_code = necessary_code;
    var json = {};

    json = traverse_get_json();


    for (var val in json) {
        if (json[val] != "") {
            // console.log(val + ":" + json[val]);
            var tmp = get_json_val(connect_code_json, val);

            if (tmp != "") {
                console.log(tmp);
                generate_code += code_render(tmp, json);
                generate_code += '\n';
                console.log(generate_code);
            }
        }
    }
    
    return generate_code;
    // return JSON.stringify(setting_code_json);
}


function traverse_resets()
{
    var controls = document.getElementsByTagName('input');
    for(var i=0; i<controls.length; i++) {
        if(controls[i].type=='text') {
            controls[i].value='';
        }
    }
}

function traverse_get_json()
{
    var json = {};
    var controls = document.getElementsByTagName('input');
    for(var i=0; i<controls.length; i++) {
        if(controls[i].type=='text') {
            var id = controls[i].name;
            json[id] = controls[i].value;
        }
        else if(controls[i].type=='checkbox') {
            var id = controls[i].name;
            if(controls[i].checked == true) {
                json[id] = 1;
            } else {
                json[id] = 0;
            }
        }
    }

    // controls = document.getElementsByTagName('select');
    // for(var i=0; i<controls.length; i++) {
    //     var index = controls[i].selectedIndex ; 
    //     var id = controls[i].name;
    //     json[id] = controls[i].options[index].value;
    // }

    // JSON.stringify(list);//将对象转换为json
    console.log(json);
    return json;
}


// class TextAsset{
//     constructor(name, data){
//         this.name = name;
//         this.data = data;        
//     }    
// }

// class TextLoader {
//     loadAsset(name, onComplete){
//         let request = new XMLHttpRequest();
//         request.onreadystatechange = function(){
//             if(request.readyState === XMLHttpRequest.DONE && request.status !== 404){
//                 let asset = new TextAsset(name, request.responseText);
//                 if(onComplete){
//                     onComplete(asset);
//                 }   
//             }
//         }       
//         request.open('GET', name, true);
//         request.send();
//     }
// }

// export { TextAsset, TextLoader };

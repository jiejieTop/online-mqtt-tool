
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
mqtt_log_init();\n\
client = mqtt_lease();'

var setting_code = '\
mqtt_set_{{port}}(client, "{{port}}");\n\
'


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


function code_render(template, context) {
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

function do_generate_code()
{
    var json = {};
    json = traverse_get_json();

    // console.log(code_render(setting_code, json));

    return necessary_code;
    // return JSON.stringify(json);
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

    controls = document.getElementsByTagName('select');
    for(var i=0; i<controls.length; i++) {
        var index = controls[i].selectedIndex ; 
        var id = controls[i].name;
        json[id] = controls[i].options[index].value;
    }

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

var config_template_json = {};

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

function code_render(code, context) {
    var template = code;
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => context[key]);
}

function get_json_val(json, key) 
{
    return json[''+key+''];
}

function do_supplement_config_template_anyway()
{
    console.log(config_template_json);
    var controls = document.getElementsByTagName('input');
    for (var i=0; i<controls.length; i++) {
            var value = get_json_val(config_template_json, controls[i].name);
            controls[i].value = value;
    }
    var controls = document.getElementsByTagName('select');
    for (var i=0; i<controls.length; i++) {
            var value = get_json_val(config_template_json, controls[i].name);
            controls[i].value = value;
    }
}

function do_supplement_config_template()
{
    // console.log(config_template_json);
    var controls = document.getElementsByTagName('input');
    for (var i=0; i<controls.length; i++) {
        if (controls[i].value == '') {
            var value = get_json_val(config_template_json, controls[i].name);
            controls[i].value = value;
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
    }

    controls = document.getElementsByTagName('select');
    for (var i=0; i<controls.length; i++) {
        var index = controls[i].selectedIndex ; 
        var id = controls[i].name;
        json[id] = controls[i].options[index].value;
    }

    // console.log(json);
    return json;
}

function json_supplement(json, def_json)
{
    for (var key in def_json) {
        var tmp = get_json_val(json, key);
        // console.log(tmp);
        if (typeof(tmp) == 'undefined') {
            json[key] = def_json[key];
        }
    }
    return json;
}

function do_generate_config_code(config_template) 
{
    var json = {};
    json = traverse_get_json();
    json["nowTime"] = new Date().Format("yyyy-MM-dd HH:mm:ss");

    json = json_supplement(json, config_template_json);

    return code_render(config_template, json);
}

function get_more_table_template(id, json) 
{
    if ((id % 2) == 0) {
        return code_render(more_table_template1, json);
    } else {
        return code_render(more_table_template2, json);
    }
    return '';
}


var more_sub_topic = '\
<div class="wrapper-all">\
<div class="wrapper">\
    <div class="all">\
        <div class="connection2">\
            <div class="form-group1">\
                <label for="subTopic{{id}}">主题名字</label>\
                <input type="text" class="form-control" id="subTopic{{id}}" name="sub_topic{{id}}" placeholder="topicName">\
            </div>\
            <div class="form-group1">\
                <label for="subTopicQos{{id}}">服务质量</label>\
                <select type="text" class="form-control" id="subTopicQos{{id}}" name="sub_topic_qos{{id}}">\
                    <option value="QOS0">QoS0</option>\
                    <option value="QOS1">QoS1</option>\
                    <option value="QOS2">QoS2</option>\
                </select>\
            </div>\
            <div class="form-group1">\
                <label for="subTopicHandle{{id}}">主题处理函数</label>\
                <input type="text" class="form-control" id="subTopicHandle{{id}}" name="sub_topic_handle{{id}}" value="NULL"\
                       onfocus = "if (value == \'NULL\') {value = \'\'}" onblur = "if (value == \'\') {value = \'NULL\'}"/>\
            </div>\
        </div>\
    </div>\
</div>\
</div>'

var more_pub_topic = '\
<div class="wrapper-all">\
<div class="wrapper">\
    <div class="all">\
        <div class="connection2">\
            <div class="form-group1">\
                <label for="pubTopic{{id}}">主题名字</label>\
                <input type="text" class="form-control" id="pubTopic{{id}}" name="pub_topic{{id}}" placeholder="topicName">\
            </div>\
            <div class="form-group1">\
                <label for="pubTopicQos{{id}}">服务质量</label>\
                <select type="text" class="form-control" id="pubTopicQos{{id}}" name="pub_topic_qos{{id}}">\
                    <option value="0">QoS0</option>\
                    <option value="1">QoS1</option>\
                    <option value="2">QoS2</option>\
                </select>\
            </div>\
            <div class="form-group1">\
                <label for="pubTopicMessage{{id}}">发布的消息</label>\
                <textarea type="text" class="form-control1" id="pubTopicMessage{{id}}" name="pub_topic_message{{id}}" value=\'NULL\' rows="1"\
                          onfocus = "if (value == \'NULL\') {value = \'\'}" onblur = "if (value == \'\') {value = \'NULL\'}" ></textarea>\
            </div>\
        </div>\
    </div>\
</div>\
</div>'


var will_retain_flag = '\
<input style="vertical-align:middle" type="checkbox" id="willRetain" name="will_retain" value="1">遗嘱保留</input>\
'

var will_setting = '\
<div class="wrapper-all">\
<div class="wrapper">\
    <div class="all">\
        <div class="connection2">\
            <div class="form-group1">\
                <label for="willTopic">遗嘱主题</label>\
                <input type="text" class="form-control" id="willTopic" name="will_topic" placeholder="topicName">\
            </div>\
            <div class="form-group1">\
                <label for="willQos">服务质量</label>\
                <select type="text" class="form-control" id="willQos" name="will_qos">\
                    <option value="QOS0">QoS0</option>\
                    <option value="QOS1">QoS1</option>\
                    <option value="QOS2">QoS2</option>\
                </select>\
            </div>\
            <div class="form-group1">\
                <label for="willMessage">遗嘱消息</label>\
                <textarea type="text" class="form-control1" id="willMessage" name="will_message" value=\'NULL\' rows="1" placeholder="NULL"></textarea>\
            </div>\
        </div>\
    </div>\
</div>\
</div>\
'


function get_more_sub_topic(id) 
{
    var tmp = {"id": id};
    return code_render(more_sub_topic, tmp);
}


function get_more_pub_topic(id) 
{
    var tmp = {"id": id};
    return code_render(more_pub_topic, tmp);
}

function refresh_pub_topic_message(id) 
{
    var tmp = {"id": id};
    $(code_render("#pubTopicMessage{{id}}", tmp)).val("NULL");
}




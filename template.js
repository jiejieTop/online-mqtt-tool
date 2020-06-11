
var necessary_include_code = '\n\
/*\n\
 * @Author: jiejie\n\
 * @Github: https://github.com/jiejieTop\n\
 * @LastEditTime: {{now_time}}\n\
 * @Description: the code belongs to jiejie, please keep the author information and source code according to the license.\n\
 */\n\
#include <stdio.h>\n\
#include <stdint.h>\n\
\n\
#include "mqttclient.h"\n\n\
'

var sub_topic_handle_code1 = '\n\
static void {{sub_topic_handle1}}(void* client, message_data_t* msg)\n\
{\n\
    (void) client;\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
    MQTT_LOG_I("%s:%d %s()...\\ntopic: %s\\nmessage:%s", __FILE__, __LINE__, __FUNCTION__, msg->topic_name, (char*)msg->message->payload);\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
}\n\
'

var sub_topic_handle_code2 = '\n\
static void {{sub_topic_handle2}}(void* client, message_data_t* msg)\n\
{\n\
    (void) client;\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
    MQTT_LOG_I("%s:%d %s()...\\ntopic: %s\\nmessage:%s", __FILE__, __LINE__, __FUNCTION__, msg->topic_name, (char*)msg->message->payload);\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
}\n\
'

var sub_topic_handle_code3 = '\n\
static void {{sub_topic_handle3}}(void* client, message_data_t* msg)\n\
{\n\
    (void) client;\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
    MQTT_LOG_I("%s:%d %s()...\\ntopic: %s\\nmessage:%s", __FILE__, __LINE__, __FUNCTION__, msg->topic_name, (char*)msg->message->payload);\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
}\n\
'

var sub_topic_handle_code4 = '\n\
static void {{sub_topic_handle4}}(void* client, message_data_t* msg)\n\
{\n\
    (void) client;\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
    MQTT_LOG_I("%s:%d %s()...\\ntopic: %s\\nmessage:%s", __FILE__, __LINE__, __FUNCTION__, msg->topic_name, (char*)msg->message->payload);\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
}\n\
'

var sub_topic_handle_code5 = '\n\
static void {{sub_topic_handle5}}(void* client, message_data_t* msg)\n\
{\n\
    (void) client;\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
    MQTT_LOG_I("%s:%d %s()...\\ntopic: %s\\nmessage:%s", __FILE__, __LINE__, __FUNCTION__, msg->topic_name, (char*)msg->message->payload);\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
}\n\
'

var sub_topic_handle_code6 = '\n\
static void {{sub_topic_handle6}}(void* client, message_data_t* msg)\n\
{\n\
    (void) client;\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
    MQTT_LOG_I("%s:%d %s()...\\ntopic: %s\\nmessage:%s", __FILE__, __LINE__, __FUNCTION__, msg->topic_name, (char*)msg->message->payload);\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
}\n\
'

var sub_topic_handle_code7 = '\n\
static void {{sub_topic_handle7}}(void* client, message_data_t* msg)\n\
{\n\
    (void) client;\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
    MQTT_LOG_I("%s:%d %s()...\\ntopic: %s\\nmessage:%s", __FILE__, __LINE__, __FUNCTION__, msg->topic_name, (char*)msg->message->payload);\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
}\n\
'

var sub_topic_handle_code8 = '\n\
static void {{sub_topic_handle8}}(void* client, message_data_t* msg)\n\
{\n\
    (void) client;\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
    MQTT_LOG_I("%s:%d %s()...\\ntopic: %s\\nmessage:%s", __FILE__, __LINE__, __FUNCTION__, msg->topic_name, (char*)msg->message->payload);\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
}\n\
'

var sub_topic_handle_code9 = '\n\
static void {{sub_topic_handle9}}(void* client, message_data_t* msg)\n\
{\n\
    (void) client;\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
    MQTT_LOG_I("%s:%d %s()...\\ntopic: %s\\nmessage:%s", __FILE__, __LINE__, __FUNCTION__, msg->topic_name, (char*)msg->message->payload);\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
}\n\
'

var sub_topic_handle_code10 = '\n\
static void {{sub_topic_handle10}}(void* client, message_data_t* msg)\n\
{\n\
    (void) client;\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
    MQTT_LOG_I("%s:%d %s()...\\ntopic: %s\\nmessage:%s", __FILE__, __LINE__, __FUNCTION__, msg->topic_name, (char*)msg->message->payload);\n\
    MQTT_LOG_I("-----------------------------------------------------------------------------------");\n\
}\n\
'


var pub_topic_handle_code1 = '\n\
static int mqtt_publish_handle1(mqtt_client_t *client)\n\
{\n\
    mqtt_message_t msg;\n\
    memset(&msg, 0, sizeof(msg));\n\n\
    msg.qos = {{pub_topic_qos1}};\n\
    msg.payload = (void *) "{{pub_topic_message1}}";\n\n\
    return mqtt_publish(client, "{{pub_topic1}}", &msg);\n\
}\n\
'

var pub_topic_handle_code2 = '\n\
static int mqtt_publish_handle2(mqtt_client_t *client)\n\
{\n\
    mqtt_message_t msg;\n\
    memset(&msg, 0, sizeof(msg));\n\n\
    msg.qos = {{pub_topic_qos2}};\n\
    msg.payload = (void *) "{{pub_topic_message2}}";\n\n\
    return mqtt_publish(client, "{{pub_topic2}}", &msg);\n\
}\n\
'

var pub_topic_handle_code3 = '\n\
static int mqtt_publish_handle3(mqtt_client_t *client)\n\
{\n\
    mqtt_message_t msg;\n\
    memset(&msg, 0, sizeof(msg));\n\n\
    msg.qos = {{pub_topic_qos3}};\n\
    msg.payload = (void *) "{{pub_topic_message3}}";\n\n\
    return mqtt_publish(client, "{{pub_topic3}}", &msg);\n\
}\n\
'

var pub_topic_handle_code4 = '\n\
static int mqtt_publish_handle4(mqtt_client_t *client)\n\
{\n\
    mqtt_message_t msg;\n\
    memset(&msg, 0, sizeof(msg));\n\n\
    msg.qos = {{pub_topic_qos4}};\n\
    msg.payload = (void *) "{{pub_topic_message4}}";\n\n\
    return mqtt_publish(client, "{{pub_topic4}}", &msg);\n\
}\n\
'

var pub_topic_handle_code5 = '\n\
static int mqtt_publish_handle5(mqtt_client_t *client)\n\
{\n\
    mqtt_message_t msg;\n\
    memset(&msg, 0, sizeof(msg));\n\n\
    msg.qos = {{pub_topic_qos5}};\n\
    msg.payload = (void *) "{{pub_topic_message5}}";\n\n\
    return mqtt_publish(client, "{{pub_topic5}}", &msg);\n\
}\n\
'
var pub_topic_handle_code6 = '\n\
static int mqtt_publish_handle6(mqtt_client_t *client)\n\
{\n\
    mqtt_message_t msg;\n\
    memset(&msg, 0, sizeof(msg));\n\n\
    msg.qos = {{pub_topic_qos6}};\n\
    msg.payload = (void *) "{{pub_topic_message6}}";\n\n\
    return mqtt_publish(client, "{{pub_topic6}}", &msg);\n\
}\n\
'
var pub_topic_handle_code7 = '\n\
static int mqtt_publish_handle7(mqtt_client_t *client)\n\
{\n\
    mqtt_message_t msg;\n\
    memset(&msg, 0, sizeof(msg));\n\n\
    msg.qos = {{pub_topic_qos7}};\n\
    msg.payload = (void *) "{{pub_topic_message7}}";\n\n\
    return mqtt_publish(client, "{{pub_topic7}}", &msg);\n\
}\n\
'
var pub_topic_handle_code8 = '\n\
static int mqtt_publish_handle8(mqtt_client_t *client)\n\
{\n\
    mqtt_message_t msg;\n\
    memset(&msg, 0, sizeof(msg));\n\n\
    msg.qos = {{pub_topic_qos8}};\n\
    msg.payload = (void *) "{{pub_topic_message8}}";\n\n\
    return mqtt_publish(client, "{{pub_topic8}}", &msg);\n\
}\n\
'
var pub_topic_handle_code9 = '\n\
static int mqtt_publish_handle9(mqtt_client_t *client)\n\
{\n\
    mqtt_message_t msg;\n\
    memset(&msg, 0, sizeof(msg));\n\n\
    msg.qos = {{pub_topic_qos9}};\n\
    msg.payload = (void *) "{{pub_topic_message9}}";\n\n\
    return mqtt_publish(client, "{{pub_topic9}}", &msg);\n\
}\n\
'
var pub_topic_handle_code10 = '\n\
static int mqtt_publish_handle10(mqtt_client_t *client)\n\
{\n\
    mqtt_message_t msg;\n\
    memset(&msg, 0, sizeof(msg));\n\n\
    msg.qos = {{pub_topic_qos10}};\n\
    msg.payload = (void *) "{{pub_topic_message10}}";\n\n\
    return mqtt_publish(client, "{{pub_topic10}}", &msg);\n\
}\n\
'

var necessary_main_start_code = '\n\
int main(void)\n\
{\n\
    mqtt_client_t *client = NULL;\n\n\
    mqtt_log_init();\n\n\
    client = mqtt_lease();\n\n\
'

var necessary_main_middle_code = '\n\
    mqtt_connect(client);\n\
'

var necessary_main_end_code = '\n\
    while (1) {\n\
        {{pub_topic1}}\
        {{pub_topic2}}\
        {{pub_topic3}}\
        {{pub_topic4}}\
        {{pub_topic5}}\
        {{pub_topic6}}\
        {{pub_topic7}}\
        {{pub_topic8}}\
        {{pub_topic9}}\
        {{pub_topic10}}\
        \n\
        platform_timer_usleep(4*1000*1000);\n\
    }\n\
}\n\
'

var sub_topic_handle_code_json = {
    sub_topic_handle1: sub_topic_handle_code1,
    sub_topic_handle2: sub_topic_handle_code2,
    sub_topic_handle3: sub_topic_handle_code3,
    sub_topic_handle4: sub_topic_handle_code4,
    sub_topic_handle5: sub_topic_handle_code5,
    sub_topic_handle6: sub_topic_handle_code6,
    sub_topic_handle7: sub_topic_handle_code7,
    sub_topic_handle8: sub_topic_handle_code8,
    sub_topic_handle9: sub_topic_handle_code9,
    sub_topic_handle10: sub_topic_handle_code10,
}

var pub_topic_handle_code_json = {
    pub_topic1: pub_topic_handle_code1,
    pub_topic2: pub_topic_handle_code2,
    pub_topic3: pub_topic_handle_code3,
    pub_topic4: pub_topic_handle_code4,
    pub_topic5: pub_topic_handle_code5,
    pub_topic6: pub_topic_handle_code6,
    pub_topic7: pub_topic_handle_code7,
    pub_topic8: pub_topic_handle_code8,
    pub_topic9: pub_topic_handle_code9,
    pub_topic10: pub_topic_handle_code10,
}

var publish_handle_json = {
    pub_topic1: "mqtt_publish_handle1(client);\n",
    pub_topic2: "mqtt_publish_handle2(client);\n",
    pub_topic3: "mqtt_publish_handle3(client);\n",
    pub_topic4: "mqtt_publish_handle4(client);\n",
    pub_topic5: "mqtt_publish_handle5(client);\n",
    pub_topic6: "mqtt_publish_handle6(client);\n",
    pub_topic7: "mqtt_publish_handle7(client);\n",
    pub_topic8: "mqtt_publish_handle8(client);\n",
    pub_topic9: "mqtt_publish_handle9(client);\n",
    pub_topic10: "mqtt_publish_handle10(client);\n",
}

var connect_setting_code_json = {
    host: '    mqtt_set_host(client, "{{host}}");',
    port: '    mqtt_set_port(client, "{{port}}");',
    ca: '    mqtt_set_ca(client, "{{ca}}");',
    client_id: '    mqtt_set_client_id(client, "{{client_id}}");',
    user_name: '    mqtt_set_user_name(client, "{{user_name}}");',
    password: '    mqtt_set_password(client, "{{password}}");',
    version: '    mqtt_set_version(client, {{version}});',
    clean_session: '    mqtt_set_clean_session(client, {{clean_session}});',
    cmd_timeout: '    mqtt_set_cmd_timeout(client, {{cmd_timeout}});',
    keep_alive_interval: '    mqtt_set_keep_alive_interval(client, {{keep_alive_interval}});',
    read_buf_size: '    mqtt_set_read_buf_size(client, {{read_buf_size}});',
    write_buf_size: '    mqtt_set_write_buf_size(client, {{write_buf_size}});',
}

var subscribe_topic_code_json = {
    sub_topic1: '    mqtt_subscribe(client, "{{sub_topic1}}", {{sub_topic_qos1}}, {{sub_topic_handle1}});',
    sub_topic2: '    mqtt_subscribe(client, "{{sub_topic2}}", {{sub_topic_qos2}}, {{sub_topic_handle2}});',
    sub_topic3: '    mqtt_subscribe(client, "{{sub_topic3}}", {{sub_topic_qos3}}, {{sub_topic_handle3}});',
    sub_topic4: '    mqtt_subscribe(client, "{{sub_topic4}}", {{sub_topic_qos4}}, {{sub_topic_handle4}});',
    sub_topic5: '    mqtt_subscribe(client, "{{sub_topic5}}", {{sub_topic_qos5}}, {{sub_topic_handle5}});',
    sub_topic6: '    mqtt_subscribe(client, "{{sub_topic6}}", {{sub_topic_qos6}}, {{sub_topic_handle6}});',
    sub_topic7: '    mqtt_subscribe(client, "{{sub_topic7}}", {{sub_topic_qos7}}, {{sub_topic_handle7}});',
    sub_topic8: '    mqtt_subscribe(client, "{{sub_topic8}}", {{sub_topic_qos8}}, {{sub_topic_handle8}});',
    sub_topic9: '    mqtt_subscribe(client, "{{sub_topic9}}", {{sub_topic_qos9}}, {{sub_topic_handle9}});',
    sub_topic10: '    mqtt_subscribe(client, "{{sub_topic10}}", {{sub_topic_qos10}}, {{sub_topic_handle10}});',
}

var code_overall_framework = '\
{{include}}\
{{sub_topic_handle}}\
{{pub_topic_handle}}\
{{main_start}}\
{{connect_setting}}\
{{main_middle}}\
{{subscribe_topic}}\
{{main_end}}\
'







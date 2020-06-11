
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
        {{pub_topic1}}\n\
        {{pub_topic2}}\n\
        platform_timer_usleep(4*1000*1000);\n\
    }\n\
}\n\
'

var sub_topic_handle_code_json = {
    sub_topic_handle1: sub_topic_handle_code1,
    sub_topic_handle2: sub_topic_handle_code2,
}

var pub_topic_handle_code_json = {
    pub_topic1: pub_topic_handle_code1,
    pub_topic2: pub_topic_handle_code2,
}

var publish_handle_json = {
    pub_topic1: "mqtt_publish_handle1(client);",
    pub_topic2: "mqtt_publish_handle2(client);",
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







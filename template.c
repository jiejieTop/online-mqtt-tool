
/*
 * @Author: jiejie
 * @Github: https://github.com/jiejieTop
 * @LastEditTime: 2020-06-12 19:40:04
 * @Description: the code belongs to jiejie, please keep the author information and source code according to the license.
 */
#include <stdio.h>
#include <stdint.h>

#include "mqttclient.h"


static void sub_topic_handle1(void* client, message_data_t* msg)
{
    (void) client;
    MQTT_LOG_I("-----------------------------------------------------------------------------------");
    MQTT_LOG_I("%s:%d %s()...\ntopic: %s\nmessage:%s", __FILE__, __LINE__, __FUNCTION__, msg->topic_name, (char*)msg->message->payload);
    MQTT_LOG_I("-----------------------------------------------------------------------------------");
}


static int mqtt_publish_handle1(mqtt_client_t *client)
{
    mqtt_message_t msg;
    memset(&msg, 0, sizeof(msg));

    msg.qos = 0;
    msg.payload = (void *) "PIVmDcpgV7skpiz0qmjN";

    return mqtt_publish(client, "sub_topic1", &msg);
}


int main(void)
{
    mqtt_client_t *client = NULL;

    mqtt_log_init();

    client = mqtt_lease();

    mqtt_set_host(client, "www.jiejie01.top");
    mqtt_set_port(client, "1883");
    mqtt_set_user_name(client, "cA6UivV6J2");
    mqtt_set_password(client, "Tw0p4Mh3eH");
    mqtt_set_client_id(client, "g3cinN1ePz");
    mqtt_set_clean_session(client, 1);
    mqtt_set_keep_alive_interval(client, 50);
    mqtt_set_cmd_timeout(client, 5000);
    mqtt_set_read_buf_size(client, 2048);
    mqtt_set_write_buf_size(client, 2048);

    mqtt_connect(client);
    mqtt_subscribe(client, "sub_topic1", QOS0, sub_topic_handle1);

    while (1) {
        mqtt_publish_handle1(client);
                                                                                
        mqtt_sleep_ms(4 * 1000);
    }
}

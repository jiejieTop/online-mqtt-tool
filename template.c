int main(void)
{
    mqtt_message_t msg;
    mqtt_client_t *client = NULL;

    char buf[100] = { 0 };
    memset(&msg, 0, sizeof(msg));

    mqtt_log_init();

    client = mqtt_lease();

    mqtt_set_port(client, "1883");
    mqtt_set_host(client, "www.jiejie01.top");
    mqtt_set_client_id(client, random_string(10));
    mqtt_set_user_name(client, random_string(10));
    mqtt_set_password(client, random_string(10));
    mqtt_set_clean_session(client, 1);

    mqtt_connect(client);
    
    mqtt_subscribe(client, "topic1", QOS0, topic1_handler);
    
    msg.qos = {{0}};
    msg.payload = (void *) buf;

    while (1) {
        mqtt_publish(client, "topic1", &msg);
        platform_timer_usleep(4*1000*1000);
    }
}

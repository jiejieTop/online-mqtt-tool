mqtt_log_init();

client = mqtt_lease();

mqtt_set_port(client, "1883");
mqtt_set_host(client, "www.jiejie01.top");

mqtt_set_ca(client, (char*)test_ca_get());

mqtt_set_client_id(client, random_string(10));
mqtt_set_user_name(client, random_string(10));
mqtt_set_password(client, random_string(10));
mqtt_set_clean_session(client, 1);

mqtt_connect(client);

mqtt_subscribe(client, "topic1", QOS0, topic1_handler);


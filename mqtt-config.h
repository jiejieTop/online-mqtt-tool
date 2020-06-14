/*
 * @Author: jiejie
 * @Github: https://github.com/jiejieTop
 * @LastEditTime: {{nowTime}}
 * @Description: the code belongs to jiejie, please keep the author information and source code according to the license.
 */
#ifndef _MQTT_CONFIG_H_
#define _MQTT_CONFIG_H_

{{logIsSalof}}#define             LOG_IS_SALOF

#define             LOG_LEVEL                   {{logLevel}}   //WARN_LEVEL DEBUG_LEVEL

#ifdef LOG_IS_SALOF
    #define         USE_LOG                     (1U)
    #define         USE_SALOF                   {{useSalof}}
    #define         SALOF_OS                    {{salofOs}}
    #define         USE_IDLE_HOOK               {{useIdleHook}}
    #define         LOG_COLOR                   {{logColor}}
    #define         LOG_TS                      {{logTs}}
    #define         LOG_TAR                     {{logTar}}
    #define         SALOF_BUFF_SIZE             {{salofBufSize}}
    #define         SALOF_FIFO_SIZE             {{salofFifoSize}}
    #define         SALOF_TASK_STACK_SIZE       {{salofTaskStackSize}}
    #define         SALOF_TASK_TICK             {{salofTaskTick}}
#endif

#define     MQTT_MAX_PACKET_ID                  (0xFFFF - 1)
#define     MQTT_TOPIC_LEN_MAX                  {{mqttTopicLenMax}}
#define     MQTT_ACK_HANDLER_NUM_MAX            {{mqttAckHandlerNumMax}}
#define     MQTT_DEFAULT_BUF_SIZE               {{mqttDefaultBufSize}}
#define     MQTT_DEFAULT_CMD_TIMEOUT            {{mqttDefaultCmdTimeout}}
#define     MQTT_MAX_CMD_TIMEOUT                {{mqttMaxCmdTimeout}}
#define     MQTT_MIN_CMD_TIMEOUT                {{mqttMinCmdTimeout}}
#define     MQTT_KEEP_ALIVE_INTERVAL            {{mqttKeepAliveInterval}}         // unit: second
#define     MQTT_VERSION                        {{mqttVersion}}           // 4 is mqtt 3.1.1
#define     MQTT_RECONNECT_DEFAULT_DURATION     {{mqttReconnectDefaultDuration}}
#define     MQTT_THREAD_STACK_SIZE              {{mqttThreadStackSize}}
#define     MQTT_THREAD_PRIO                    {{mqttThreadPrio}}
#define     MQTT_THREAD_TICK                    {{mqttThreadTick}}


{{mqttNetworkTypeNoTls}}#define     MQTT_NETWORK_TYPE_NO_TLS

#endif /* _MQTT_CONFIG_H_ */

var config_salof_left = '\
<div class="form-group">\
<label for="useSalof">USE_SALOF</label>\
<select type="text" class="form-control" id="useSalof" name="useSalof">\
<option value="(1U)">使用salof指定的后端输出日志信息</option>\
<option value="(0U)">使用printf输出日志信息</option>\
</select>\
</div>\
<div class="form-group">\
<label for="logColor">LOG_COLOR</label>\
<select type="text" class="form-control" id="logColor" name="logColor">\
<option value="(1U)">日志带颜色格式输出</option>    \
<option value="(0U)">日志不带颜色格式输出</option>\
</select>\
</div>\
<div class="form-group">\
<label for="logTs">LOG_TS</label>\
<select type="text" class="form-control" id="logTs" name="logTs">\
<option value="(1U)">日志带时间戳格式输出</option>    \
<option value="(0U)" selected>日志不带时间戳格式输出</option>\
</select>\
</div>\
<div class="form-group">\
<label for="logTar">LOG_TAR</label>\
<select type="text" class="form-control" id="logTar" name="logTar">\
<option value="(1U)">日志带标签格式输出</option>    \
<option value="(0U)" selected>日志不带标签格式输出</option>\
</select>\
</div>\
<div class="form-group">\
<label for="salofBufSize">SALOF_BUFF_SIZE</label>\
<input type="text" class="form-control" id="salofBufSize" name="salofBufSize" placeholder="配置salof日志库的输出buf大小，默认值：512">\
</div>\
'

var config_salof_right = '\
<div class="form-group">\
<label for="salofOs">SALOF_OS</label>\
<select type="text" class="form-control" id="salofOs" name="salofOs">\
<option value="USE_LINUX">使用Linux系统</option>    \
<option value="USE_TENCENTOS">使用TencentOS tiny系统</option>\
<option value="USE_FREERTOS">使用FreeRTOS系统</option>    \
<option value="USE_RTT">使用RT-Thread系统</option>    \
</select>\
</div>\
<div class="form-group">\
<label for="useIdleHook">USE_IDLE_HOOK</label>\
<select type="text" class="form-control" id="useIdleHook" name="useIdleHook">\
<option value="(1U)">使用空闲钩子函数</option>    \
<option value="(0U)" selected>不使用空闲钩子函数</option>\
</select>\
</div>\
<div class="form-group">\
<label for="salofFifoSize">SALOF_FIFO_SIZE</label>\
<input type="text" class="form-control" id="salofFifoSize" name="salofFifoSize" placeholder="配置salof日志库的fifo缓冲区大小，默认值：4096">\
</div>\
<div class="form-group">\
<label for="salofTaskStackSize">SALOF_TASK_STACK_SIZE</label>\
<input type="text" class="form-control" id="salofTaskStackSize" name="salofTaskStackSize" placeholder="配置salof日志库的线程栈大小，默认值：1024">\
</div>\
<div class="form-group">\
<label for="salofTaskTick">SALOF_TASK_TICK</label>\
<input type="text" class="form-control" id="salofTaskTick" name="salofTaskTick" placeholder="配置salof日志库的线程时间片，默认值：50">\
</div>\
'

var more_table_template1 = '\
<tr>\
    <th scope="row">{{arg}}</th>\
    <td>{{doc}}</td>\
</tr>\
'
var more_table_template2 = '\
<tr class="table-primary">\
    <th scope="row">{{arg}}</th>\
    <td>{{doc}}</td>\
</tr>\
'


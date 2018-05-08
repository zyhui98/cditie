/**
 * Created by zhuyunhui on 5/8/2018.
 */
CONFIG = {
    weather:"http://localhost:8080/weather",
    today:""
}

var app_weather = new Vue({
    el: '#app_weather',
    data: {
        // 声明 message 为一个空值字符串
        message: ''
    }
})

function init(){
    // 之后设置 `message`
    Zepto.ajax({
        type: "POST",
        url: CONFIG.weather,
        data: {},
        success: function(data){
            console.info(data);
            app_weather.message = data;
        }
    });
}

init();
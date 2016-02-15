document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("Device ready");
}
var s_ip = localStorage.ip;
var s_port = localStorage.port;

function getlogs() {
    $(function() {
        $.get(
            "http://" + s_ip + ":" + s_port + "/log",
            function(log) {
                $(".console").val(log);
                document.getElementById("console-area").scrollTop = document.getElementById("console-area").scrollHeight
            });
    });
}
setInterval(getlogs, 500);
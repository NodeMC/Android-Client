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
                var textarea = document.getElementsByName('console-area');
                textarea.scrollTop = textarea.scrollHeight;
            });
    });
}
console.log("hello");
setInterval(getlogs, 500);
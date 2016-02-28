document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("Device ready");
}
var s_ip = localStorage.ip;
var s_port = localStorage.port; // Move these to their own JS file

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

function execCommand(command) {
    $.post(
        "http://" + s_ip + ":" + s_port + "/command", {
            Body: command,
            apikey: localStorage.apikey
        }, function(res){
            getlogs();
        }
    )
}

$(document).ready(function() {
    var $form = $('form');
    $form.submit(function() {
        var cmd = $("#command").val();
        execCommand(cmd);
    });
});
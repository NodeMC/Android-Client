document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("Device ready");
}

function connect() {
    var ip = $('input[id=ip]').val()
    var port = $('input[id=port]').val()
    var key = $('input[id=apikey]').val()
    console.log("Attempting to connect to " + ip + ":" + port);
    $("#connect-btn").html("Connecting...");
    $.ajax("http://" + ip + ":" + port, {
        timeout: 15000,
        statusCode: {
            404: function() {
                $("#connect-btn").html("Unknown server.");
            },
            200: function() {
                $.post("http://" + ip + ":" + port + "/verifykey", {
                    apikey: key
                }, function(data) {
                    if (data == "true") {
                        $("#connect-btn").html("Connected.");
                        localStorage.apikey = key;
                        localStorage.ip = ip;
                        localStorage.port = port;
                        window.location.href = 'control.html';
                    }
                    if (data == "false") {
                        $("#connect-btn").html("Bad API key");
                    }
                }).fail(function() {
                    console.log("Failed");
                    $("#connect-btn").html("Server not found!");
                });
            }
        }
    }).fail(function() {
        $("#connect-btn").html("Unknown server.");

    });

}
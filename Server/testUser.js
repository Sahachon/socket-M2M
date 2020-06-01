var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const conf = require('./config')

app.get('/', (req, res) => {
    // res.end(`Sahachon`)
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
    console.log("a client connect !")

   

    socket.on(conf.user_socket, (data) => {
        
        console.log("server_ip", config.server_ip);
        console.log("data", data);
        
        socket.emit("response_socket", {
            sucess: true,
            user_id: "server_2",
            command: "RPI_SUCCESS_RESPONSE ",
        })


        // console.log("Message : " + data);
        // var Chanel = msg.split('Server');
        // console.log(`test Chanel : ${Chanel[1]}`)
        
        // var user = `Server_${Chanel[1]}`
        

        socket.on(user, (data) => {
            console.log("Message : " + data);
        })
    })
    socket.on('disconnect', () => {
        console.log('a client disconnected')
    })

});

http.listen(3200, function () {
    console.log(`listen on port* ${conf.port}`)
});

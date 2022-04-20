const net = require('net')

const server = net.createServer(function (socket){
    console.log('Client Connect!')

    socket.setEncoding('utf8')

    socket.on('data', function(data){
        // console.log(data)
        //fungerar samma som setEncoding('utf8')
    console.log(data.toString()) 
    })
})
server.listen(8000)
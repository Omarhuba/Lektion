const net = require('net')



const socket = net.connect({port: 8000},
 ()=>{
   
    
    console.log('Daaaavvviiiidddd')
    socket.write('hello.....wwwwwoooorrrrlllldddd')
    socket.end()
})




// const socket = net.connect({port: 8000, host: '192.168.21.124'},
// function(){
   
    
//     console.log('Daaaavvviiiidddd')
//     socket.write('daaaavvviiidd    heelllooo    ddddaaavvviiiddddd')
//     socket.end()
// })
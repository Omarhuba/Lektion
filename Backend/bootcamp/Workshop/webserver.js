const net = require('net')
const fs = require('fs/promises')
const { existsSync } = require('fs')

const server = net.createServer(connectionHandler)
server.listen(8000, ()=>console.log('servern started!') )



let counter = 0;


async function connectionHandler(socket){

socket.setEncoding('utf8')
socket.on('data', async function(requestPacket){
    const lines = requestPacket.split("\r\n")
    let [method, path, version] = lines[0].split(' ')
    path = path == "/" ? "./public/index.html" : "./"+path
    
    if(existsSync(path)){
    const html = await fs.readFile('./public/index.html', {encoding: 'utf8'})
    
    if(path == "./public/index.html"){
        counter++
    }
    html = html.replace("{{counter}}", `${counter}`)
    socket.write(
`${method}${version} 200 OK
Server: grillkorv-server
Set-Cookie: counter= ${counter}

${html}`
)
}else{
    socket.write(
`${method}${version} 404 Not Found
Server: grillkorv-server
        
`        
    )
}
socket.end()

    
    

})
socket.write('')


}
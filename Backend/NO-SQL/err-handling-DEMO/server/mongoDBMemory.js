const { MongoMemoryServer } = require("mongodb-memory-server")
async function start(){
    const server = await MongoMemoryServer.create()
    console.log(server.getUri())
}
start()
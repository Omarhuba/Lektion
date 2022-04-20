// const { MongoMemoryServer } = require('mongodb-memory-server')
// const { MongoClient } = require('mongodb')


const { MongoMemoryServer } = require('mongodb-memory-server') 
const { MongoClient } = require('mongodb')

async function connect(){
        const mongod = await MongoMemoryServer.create() 
        const uri = mongod.getUri()
        const client = new MongoClient(uri) 
    try{
        await client.connect()
        console.log('connected');
        const database = client.db('myDatabase')
    }catch(error){ console.log(error);
    }finally{
        await mongod.stop()
        await client.close()
} 
}
connect().catch(console.log('disconnect'))

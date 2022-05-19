const express = require('express')
const https = require('https')
const fs = require('fs')


const app = express()
const key = fs.readFileSync('./cert/localhost+1-key.pem')
const cert = fs.readFileSync('./cert/localhost+1.pem')
app.use(express.static('public'))



app.get('/', (req,res)=>{
    res.send('hello from https')
})


https.createServer( {key, cert}, app)
.listen(8080,()=>{
    console.log('enter https://localhost:8080 into your browser');
})



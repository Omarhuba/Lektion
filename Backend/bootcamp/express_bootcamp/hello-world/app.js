const express = require('express')
const app = express()



//samma som den andra.....
// function requestHandler(require, response){
//     response.send('helllaaa worrld')}
// app.get('/', requestHandler)

app.get('/', (req,res) =>{
    res.send('hello worldaaaaaaaaaaaaa!')
})

app.get('/say', (req,res) =>{
    res.send('omar!')
})


app.listen(8000)
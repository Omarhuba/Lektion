const express = require('express')

// const fs = require('fs/promises')
const app = express()

app.use(express.static(__dirname + '/public'));
// app.get('/', async (req,res)=>{
    // const fileContent = await fs.readFile('./public/index.html', {encoding:'utf8'})

app.get('/', (req,res)=>{
    res.sendFile('index.html', {root: 'public'})
})

app.get('/say/:name', (req,res)=>{
    console.log(req.params);
    res.sendFile('dynamic.html', {root: 'public'})
})


app.get('/stuff', (req,res)=>{
    let result = ""
    for(let i = 0; i < 100; i++){
        result += "<p>" + i + "</p>"
    }
    res.send(result)
})



app.listen(8000)
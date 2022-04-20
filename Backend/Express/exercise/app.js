const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    console.log(req)
    res.sendFile('index.html', {root:'public'})
})
app.get('/say/:name', (req,res)=>{
    console.log(req.params)
    res.send(req.params.name)
})



app.get('/index', (req,res)=>{
    // console.log(req.params)
    res.render('index')
})
app.get('/stuff', (req,res)=>{
    // console.log(req.params)
    res.render('stuff')
})




app.listen(8000)
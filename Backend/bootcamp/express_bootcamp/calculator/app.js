const express = require('express');
const { toNamespacedPath } = require('path');

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views'));

let result = 0;
const names = []
app.get('/', (req,res)=>{
    console.log("hello"+req.params);
    res.render('index')
})

app.post('/set', (req,res)=>{
    let first = Number(req.body.first)
    let second = Number(req.body.second)
    if(req.body.operator == "+"){
        result = first + second
    }else if(req.body.operator == "-"){
        result = first - second
    }else if(req.body.operator == "*"){
        result = first * second
    }else{
        result = first / second
    }
    res.set("Set-Cookie", "result"+result)
    res.redirect('/result')
})

app.get('/result', (req,res)=>{
    res.render('result', {result: result})
})



// app.get('/', (req,res)=>{
//     res.render('test')
// })
// app.post('/stuff', (req,res)=>{
//     names.push(req.body.first);
//     // res.send(names.join(","))
//     res.redirect('/set')
// })




app.listen(8000)
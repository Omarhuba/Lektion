const express = require('express')

const app = express()
const names = ["asdadasd"];

app.use(express.urlencoded())
app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/stuff', (req,res)=>{
    console.log(req.params);
    res.render('stuff', {names: names})
})








app.listen(8000)
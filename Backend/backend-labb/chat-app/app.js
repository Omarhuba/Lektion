const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')


app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'))
app.use(cookieParser())
app.set('view engine', 'ejs')
const CHATS = [{
    "name": "member 1",
    "chat": "chat 1"
}]


app.get('/', (req,res) => {
   if(req.cookies.name){
       res.redirect('/message')
   }else{
       res.render('index')
   }
})

app.post('/setname', (req,res) => {
    const name = req.body.username
    res.cookie('name', name)
    res.redirect('/chat')
})

app.get('/chat', (req,res)=>{
    res.render('chat', { chats: CHATS})
})



app.listen(8080)
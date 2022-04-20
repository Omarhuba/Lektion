const {PromisedDatabase} = require('promised-sqlite3')
const db = new PromisedDatabase()
const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('home')
})


      
    
   

    app.listen(8000)



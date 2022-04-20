const express = require('express')
const sqlite3 = require('sqlite3')
const app = express()


const db = new sqlite3.Database('.chinook.db')

app.use(express.json())

app.get('/',  (req,res)=>{
db.all('SELECT * FROM albums')

    res.json(getAlbums)
})


app.listen(8080)
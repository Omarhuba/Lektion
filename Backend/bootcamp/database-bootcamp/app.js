const express = require('express')
const app = express()
const { PromisedDatabase } = require('promised-sqlite3')

const db = new PromisedDatabase ()

const PORT = 8080;


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')


app.get('/', async (req,res)=>{
    await db.open('./database/database.db')
    const departments = await db.all('SELECT * FROM departments');
    await db.close();
     res.render('index', {departments})
})

app.get('/messages', async (req,res)=>{
    await db.open('./database/database.db')
    const grillkorv = await db.all('SELECT * FROM messages');
    console.log(grillkorv);
    await db.close()
    res.render()
})

app.post('/message', async (req,res)=>{
    const {email,title,question,to_department} = req.body
    console.log(req.body)
    await db.open('./database/database.db')
    const query = `INSERT INTO messages(email,title,content,department_id,answered) VALUES (?,?,?,?,0)`
    await db.run(query,[email,title,question,to_department])
    await db.close()
    res.render('thanks')
})

app.get('/', async (req,res)=>{
    res.render('thanks')
})

app.listen(PORT,()=>console.log(`SERVER STARTED ON ${PORT} `))
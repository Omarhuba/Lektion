const express = require('express')
// const sequelize = require('./model/index')
const {User} = require('./model')

const app = express()
app.use(express.json())

app.get('/user', async (req,res)=>{
    const user = await User.findAll()
    res.send(user)
})

app.post('/user', async (req,res)=>{
   await User.create(req.body)
   res.send('User is inserted')
})



app.get('/user/:id', async(req,res)=>{
    const requestId = req.params.id
    const user = await User.findOne({where: {id: requestId}})
    res.send(user)
})

app.put('/user/:id', async(req,res)=>{
    const requestId = req.params.id
    const user = await User.findOne({where: {id: requestId}})
    user.username = req.body.username
    await user.save()
    res.send('updated')
})

app.delete('/user/:id', async(req,res)=>{
    const requestId = req.params.id
    await User.destroy({where: {id: requestId}})
    res.send('removed')
})



const PORT = 8080
app.listen(PORT, ()=>{console.log(`SERVER STARTED ON PORT :${PORT}`);})
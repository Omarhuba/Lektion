const express = require('express')
// const sequelize = require('./model/index')
const {User} = require('./model')

const app = express()
app.use(express.json())



// använda findAndCountAll  skapa den count i insomnia, 
app.get('/users', async (req,res)=>{

    const pageAsNumber = Number.parseInt(req.query.page)
    const sizeAsNumber = Number.parseInt(req.query.size)

    let page = 0;
    if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0 ){
        page = pageAsNumber
    }
    let size = 10;
    if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10){
        size = sizeAsNumber
    }

    // const {page,size} = req.query
    const users = await User.findAndCountAll({
        //limit syns bara den första 5 users
        // limit: 5,
        //ofset skipper 10 första 
        // offset:10
        limit: size,
        offset: page * size
    })
    res.send({
        content: users.rows,
        totalPages: Math.ceil(users.count / size)
    })
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
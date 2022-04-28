const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { sequelize, Movie} = require('./models')

const variables = ['JWT_SECRET', 'PORT']
for(let variable of variables){
  if(!process.env[variable]){
    console.error("Missing environment variable " + variable)
    process.exit(1)
  }
}




const app = express()

app.use(express.json())


app.use( (req,res,next)=>{
    if(process.env.NODE_ENV == 'devolopment'){
        const timeStamp = new Date()
        console.log(timeStamp.toLocaleString(), req.method, req.path);
    }
    next()
})


app.get('/', (req,res)=>{
    res.json({msg: 'hello wolrd!'})
})

app.get('/movie', async (req,res) => {
    const projects = await Movie.findAll({})
    res.json(projects)
  })



app.post('/login', (req,res)=>{
    if(req.body.hemlighet === 'hello'){
        const token = jwt.sign(
            {food: 'hej'},
            process.env.JWT_SECRET)
        res.json({token})
    }else{
        res.status(401).json({err: 'NO, IT IS WRONG'})
    }
})

app.get('/hemlighet', (req,res) => {
    if(!req.header('Authorization')){
      res.status(403).json({error: 'Aja baja'})
    }else{
      const token = req.header('Authorization')
      const data = jwt.verify(token, process.env.JWT_SECRET)
      res.json(data)
    }
  })





const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`SERVER STARED ON PORT: ${PORT}`);
})
const express = require('express')
const movieRouter = require('./routes/movies')
require('./models/connection')
const errorHandler = require('./middleware/errorHandler')

const app = express()


app.use(express.json())
app.use(movieRouter)
app.use( errorHandler)






const PORT = 8080
app.listen(PORT, ()=>{console.log(`SERVER STARTED ON PORT :${PORT}`);})


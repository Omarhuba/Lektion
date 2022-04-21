const express = require('express')
const cors = require('cors')
const logger = require('./middleware/logger')
require('dotenv').config()

const app = express()
const userRoutes = require('./routes/users.js')
const postRoutes = require('./routes/posts.js')
const commentRoutes = require('./routes/comments.js')
const {errorHandler} = require('./middleware/errorHandler')
const {headerCheck} = require('./middleware/headerCheck')
app.use(cors())
app.use( express.json() )

app.use(logger)
app.use(headerCheck)
app.use('/api/v1', userRoutes)
app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/comments', commentRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Running on port ${PORT}`))
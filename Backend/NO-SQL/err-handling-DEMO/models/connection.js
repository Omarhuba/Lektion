require('dotenv').config()
const mongoose = require('mongoose')

const {DATABASE_URI} = process.env

const db = mongoose.connect(DATABASE_URI)

module.exports = db
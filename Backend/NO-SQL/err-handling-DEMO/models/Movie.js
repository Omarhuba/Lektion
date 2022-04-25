const mongoose = require('mongoose')
const {Schema} = mongoose

const movieSchema = new Schema({
    title: String,
    director: String,
    category: String,
    playtime: Number,
    year: Number
})

const Movie = mongoose.model('Movie', movieSchema )

module.exports = Movie


const databaseConfig = require('../config/database')
const {DATABASE_URL} = require('../config')
const {Sequelize} = require('sequelize')
const setupMovie = require('./Movie')
const sequelize = new Sequelize(DATABASE_URL,databaseConfig)

const Movie = setupMovie(sequelize)

module.exports = {sequelize, Movie}
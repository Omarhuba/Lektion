const { Sequelize } = require('sequelize');
// const User = require('./User');
const setupUser = require('./User')


const sequelize = new Sequelize('test-db', 'user', 'password', {
    dialect: 'sqlite',
    storage: './database/dev.sqlite'
})

const User = setupUser(sequelize)


module.exports = {User};

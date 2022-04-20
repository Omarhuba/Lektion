const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const hash = require('bcryptjs')

class User extends Model {}

User.init({
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
},{
    sequelize,
    modelName: 'user',
    timestamps: false
})
User.sync({force: true})


module.exports =  User
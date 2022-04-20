const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/database')


    class Users extends Model {}

    Users.init({
        // userId: {
        //     type: DataTypes.INTEGER,
        //      allowNull: false,
        //     autoIncrement: true,
        //     primaryKey: true 
        // },
        username:{
            type: DataTypes.STRING,
              allowNull: false
        },
        email:{
            type: DataTypes.STRING,  
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            //   allowNull: false
        },
    },{
        sequelize,
        modelName: 'User',
        timestamps: false,
    })
    Users.sync({force: true})

    module.exports = Users
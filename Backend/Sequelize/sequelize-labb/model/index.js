const Users = require('./Users')
const Flavors = require('./Flavors')


    Flavors.hasMany( Users )
    Users.belongsTo( Flavors )


module.exports = {Flavors, Users}














// const {Sequelize} = require('sequelize')

// const sequelize = new Sequelize('test-db', 'user', 'password', {
//     dialect: 'sqlite',
//     storage: './database/dev.sqlite'
// })

// module.exports = sequelize;

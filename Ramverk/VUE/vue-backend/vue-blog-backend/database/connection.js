const {Sequelize} = require('sequelize')
require('dotenv').config()

let db
if(process.env.NODE_ENV == 'development'){
  db = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/blog.db',
    logging: false
  })
}else if(process.env.NODE_ENV == 'production'){
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  })
}

module.exports = db
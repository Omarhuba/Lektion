const db = require('../database/connection')
const {DataTypes} = require('sequelize')
const User = require('./User')
const Post = require('./Post')

const Comment = db.define('Comment', {
  content: {
    type: DataTypes.STRING,
    allowNull: false    
  },

})

Comment.belongsTo( Post )
Comment.belongsTo( User )

module.exports = Comment
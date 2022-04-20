const {mongoose} = require('mongoose')
const path = require('path')
// const Product = require('../models/Product')
require('dotenv').config()

const productSchema = new mongoose.Schema({
  
  title: String,
  specialEdition: Boolean,
  price: Number,
  category: String,
  shortDesc: String,
  longDesc: String,
  imgFile: String

})
//  mongoose.model('Product', productSchema)
const Product = mongoose.model('Product', productSchema)

 module.exports = {Product}
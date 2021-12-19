// require dependencies
const mongoose = require('mongoose')

// shortcut variable
const Schema = mongoose.Schema;

// define the schema 
const bikeSchema = new Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  qty: Number
})

const Bike = mongoose.model('Bike', bikeSchema)

module.exports = Bike
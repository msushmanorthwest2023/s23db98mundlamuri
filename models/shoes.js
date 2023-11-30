
const { text } = require("express")
const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
shoe_brand: String,
shoe_size: String,
shoe_price: {type:Number,min:100,max:100000},
})
module.exports = mongoose.model("shoes",shoesSchema)
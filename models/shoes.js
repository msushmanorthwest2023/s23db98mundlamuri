const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
shoe_brand: String,
shoe_size: String,
shoe_price: Number
})
module.exports = mongoose.model("shoes",shoesSchema)
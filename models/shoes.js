const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
shoe_brand: String,
shoe_size: {type:String,length:15},
shoe_price: {type:Number,min:200,max:200000}
});

module.exports = mongoose.model("shoes",shoesSchema);
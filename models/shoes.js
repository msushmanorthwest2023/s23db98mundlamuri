
const { text } = require("express")
const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
shoe_brand:{type : String,
    minlength : 3,
    maxlength : 6
},
shoe_size: {type : String,
    minlength : 2,
    maxlength : 9
},
shoe_price: {type:Number,min:100,max:100000},
})
module.exports = mongoose.model("shoes",shoesSchema)
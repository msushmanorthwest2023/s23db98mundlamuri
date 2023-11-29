const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
shoe_brand: String,
shoe_size: String,
shoe_price: {
    type: Number,
    required: true,
    min: [0, 'Price must be non-negative'],//Minimum value of 0
    max: [1000, 'Price cannot exceed 1000'],//Maximum value of 1000
},
});

module.exports = mongoose.model("shoes",shoesSchema);
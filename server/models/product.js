const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        trim: true
    },
    // description: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
})

module.exports = mongoose.model("product", ProductSchema)
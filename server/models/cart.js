const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('cart', CartSchema)
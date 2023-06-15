const Cart = require('../models/cart')

const PostCart = async (req, res, next) => {
    try {
        const { product_id, quantity } = req.body;
        const findProduct = await Cart.findOne({ product_id: product_id });
        if (findProduct) {
            return res.status(400).json('product already in cart')
        } else {
            const postCart = new Cart({ product_id: product_id, quantity: quantity })
            postCart.save()
            return res.status(200).json(postCart)
        }
    } catch (error) {
        console.log(error);
    }
}

const GetCart = async (req, res, next) => {
    try {
        const cart = await Cart.find({}).populate('product_id','product_name brand price category image rating')
        return res.status(200).json(cart)
    } catch (error) {
        console.log(error);
    }
}

const DeleteCart = async (req, res, next) => {
    const { id } = req.params
    try {
        const cart = await Cart.findByIdAndDelete({ _id: id });
        return res.status(200).json(cart)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { PostCart, GetCart, DeleteCart }
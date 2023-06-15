const Product = require('../models/product')

const PostProduct = async (req, res, next) => {
    try {
        const data = new Product(req.body);
        await data.save()
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

const GetProduct = async (req, res, next) => {
    try {
        const data = await Product.find({})
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

const GetProductById = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await Product.findById({ _id: id })
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { PostProduct, GetProduct, GetProductById }
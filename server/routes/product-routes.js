const express = require('express');
const router = express.Router();
const { PostProduct, GetProduct, GetProductById } = require('../controllers/product-controller');
const { PostCart, GetCart, DeleteCart } = require('../controllers/cart-controller')


router.post('/product', PostProduct);
router.get('/product', GetProduct);
router.get('/product/:id', GetProductById);

//cart
router.post('/cart', PostCart);
router.get('/cart', GetCart);
router.delete('/cart/:id', DeleteCart);

module.exports = router
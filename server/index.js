const express = require('express');
const cors = require("cors");
const dbConnection = require('./db/dbconnect');
require('dotenv').config()

const app = express();
const productRoute = require('./routes/product-routes');
// const cartRoute = require('./routes/cart-routes')

app.use(express.json());
app.use(cors());

dbConnection()

app.use('/ecom', productRoute);


app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`);
})

module.exports = app
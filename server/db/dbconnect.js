const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('db connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports=dbConnection
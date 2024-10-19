const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successful.');

    } catch (error) {
        console.log("Database connection error", error)
    }

}


module.exports = connectDB
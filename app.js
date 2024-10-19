const express = require('express')
const connectDB = require('./src/Utility/database/db')
const router = require('./src/Routes/api')
const app = new express()




// Security middleware npm packages import
const cors = require('cors')
const helmet = require('helmet')
const rateLimiter = require('express-rate-limit')
const hpp = require('hpp')
const xssClean = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')


// Security middleware Configuration
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
    ],
    credentials: true,
}


const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 100,  // Limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.'
});


// security middleware implementation 
app.use(cors(corsOptions))
app.use(helmet())
app.use(hpp())
app.use(xssClean())
app.use(mongoSanitize())
app.use(limiter)


// 
app.use(express.json())


// Connect mongoDB database 
connectDB()



app.use('/', router)


// Undefined route
app.use('*', (req, res) => {
    res.status(404).send({ status: "failed", message: "something is wrong. try again" })
})


module.exports = app
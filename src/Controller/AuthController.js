// Authentication npm package
const jwt = require('jsonwebtoken')

// Token create
exports.CreateToken = async (req, res, next) => {
    const userData = req.body
    const token = await jwt.sign(userData, process.env.JWT_SECRET_KEY, {
        expiresIn: '24h'
    })
    res.send(`Bearer : ${token}`)
}

// Token Verify
exports.DecodeToken = async (req, res, next) => {
    const token = req.header('token')
    if (!token) {
        return res.status(401).send({ message: "Unauthorized access" })
    } else {
        await jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
            if (err) {
                return res.status(401).send({ message: "unauthorized access", data: err })
            }
            // console.log(decode)
            // res.status(200).send(decode)
            next()
        })
        // res.send(decode)
    }

}
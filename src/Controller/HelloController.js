exports.HelloApiController = (req, res) => {
    res.status(200).send({ status : "success", message: "This is first Controller Message" })
}

// Post Request Response
exports.HelloApiPost = (req, res) => {
    res.status(200).send({ status : "success", message: "This is first Controller Message post request" })
}
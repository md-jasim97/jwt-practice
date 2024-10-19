const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remarks: { type: String, default: 'pending' }
},
    { versionKey: false })


const studentsModel = mongoose.model("students", DataSchema)
module.exports = studentsModel;
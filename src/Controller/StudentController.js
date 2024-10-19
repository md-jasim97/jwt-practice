const studentsModel = require('../Model/StudentModel')

exports.CreateStudent = async (req, res) => {
    try {
        const student = req.body
        const data = await studentsModel.create(student)
        res.status(201).send({ message: "New Student Create Successful.", data: data })

    } catch (error) {
        res.status(400).send({ message: "Something is wrong. try again", data: error })
    }
}



// Data read function 
exports.ReadStudent = async(req, res) => {
    try {
        // const query = {}
        // const projection = "Name Roll Class Remarks"
        const data = await studentsModel.find()
        res.status(200).send({ message: "Student Information", data: data })
        
    } catch (error) {
        res.status(404).send({ message: "Something is wrong. try again", data: error })
    }
}


// Data Update function 
exports.UpdateStudent = async(req, res) => {
    try {
        const id = req.params.id
        const student = req.body
        const query = {_id : id}
        const options = {upsert : true}
        const data = await studentsModel.updateOne(query, student, options)
        res.status(200).send({ message: "Student Information Updated", data: data })
        
    } catch (error) {
        res.status(404).send({ message: "Something is wrong. try again", data: error })
    }
}


// Data Delete function 
exports.DeleteStudent = async(req, res) => {
    try {
        const id = req.params.id
        const query = {_id : id}
        const data = await studentsModel.deleteOne(query)
        res.status(200).send({ message: "Student Delete Successful.", data: data })
        
    } catch (error) {
        res.status(404).send({ message: "Something is wrong. try again", data: error })
    }
}
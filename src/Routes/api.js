
const express = require('express')
const router = express.Router()

const HelloController = require('../Controller/HelloController')
const StudentController = require('../Controller/StudentController')
const AuthController = require('../Controller/AuthController')


router.get('/helloApi', HelloController.HelloApiController)
router.post('/helloApiPost', HelloController.HelloApiPost)

// JWT Authentication 
router.post('/CreateToken', AuthController.CreateToken)
router.get('/DecodeToken', AuthController.DecodeToken)

// CRUD operation use mongoose
router.post('/createStudent', AuthController.DecodeToken, StudentController.CreateStudent)
router.get('/ReadStudent', AuthController.DecodeToken, StudentController.ReadStudent)
router.put('/UpdateStudent/:id', AuthController.DecodeToken, StudentController.UpdateStudent)
router.delete('/DeleteStudent/:id', AuthController.DecodeToken, StudentController.DeleteStudent)

module.exports = router
const express = require('express');
const routes = express.Router()
const user = require('../controllers/userController')

routes.post('/registeruser',user.userSignup)


module.exports = routes;
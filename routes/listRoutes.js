/*
TODO:
- GET, PUT, POST, DELETE routes for todo lists 
*/
var express = require('express');
var router = express.Router();
var controller = require('../controllers/listController.js')

/* GET users listing. */
router.get('/', controller.listGetHandler)
router.post('/', controller.listPostHandler) 



module.exports = router;
/*
TODO:
- GET, PUT, POST, DELETE routes for todo lists 
*/
require('../controllers/todos.js')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', listGetHandler(req,res))
router.post('/list', listPostHandler(req, res)) 



module.exports = router;
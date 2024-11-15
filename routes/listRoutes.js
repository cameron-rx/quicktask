var express = require('express');
var router = express.Router();
var controller = require('../controllers/listController.js')

router.get('/:id', controller.listGetHandler)
router.post('/', controller.listPostHandler) 
router.delete('/:id', controller.listDeleteHandler)
//TODO: Implement put route (use id in route like get)
//TODO: Implement delete route (use id in route like get)



module.exports = router;
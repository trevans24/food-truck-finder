var express = require('express');
var router = express.Router();
var trucksController = require('../controllers/trucksController.js');

var Trucks = require('../models');



/// INDEX GET ALL
router.get('/api/trucks', trucksController.index);

/// INDEX GET ONE
router.get('/api/trucks/:id', trucksController.show);

/// CREATE POST
router.post('/api/trucks', trucksController.create);

/// DESTROY 
router.delete('/api/trucks/:id', trucksController.destroy);

module.exports = router;
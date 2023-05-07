const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017';

// Database Name
const pratosController = require("../controller/pratos.controller");

router.get('/pratos', pratosController.pratos);



module.exports = router;

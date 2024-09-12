var express = require('express');

var router = express.Router();
const tallerControllers = require("../controllers/tallerControllers")

/* GET home page. */
router.get('/',tallerControllers.index);


module.exports = router;


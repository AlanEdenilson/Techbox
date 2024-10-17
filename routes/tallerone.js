var express = require('express');

var controller = require('../controllers/tallerone')

var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=>{
   res.send('hola mndo')
});
router.post('/iniciar',controller.iniciar)
router.post('/registrar',controller.registrar)


module.exports = router;
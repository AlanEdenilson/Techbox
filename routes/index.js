var express = require('express');
const tallerControllers = require('../controllers/tallerControllers');
var router = express.Router();

/* GET home page. */
router.get('/', function (req,res,next) {
  res.send('Bienvenido')
});

router.post('/menu',tallerControllers.insertardatos);


router.get('/menu',(req,res)=>{
   res.render('login/menu')
});


module.exports = router;


var express = require('express');
const tallerControllers = require('../controllers/tallerControllers');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=>{
   res.render('login/index', { title: 'Techbox' });
});

router.post('/',tallerControllers.index);


router.get('/crear',(req,res)=>{
   res.render('Prestamos/crear')
});

//router.get('/menu',(req,res)=>{
   // res.render('login/menu')
//});
module.exports = router;




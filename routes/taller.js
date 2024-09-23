var express = require('express');
const tallerControllers = require('../controllers/tallerControllers');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=>{
   res.render('login/index', { title: 'Techbox' });
});

router.post('/',tallerControllers.index);

router.get('/herramientas',tallerControllers.herramientas);

router.get('/crearp',(req,res)=>{
   res.render('Prestamos/crear')
});

router.get('/herra',(req,res)=>{
   res.render('Inventario/crear')
});

router.get('/agregar',(req,res)=>{
   res.render('Estudiante/crear')
});



//router.get('/menu',(req,res)=>{
   // res.render('login/menu')
//});
module.exports = router;
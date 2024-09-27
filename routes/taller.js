var express = require('express');
const tallerControllers = require('../controllers/tallerControllers');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=>{
   res.render('login/index', { title: 'Techbox' });
});

router.post('/',tallerControllers.index);

//inventaio
router.get('/herramientas',tallerControllers.herramientas);
router.get('/herra',(req,res)=>{
   res.render('Inventario/crear')
});
//Prestamos
router.get('/crearp',(req,res)=>{
   res.render('Prestamos/crear')
});

//estudiantes
router.get('/estudiantes',tallerControllers.estud)

router.get('/agregar',(req,res)=>{
   res.render('Estudiante/crear')
});





//router.get('/menu',(req,res)=>{
   // res.render('login/menu')
//});
module.exports = router;
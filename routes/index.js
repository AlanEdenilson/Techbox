var express = require('express');
const tallerControllers = require('../controllers/tallerControllers');
var router = express.Router();

/* GET home page. */
router.get('/', function (req,res,next) {
  res.send('Bienvenido')
});
//RUTA DE MENU-----------------------------------------------------------------//
router.post('/menu',tallerControllers.registrardatos);
;

//trabaja la vane  crud de herramienta------------------------------------------//
router.get('/herramientas',function (req,res) {
  res.render('Inventario/herramientas', )
});

//trabaja la vane crud de estudiantes--------------------------------------------------------------------------//
router.get('/estudiantes',function (req,res) {
  res.render('Estudiante/Estudiante', )
});

//trabaja la judi crud de prestamo-----------------------------------------//
router.get('/Prestamos',tallerControllers.presta);

//Ruta de prestamos yo------------------------------------------------------------------------//
router.get('/prestamo',function (req,res) {
  res.render('Prestamos/prestamos', )
});

//Ruta de devoluciones------------------------------------------------------------------------//
router.get('/de',function (req,res) {
  res.render('DEVOLUCIONES/devolu', )
});


// RUTA DE REGISTRO DE PRESTAMOS DIARIOS --------------------------//
router.get('/Diarios',function (req,res) {
  res.render('login/Diarios')
});

router.get('/Semanales',function (req,res) {
  res.render('login/semanales')
});

router.get('/Todos',function (req,res) {
  res.render('login/todos')
});

//-------------------------------------------------------------------//



module.exports = router;


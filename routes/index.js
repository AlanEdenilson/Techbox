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


<<<<<<< HEAD

//trabaja la judi crud de prestamo-----------------------------------------//
router.get('/Prestamos',tallerControllers.presta);

//------------------------------------------------------------------------//
=======
>>>>>>> 23ecc25ad0b499611b56f6acb8b2636aabbe3e8f


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

router.get('/consu',function (req,res) {
  res.render('Materiales/consumi')
})

module.exports = router;


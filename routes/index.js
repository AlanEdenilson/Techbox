var express = require('express');
const tallerControllers = require('../controllers/tallerControllers');
var router = express.Router();

/* GET home page. */
router.get('/', function (req,res,next) {
  res.send('Bienvenido')
});


router.post('/menu',tallerControllers.registrardatos);

//trabaja la vane  crud de herramienta
router.get('/herramientas',function (req,res) {
  res.render('herramientas/herramienta')
});

//trabaja la judi crud de prestamo
router.get('/Prestamos',function (req,res) {
  res.render('Prestamos/prestamos')
});


//Ruta de devoluciones favor trabajar bajo esta ruta el crud de devolucion
router.get('/devoluciones',function (req,res) {
  res.render('#')
});

router.get('/Diarios',function (req,res) {
  res.render('#')
});

router.get('/Semanales',function (req,res) {
  res.render('#')
});

router.get('/Todos',function (req,res) {
  res.render('#')
});

router.get('/repote',function (req,res) {
  res.render('#')
});

router.get('/crearReporte',function (req,res) {
  res.render('#')
});

router.get('/estudiante',function (req,res) {
  res.render('estudiante/index')
});
module.exports = router;


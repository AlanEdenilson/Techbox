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
  res.render('login/herramienta')
});

//trabaja la judi crud de prestamo
router.get('/Prestamos',tallerControllers.presta);


//Ruta de devoluciones favor trabajar bajo esta ruta el crud de devolucion
router.get('/devoluciones',function (req,res) {
  res.render('login/Devoluciones')
});

router.get('/Diarios',function (req,res) {
  res.render('login/Diarios')
});

router.get('/Semanales',function (req,res) {
  res.render('login/semanales')
});

router.get('/Todos',function (req,res) {
  res.render('login/todos')
});

router.get('/repote',function (req,res) {
  res.render('login/Reporte')
});

router.get('/crearReporte',function (req,res) {
  res.render('login/ReporteCrear')
});

router.get('/estudiante',function (req,res) {
  res.render('login/Estudiantes')
});
module.exports = router;


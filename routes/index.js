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
  res.render('Inventario/herramientas', )
});

//trabaja la judi crud de prestamo
router.get('/Prestamos',tallerControllers.presta);

//trabaja la vane  crud devoluciones
router.get('/devoluciones',function (req,res) {
  res.render('Devolucion/Devoluciones')
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

//trabaja la vane  crud de estudiantes

module.exports = router;


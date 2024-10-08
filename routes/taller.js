var express = require('express');
const tallerControllers = require('../controllers/tallerControllers');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=>{
   res.render('login/index', { title: 'Techbox' });
});

//RUTA PRINCIPAL
router.post('/',tallerControllers.index);

//RUTAS DE INVENTARIO-----------------------------------------------------//
router.get('/herramientas',tallerControllers.herramientas);

router.get('/herra',(req,res)=>{
   res.render('Inventario/crear')
});
router.post('/taller/herramientas',tallerControllers.guardar);

router.post('/borrar/:id_herramienta',tallerControllers.borrar);

router.get('/edi', (req,res)=>{
   res.render('Inventario/editar')
});

//--------------------------------------------------------//

//Prestamos
router.get('/crearp',(req,res)=>{
   res.render('Prestamos/crear')
});
//--------------------------------------------------------//

//trabaja la vane  crud devoluciones
router.get('/d',tallerControllers.de);
router.get('/entrega',(req,res)=>{
   res.render('DEVOLUCIONES/Entrega')
});
router.post("/d",tallerControllers.guardardev)

//estudiantes---------------------------------------------//
router.get('/estudiantes',tallerControllers.estud)

router.get('/agregar',(req,res)=>{
   res.render('Estudiante/crear')
});

//--------------------------------------------------------//


//router.get('/menu',(req,res)=>{
   // res.render('login/menu')
//});
module.exports = router;
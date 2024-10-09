var express = require('express');
const tallerControllers = require('../controllers/tallerControllers');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=>{
   res.render('login/index', { title: 'Techbox' });
});

//RUTA PRINCIPAL
router.post('/',tallerControllers.index);

router.get('/contra',(req,res)=>{
   res.render('login/recuperacion')
});

//Esta es de restablecer contraseña 
router.get('/establecer',(req,res)=>{
   res.render('login/establecercontra')
});

router.post('/Restablecer',tallerControllers.Restablecer);

//RUTAS DE INVENTARIO-----------------------------------------------------//
router.get('/herramientas',tallerControllers.herramientas);

router.get('/herra',(req,res)=>{
   res.render('Inventario/crear')
});
router.post('/herramientas',tallerControllers.guardarherra);

router.post('/borrar/:id_herramienta',tallerControllers.borrar);

router.get('/edi', (req,res)=>{
   res.render('Inventario/editar')
});

//--------------------------------------------------------//

//Prestamos yo
router.get('/prestamo',tallerControllers.prestamo);

router.get('/crearp',(req,res)=>{
   res.render('Prestamos/crear')
});
//--------------------------------------------------------//

//rutas  crud devoluciones
router.get('/d',tallerControllers.de);

router.get('/entrega',(req,res)=>{
   res.render('DEVOLUCIONES/Entrega')
});
//Recepcionar datos en devoluciones 
router.post('/eliminar/:id_devo',tallerControllers.Eliminardev);

//estudiantes---------------------------------------------//
router.get('/estudiantes',tallerControllers.estud)

router.get('/agregar',(req,res)=>{
   res.render('Estudiante/crear')
});

//--------------------------------------------------------//
//ghhajjaja

//router.get('/menu',(req,res)=>{
   // res.render('login/menu')
//});

// aca estoy asiendo la ruta donde va aresibir esos datos
router.post('/devolucion',tallerControllers.guardardev)

module.exports = router;
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
router.get('/consu',tallerControllers.material);

router.get('/agregar',(req,res)=>{
   res.render('Materiales/Agregar')
})
//Prestamos yo
router.get('/prestamo',tallerControllers.prestamo);

router.get('/crearp',(req,res)=>{
   res.render('Prestamos/crear')
});

router.post('/pre',tallerControllers.guardarpres);
//--------------------------------------------------------//

//rutas  crud devoluciones
router.get('/d',tallerControllers.de);

router.get('/entrega',(req,res)=>{
   res.render('DEVOLUCIONES/Entrega')
});


// aca estoy asiendo la ruta donde va aresibir esos datos para guardar los datos
router.post('/devolucion',tallerControllers.guardardev)

// para borrar 

//estudiantes---------------------------------------------//
router.get('/estudiantes',tallerControllers.estudi)

router.get('/agregar',(req,res)=>{
   res.render('Estudiante/crear')
});


//--------------------------------------------------------//
//ghhajjaja

//router.get('/menu',(req,res)=>{
   // res.render('login/menu')
//});
module.exports = router;
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

router.get('/edi', (req,res)=>{
   res.render('Inventario/editar')
});

//--------------------------------------------------------//
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
router.post('/devolucion',tallerControllers.guardardev);

// ruta para borrar registros del CRUD devoluciones
router.post('/eliminar/:id_devo', tallerControllers.eliminar);



//estudiantes---------------------------------------------//
router.get('/estudiantes',tallerControllers.estudi)

router.get('/agregar',(req,res)=>{
   res.render('Estudiante/crear')
});

// ruta para  recibir datos 
router.post('/estudiante',tallerControllers.guardarestu)
//ghhajjaja

//ruta para materiales consumibles
router.get('/material',tallerControllers.materialconsu);

router.get('/nuevo',(req,res)=>{
   res.render('material/crearnue')
});


//router.get('/menu',(req,res)=>{
   // res.render('login/menu')
//});
module.exports = router;
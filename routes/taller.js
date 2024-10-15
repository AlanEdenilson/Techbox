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
// ruta para guardar registros en CRUD herramientas
router.post('/herramientas',tallerControllers.guardarherra);
// ruta para eliminar registros en CRUD herramientas
router.post('/eliminarh/:id_herramienta', tallerControllers.eliminarherra);
// ruta para editar registros en CRUD herramientas
router.get('/Editarh/:id_herramienta',tallerControllers.Editarh);
// ruta para actualizar datos
router.post('/actualizarh',tallerControllers.Actualizarh);



//--------------------------------------------------------//
//Prestamos
router.get('/prestamo',tallerControllers.prestamo);

router.get('/crearp',(req,res)=>{
   res.render('Prestamos/crear')
});
// ruta para guardar registros en CRUD prestamos
router.post('/prestamo',tallerControllers.guardarpres);
// ruta para eliminar registros en CRUD prestamos
router.post('/eliminarpres/:Id_prestamos',tallerControllers.eliminarpres);
// ruta para editar registros en CRUD prestamos
router.get('/editarpres/:Id_prestamos',tallerControllers.editarpres);
// ruta para actualizar datos
router.post('/actualizarpres',tallerControllers.actualizarprest);

//--------------------------------------------------------//

//rutas  crud devoluciones
router.get('/d',tallerControllers.de);

router.get('/entrega',(req,res)=>{
   res.render('DEVOLUCIONES/Entrega')
});

// aca estoy asiendo la ruta donde va aresibir esos datos para guardar los datos
router.post('/devolucion',tallerControllers.guardardev);

//ruta para eliminar datos de devolucion 
router.post('/eliminard/:id_devo',tallerControllers.eliminarde);
//ruta para editar devolucion 

router.get('/Editard/:id_devo',tallerControllers.editarde);

//ruta para actualizar datos 
router.post('/Actualizard',tallerControllers.actualizarde);


//estudiantes---------------------------------------------//
router.get('/estudiantes',tallerControllers.estudi)

router.get('/agregar',(req,res)=>{
   res.render('Estudiante/crear')
});
// ruta para  recibir datos 
router.post('/estudiantes',tallerControllers.guardarestu)
// ruta para borrar registros del CRUD estudiantes
router.post('/eliminarEstu/:id_estudiante', tallerControllers.eliminarEstu);
// ruta para editar registros del CRUD estudiantes
router.get('/editarEstu/:id_estudiante',tallerControllers.editarEstu);
router.post('/actualizarEstu',tallerControllers.actualizarEstu);


//Materiales consumibles---------------------------------------------//
//ruta para materiales consumibles
router.get('/',)




//router.get('/menu',(req,res)=>{
   // res.render('login/menu')
//});
module.exports = router;
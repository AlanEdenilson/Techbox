var express = require('express');

var controller = require('../controllers/tallerone')

var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=>{
   res.render('login/menu')
});

//pagina de inicio
router.post('/iniciar',controller.iniciar)

//pagina de registro
router.post('/registrar',controller.registrar)

router.get('/inventario',(req,res)=>{
    res.render('Inventario/herramientas')
})

router.get('/verHerramienta',controller.verHerramienta)

router.post('/insertHerramienta',controller.herramientaInsert)

//pagina de prestammo
router.get('/prestamo',(req,res)=>{
    res.render('Prestamos/prestamos')
})
router.get('/verPrestamo',controller.ver_Pretamos)

//insertar prestamo
router.post('/prestamo',controller.prestamo)

router.get('/devoluciones',(req,res)=>{
    res.render('DEVOLUCIONES/devolu')
})

router.post('/devolver',controller.devolver)

router.get('/verdevoluciones',controller.verdevoluciones)

router.get('/estudiantes',(req,res)=>{
    res.render('Estudiante/Estudiante')

})

router.post('/estudiantes',controller.guardarestu)

router.get('/verestudiantes',controller.verestudi)

router.get('/editEstudent',(req,res)=>{
    res.render('Estudiante/editarEst',{value:req.query.id})
}
)

router.get('/buscarporidE',controller.buscarestudentporid)

router.post('/updateESt',controller.actualizarEstud)

router.get('/delete',controller.eliminarEstud)


module.exports = router;
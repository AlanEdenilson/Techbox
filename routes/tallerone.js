var express = require('express');

var controller = require('../controllers/tallerone')

var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=>{
   res.send('hola mndo')
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

//insertar prestamo
router.post('/prestamo',controller.prestamo)


module.exports = router;
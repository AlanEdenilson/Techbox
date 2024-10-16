var express = require('express');
var router = express.Router();
const tallerControllers = require ('../controllers/index');
//exporta  el archivo judit aca usando require

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/contra',(req,res)=>{
  res.render('login/recuperacion')
});

router.post('/correo',tallerControllers.recibircorreo)

//Esta es de restablecer contraseña 
router.get('/establecer',(req,res)=>{
  res.render('login/establecercontra')
});
//ahora has uso de esta ruta judit poniendoselo al formulario de las contraseñas 
// acuerdate que en la action va la ruta el boton de type submit y metodo post ahorita voy 
//ok esperare me avisas ya esta 
router.post('/Restablecer',tallerControllers.Restablecer);

module.exports = router;

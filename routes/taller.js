var express = require('express');
const tallerControllers = require('../controllers/tallerControllers');
var router = express.Router();

/* GET home page. */
router.get('/',tallerControllers.index);


router.post('/datos',tallerControllers.index)

//router.post('/menu',tallerControllers.menudatos);
router.post('/menu',tallerControllers.insertardatos);

//router.get('/menu',(req,res)=>{
   // res.render('login/menu')
//})
module.exports = router;




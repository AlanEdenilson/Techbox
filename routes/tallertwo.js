var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=>{
   res.send('hola mundo');
});
module.exports = router;
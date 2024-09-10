var con = require('../config/conexion');
var menu = require("../model/taller")

module.exports={

    index:function (req,res) {

        menu.obtener(con, function (err,datos) {
            console.log(datos);
            res.render('login/index', { title: 'TECHBOX' });
        });
    }
};
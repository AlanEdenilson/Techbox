var conexion = require('../config/conexion');
var menu = require("../model/taller")



module.exports={

    index:function (req, res) {
        console.log(req.body);
       //res.render('login/index', { title: 'Techbox' });


        menu.obtener(con, function (err,datos) {
            console.log(datos);
            res.render('login/index', { title: 'TECHBOX' });

            const consult=`SELECT * FROM registrar WHERE EMAIL='${req.body.email}' AND CONTRASEÑA = '${req.body.contraseña}'`;
            conexion.query(consult,function (error,resultado) {
             if (error) {
                 console.log("error en la bd")
                 throw error;
             } else if(resultado.length > 0) {
                 console.log('usuario encontrado')
                 res.render('login/menu');
             }else{
    
                res.send("errror")
             }
            });
        });

    },
    
    insertardatos:function (req,res) {
        var datos = req.body
        console.log(datos)

        var email= req.body.email;
        var Nombre = req.body.Nombre;
        var Contraseña = req.body.Contraseña;


       

       // const consulta=`INSERT * FROM usuarios WHERE NOMBRE = '${nombre}' AND CONTRASENA ='${contraseña}'`;
       const consulta=`INSERT INTO registrar (Email,Nombre,Contraseña)  VALUES ('${email}','${Nombre}','${Contraseña}')`;
       conexion.query(consulta,function (error,resultado) {
        if (error) {
            console.log("error en la bd")
            throw error;
            
        } else {
            console.log('datos insertados correctamente')
            res.render('login/menu');
        }
        });

    },
};


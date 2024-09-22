var conexion = require('../config/conexion');
var menu = require("../model/taller")
var herramientas = require("../model/taller")


module.exports={

    index:function (req, res) {
        console.log(req.body);
       


       const consult=`SELECT * FROM registrar WHERE Email='${req.body.email}' AND Contraseña = '${req.body.contraseña}'`;
       conexion.query(consult,function (error,resultado) {
        if (error) {
            console.log("error en la bd")
            throw error;
        } else if(resultado.length > 0) {
            console.log('usuario encontrado')
            res.render('login/menu');
        }else{
           res.send("error hola")
        }

  
    });
    },
    registrardatos:function (req,res) {
        var registrar = req.body
        console.log(registrar)

        var email= req.body.email;
        var Nombre= req.body.Nombre;
        var Contraseña = req.body.Contraseña;

        const consulta=`INSERT INTO registrar (ID_Registro,Email,Nombre,Contraseña)VALUES ('','${email}','${Nombre}','${Contraseña}')`;
        conexion.query(consulta,function (error, resultado) {
            if (error) {
                console.log("error en la base de datos")    
                throw error;
            }else{
                console.log('datos insertados correctamente')
                res.render('login/menu');
            }
            
        });
       
    },

    presta:function (req,res){
        const consult=`SELECT * FROM prestamo`;
        conexion.query(consult,function (error,resultado) {
         if (error) {
             console.log("error en la bd")
             throw error;
         } else if(resultado.length > 0) {
             console.log('datos encontrados')
             res.render('prestamos/prestamos',{
                datos:resultado
             });
         }else{
            res.send("error hola")
         }
     });
    },

    inven:function (req,res){
        const consult=`SELECT * FROM prestamo`;
        conexion.query(consult,function (error,resultado) {
         if (error) {
             console.log("error en la bd")
             throw error;
         } else if(resultado.length > 0) {
             console.log('datos encontrados')
             res.render('login/herramientas',{
                herramienta:resultado
             });
         }else{
            res.send("error hola")
         }
     });
    }


};


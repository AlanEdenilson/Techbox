var conexion = require('../config/conexion');
const taller = require('../model/taller');
var menu = require("../model/taller")
var borrar = require("fs");


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
        res.send("error")
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
    // CRUD DE HERRAMIENTAS (INVENTARIO)

    herramientas:function (req,res) {
        const consult=`SELECT * FROM herramientas`;
        conexion.query(consult,function (error,resultado) {
            if(error) {
                console.log("error en la bd")
                throw error;
            }else if(resultado.length > 0) {
                console.log('datos encontrados')
                res.render('Inventario/herramientas' ,{
                    herramienta:resultado
                });
            }else{
                res.send("error")
            }

        });
    },

    guardar:function (req,res) {
        console.log(req.body);
        taller.guardarr(conexion,req.body,function (err,datos) {
            res.redirect('/taller/herramientas');
        });
    },

    borrar:function (req,res) {
        console.log("recepcion de datos");
        console.log(req.params.id_herramienta);
        taller.retornarDatosID(conexion,req.params.id_herramienta,function (err,registros) {
            
            var Nombre="routes/taller/"+(registros[0].Nombre);
            var Estado="routes/taller/"+(registros[0].Estado);

            if(borrar.existsSync(Nombre)){
                borrar.unlinkSync(Nombre);

                if(borrar.existsSync(Estado)){
                    borrar.unlinkSync(Estado);
            }}
            taller.borrar(conexion,req.params.id_herramienta,function (err) {
                res.redirect('/taller/herramientas');
            });
        });

    },

    // CRUD DE PRESTAMOS 
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
            res.send("error ")
        }
    });
    },

    crear:function (req,res) {
        res.render('prestamos/crear')
    },

    //CRUD DE DEVOLUCIONES 
    de:function (req,res) {
        const consult=`SELECT * FROM devolucion`;
        conexion.query(consult,function (error,resultado) {
            if(error) {
                console.log("error en la bd")
                throw error;
            }else if(resultado.length > 0) {
                console.log('datos encontrados')
                res.render('DEVOLUCIONES/devolu' ,{
                    dev:resultado
                });
            }else{
                console.log('datos insertados')
                res.send("error")
            }

        });
    },
    guardardev:function (req,res) {
        console.log(req.body);

        de.insertar(conexion,req.body,function (err) {
             res.redirect('/taller/d');
        });
    },
        
    //CRUD DE ESTUDIANTES (REGISTROS)
    estud:function (req,res) {
        const consult=`SELECT * FROM estudiantes`;
        conexion.query(consult,function (error,resultado) {
            if(error) {
                console.log("error en la bd")
                throw error;
            }else if(resultado.length > 0) {
                console.log('datos encontrados')
                res.render('Estudiante/Estudiante' ,{
                    estudian:resultado
                });
            }else{
                res.send("error")
            }

        });
    },

    //editar:function (req,res) {
        //taller.retornarDatosID(conexion,req.params.id_herramienta,function (err,registros){
           //* console.log(registros[0]);
        //*res.render('/taller/herramientas', {taller:registros[0]});
       // });
   // }

};

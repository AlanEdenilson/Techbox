var conexion = require('../config/conexion');
const taller = require('../model/taller');
//var menu = require("../model/taller")
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
    Restablecer:function name(req,res) {
        console.log(req.body.Contraseña);

        if(req.body.Contraseña){
            taller.Restablecer(conexion,req.body,function name(err) {
                });
        }
        res.redirect('/taller');
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

    // Guardar herramientas 
    guardarherra:function (req,res) {
        console.log(req.body);
        var {Nombre, Estado}=req.body

    //esta consulta es para guardar datos
        var consult =`INSERT INTO herramientas (Nombre,Estado) VALUES ('${Nombre}','${Estado} ')`;
        ;  conexion.query(consult,function (error,resultado) {
            if(error) {
                console.log("error en la bd")
                throw error;

            }else{
                res.redirect('/taller/herramientas')
            }
        });
    },
    // eliminar datos de la herramiena
    eliminarherra: function (req, res) {
        console.log("Recepción de datos");
        console.log(req.params.id_herramienta);

         // esto es  para  borrar los registros  d
        taller.borrarh(conexion, req.params.id_herramienta, function (error) {
            if (error) {
                console.error("Error al eliminar:", error);
                return res.status(500).send("Error al eliminar el elemento.");
            }
            res.redirect('/taller/herramientas');
        });
    },
    editar:function (req,res) {
        res.render('/taller/editardev')
    },
    

        //Crud de prestamos yo
        prestamo:function (req,res) {
            const consult=`SELECT * FROM prestamo`;
            conexion.query(consult,function (error,resultado) {
                if(error) {
                    console.log("error en la bd")
                    throw error;
                }else if(resultado.length > 0) {
                    console.log('datos encontrados')
                    res.render('Prestamos/prestamos' ,{
                        prest:resultado
                    });
                }else{
                    res.send("error")
                }
    
            });
        },
        guardarpres:function (req,res) {
            console.log(req.body);
            var {Nombre,Fecha,Estudiante,Tipo}= req.body

            var consult=`INSERT INTO prestamo (Herramienta,Fecha_prestamo,estudiante,Tipo_Herramienta) VALUES ('${Nombre}','${Fecha}','${Estudiante}','${Tipo}')`;
            ; conexion.query(consult,function (error,resultado) {
                if (error) {
                    console.log("erroren la bd")
                    throw error;
                }else{
                    res.redirect('/taller/prestamo')
                }
            });
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
//okis aqui veo
        });
    },
    guardardev:function (req,res) {
        console.log(req.body);
        var {nombre, fecha, observaciones, Estado}=req.body


//esta consulta es para guardar archivos 
        var consult =`INSERT INTO devolucion (Herramienta,fecha_devolucion,observaciones,estado_entrega) VALUES ('${nombre}', '${fecha}', '${observaciones}', '${Estado} ')`;
      ;  conexion.query(consult,function (error,resultado) {
            if(error) {
                console.log("error en la bd")
                throw error;

            }else{
                res.redirect('/taller/d')
            }

        });
    
        // hola ahorita te digolo que vamos aser esta buena esa consulta judith 
        // aca primero hay que aser la consulta asi mira

    },
    //boton de borrar 
    eliminar: function (req, res) {
        console.log("Recepción de datos");
        console.log(req.params.id_devo);

         // esto es  para  borrar los registros  d
        taller.borrar(conexion, req.params.id_devo, function (error) {
            if (error) {
                console.error("Error al eliminar:", error);
                return res.status(500).send("Error al eliminar el elemento.");
            }
            res.redirect('/taller/d');
        });
    },

    //  esto es para  mostrar el boton de editar de devolucion 
    editar: function (req, res) {
        const id_devo = req.params.id_devo;
    
        taller.retornarDatosID(conexion, id_devo, function (err, registros) {
            if (err) {
                console.error("Error al recuperar los datos:", err);
                return res.status(500).send("Error al recuperar los datos.");
            }
    
            if (!registros || registros.length === 0) {
                return res.status(404).send("No se encontraron datos.");
            }
    
            console.log("Datos recuperados:", registros[0]);
            res.render('DEVOLUCIONES/editar', { taller: registros[0] });
        });
    
    },
    actualizar:function (req,res) {
        console.log(req.body.nombre);
        console.log(req.body.fecha);
        console.log(req.body.observaciones);
        console.log(req.body.Estado);

        taller.actualizar(conexion, req.body, function (err) {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al actualizar los datos");
            }
            res.redirect('/taller/d');
        });
        

        

    },
    
    
        
    //CRUD DE ESTUDIANTES (REGISTROS)
    estudi:function (req,res) {
        const consult=`SELECT * FROM estudiantes`;
        conexion.query(consult,function (error,resultado) {
            if(error) {
                console.log("error en la bd")
                throw error;
            }else if(resultado.length > 0) {
                console.log('datos encontrados')
                res.render('Estudiante/Estudiante' ,{
                    estud:resultado
                });
            }else{
                res.send("error")
            }

        });
    },
    guardarestu:function (req,res) {
        console.log(req.body);
        var {nombre,apellido, gmail, nie}=req.body


//esta consulta es para guardar archivos 
        var consult =`INSERT INTO estudiantes (Nombre,Apellido,Gmail,NIE) VALUES ('${nombre}','${apellido}, '${gmail}', '${nie}')`;
      ;  conexion.query(consult,function (error,resultado) {
            if(error) {
                console.log("error en la bd")
                throw error;

            }else{
                res.redirect('/taller/estudiantes')
            }

        });
    },
    materialconsu:function (req,res) {
        const consult=`SELECT * FROM materiales_consumible`;
        conexion.query(consult,function (error,resultado) {
            if(error) {
                console.log("error en la bd")
                throw error;
            }else if(resultado.length > 0) {
                console.log('datos encontrados')
                res.render('material/materiales' ,{
                    mate:resultado
                });
            }else{
                res.send("error")
            }

        });
    }
    


    //editar:function (req,res) {
        //taller.retornarDatosID(conexion,req.params.id_herramienta,function (err,registros){
           //* console.log(registros[0]);
        //*res.render('/taller/herramientas', {taller:registros[0]});
       // });
   // }

};

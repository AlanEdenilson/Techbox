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

         // esto es  para  borrar los registros  
        taller.borrar(conexion, req.params.id_herramienta, function (error) {
            if (error) {
                console.error("Error al eliminar:", error);
                return res.status(500).send("Error al eliminar el elemento.");
            }
            res.redirect('/taller/herramientas');
        });
    },
    //boton para editar herramientas
    Editarh : function(req,res){
        const id_herramienta = req.params.id_herramienta;

        taller.RetornarDatosID(conexion, id_herramienta, function (err, registros) {
            if (err) {
                console.error("Error al recuperar los datos:", err);
                return res.status(500).send("Error al recuperar los datos.");
            }
    
            if (!registros || registros.length === 0) {
                return res.status(404).send("No se encontraron datos.");
            }
    
            console.log("Datos recuperados:", registros[0]);
            res.render('Inventario/cambiar', { taller: registros[0] });
        });
    
    },
    Actualizarh:function (req,res){
        console.log(req.body);
        
        console.log(req.body.Nombre);
        console.log(req.body.Estado);

        taller.Actualizar(conexion,req.body, function (err) {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al actualizar los datos");
            }
            res.redirect('/taller/herramientas');
        });

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
            var {herra,prestamo,Estudiante,Tipo}= req.body

            var consult=`INSERT INTO prestamo (Herramienta,Fecha_prestamo,estudiante,Tipo_Herramienta) VALUES ('${herra}','${prestamo}','${Estudiante}','${Tipo}')`;
            ; conexion.query(consult,function (error,resultado) {
                if (error) {
                    console.log("erroren la bd")
                    throw error;
                }else{
                    res.redirect('/taller/prestamo')
                }
            });
        },
        eliminarpres:function (req,res) {
            console.log("Recepción de datos");
            console.log(req.params.Id_prestamos);
            
            taller.borrarr(conexion, req.params.Id_prestamos, function (error) {
                if (error) {
                    console.error("Error al eliminar:", error);
                    return res.status(500).send("Error al eliminar el elemento.");
                }
                res.redirect('/taller/prestamo');
            });
        },

        editarpres:function(req,res){
            const Id_prestamos = req.params.Id_prestamos;

            taller.RetornarDatosId(conexion, Id_prestamos, function (err, registros) {
                if (err) {
                    console.error("Error al recuperar los datos:", err);
                    return res.status(500).send("Error al recuperar los datos.");
                }
        
                if (!registros || registros.length === 0) {
                    return res.status(404).send("No se encontraron datos.");
                }
        
                console.log("Datos recuperados:", registros[0]);
                res.render('Prestamos/editarp', { taller: registros[0] });
            });
        },

        actualizarprest:function(req, res) {
            console.log(req.body.NameHerra)
            console.log(req.body.FechaPres)
            console.log(req.body.nameEstudi)
            console.log(req.body.Tipohpres)

            taller.actualizarpres(conexion,req.body, function (err) {
                if(err){
                    console.error(err);
                    return res.status(500).send("Error al actualizar los datos");
                }
                 res.redirect('/taller/prestamo');
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
        var {nombree, fechaa, observaciones, Estado}=req.body


//esta consulta es para guardar archivos 
        var consult =`INSERT INTO devolucion (Herramienta,fecha_devolucion,observaciones,estado_entrega) VALUES ('${nombree}', '${fechaa}', '${observaciones}', '${Estado} ')`;
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
    eliminarde:function (req,res) {
        console.log("Resepcion de datos");
        console.log(req.params.id_devo);

        taller.Borrar(conexion,req.params.id_devo,function (error) {
            if (error) {
                console.error("Error al eliminar:",error);
                return res.status(500).send("Error al eliminar elemento");
            }
            res.redirect('/taller/d');
        });
    },
    editarde:function (req,res) {
        const id_devo = req.params.id_devo;

        taller.RetornarDatosID(conexion,id_devo, function (error,registros) {
            if (error) {
                console.error("Error al recuperar datos:", error);
                return res.status(500).send("Error al recuperar los datos");
            }
            if (!registros || registros.length === 0) {
                return res.status(404).send("No se encontraron datos.")
            }
            console.log("Datos recuperados:",registros[0]);
            res.render('DEVOLUCIONES/editardevo',{taller:registros[0]});
        });
    },
    actualizarde:function (req,res) {
        console.log(req.body.nombree);
        console.log(req.body.fechaa);
        console.log(req.body.observaciones);
        console.log(req.body.Estado);

        taller.Actualizar(conexion, req.body, function (error) {
            if (error) {
                console.error(error);
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
    eliminarEstu:function (req,res){
        console.log("Recepción de datos");
        console.log(req.params.id_estudiante);

        taller.borrar(conexion,req.params.id_estudiante, function (error) {
            if (error) {
                console.error("Error al eliminar:", error);
                return res.status(500).send("Error al eliminar el elemento.");
            }
            res.redirect('/taller/estudiantes');
        });
    },
    editarEstu:function(req,res){
        const id_estudiante = req.params.id_estudiante;

        taller.retornarDatosID(conexion, id_estudiante, function (err, registros) {
            if (err) {
                console.error("Error al recuperar los datos:", err);
                return res.status(500).send("Error al recuperar los datos.");
            }
    
            if (!registros || registros.length === 0) {
                return res.status(404).send("No se encontraron datos.");
            }
    
            console.log("Datos recuperados:", registros[0]);
            res.render('Estudiante/editarEst', { taller: registros[0] });
        });
    },
    actualizarEstu:function (req,res) {
        console.log(req.body.estudiat);
        console.log(req.body.apellido);
        console.log(req.body.Gmail);
        console.log(req.body.Nie);

        taller.actualizar(conexion, req.body, function (err) {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al actualizar los datos");
            }
            res.redirect('/taller/estudiantes');
        });
        
    },

 //CRUD DE MATERIALES CONSUMIBLE (REGISTROS)
    //materialconsu:function (req,res) {
        //const consult=`SELECT * FROM materiales_consumible`;
        //conexion.query(consult,function (error,resultado) {
            //if(error) {
               // console.log("error en la bd")
               // throw error;
            //}else if(resultado.length > 0) {
                //console.log('datos encontrados')
                //res.render('material/materiales' ,{
                   // mate:resultado
              //  });
           // }else{
                //res.send("error")
           // }

       // });
   // }
    


    //editar:function (req,res) {
        //taller.retornarDatosID(conexion,req.params.id_herramienta,function (err,registros){
           //* console.log(registros[0]);
        //*res.render('/taller/herramientas', {taller:registros[0]});
       // });
   // }

};

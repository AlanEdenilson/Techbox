var conexion = require('../config/conexion');
var Model =require('../model/model')




module.exports={
    
    //INICIAR SESION
    iniciar:function(req,res){
        console.log(req.body)

        Model.Buscar_usuario(conexion,req.body,function(err,result) {
            if(err) {
                console.log(err);
                return res.status(500).send('Error en la consulta');
            }
            else if  (result.length>0){
                console.log(result)
                res.cookie('token', {ID:result[0].id}, {httpOnly: true })
                res.render('login/menu');
            }else{
                return res.status(401).send('Usuario o contraseña incorecto');
            }
            
        })
    },

    //REGISTRAR USUARIO
    registrar:function(req,res){
        console.log(req.body)
        Model.INSERTAR_usuario(conexion,req.body,function(err,result) {
            if(err) {
                console.log(err);
                return res.status(500).send('Error en la consulta');
            }
            else if (result.affectedRows===1){
                console.log(result)
                res.cookie('token', {ID:result.insertId}, {httpOnly: true })
                res.render('login/menu');

            }

        })
    },
    //INGRESAR HERRAMIENTA
    herramientaInsert:function(req,res) {
        console.log(req.body)
        Model.INSERTAR_herramienta(conexion,req.body,function(err,result) {
            if(err) {
                console.log(err);
                return res.status(500).send('Error en la consulta');
            }
            else if (result.affectedRows===1){
                console.log(result)
                res.redirect('/One_T/inventario');
            }
        })
    },
    //VER HERRAMIENTAS
    verHerramienta:function (req,res) {
        Model.Buscar_herramienta(conexion,function(err,result) {
            if(err) {
                console.log(err);
                return res.status(500).send('Error en la consulta');
            }
            else if (result.length>0){
                console.log(result)
                res.send(result)
            }
        })
        
    },
    //REGISTAR PRESTAMO
    prestamo: async function(req,res){
        const {herra ,Estudiante ,estado } = req.body
        console.log('herramienta: '+herra+' estudiante: '+Estudiante)
        try {
            var herramienta = await Model.BUSCAR_nombre_herramienta(conexion,herra)
            console.log(herramienta[0].id)
            var estudaiante  = await Model.BUSCAR_estudiante(conexion,Estudiante)
            console.log(estudaiante[0].id)

            const resultado = await Model.INSERTAR_prestamo(conexion,estudaiante[0].id,herramienta[0].id,estado)
            console.log('prestamo: '+ resultado.insertId)

            Model.DEVOLVER_herramienta(conexion,resultado.insertId,function (err,result) {
                if (err) {
                    console.error(err);
                    return res.status(500).send("Error al insertar los datos");
                }
                else if (result.affectedRows===1){
                    console.log(result)
                    res.render('Prestamos/prestamos')
                }
             })

        } catch(error) {
            res.send(error)

        }
        
    },
    ver_Pretamos:function (req,res) {
        console.log('buscando prestamos')
        Model.VER_prestamos(conexion,function(err,result) {
            if(err) {
                console.log(err);
                return res.status(500).send('Error en la consulta');
            }
            else if (result.length>0){
                console.log(result)
                res.send(result)
            }else{
                res.send(' no se encontraron prestamos')

            }
        })  
    },
    //devolver
    devolver:function(req,res){
        var {prestamo_id, observaciones} =req.body
        console.log(req.body)
         Model.ACTUALIZAR_devolucion(conexion,observaciones,prestamo_id,function (err,result) {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al insertar los datos");
            }
            else if (result.affectedRows===1){
                console.log(result)
                res.redirect('/One_T/devoluciones');
            }else{
                res.send('a ocurirido un error')
            }
         })
    },
    verdevoluciones:function (req,res) {
        Model.VER_devoluciones(conexion,function (err,result) {
            if(err) {
                console.log(err);
                return res.status(500).send('Error en la consulta');
            }
            else if (result.length>0){
                console.log(result)
                res.send(result)
            }else{
                res.send(' no se encontraron devoluciones')

            }
        })
        
    }
    
}
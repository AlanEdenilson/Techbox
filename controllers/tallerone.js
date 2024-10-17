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


        
      
    }

}
var conexion = require('../config/conexion');
const taller = require('../model/taller');

module.exports={
    recibircorreo:function(req,res){
        // Code to receive email using SendGrid API
        console.log('Recibiendo correo...');
        // este codigo es para almacenar el correo para que no pierda cuando pase de pagina en pagina 
            // este  req.session.correo=req.body.email
        req.session.correo=req.body.email 

       

        // aca manda la pagina de la contraseña usando res.render
       res.render('login/establecercontra')
        
    },

    Restablecer:function(req,res){

        function restablecerPromesa(conexion, contra, correo) {
            return new Promise((resolve, reject) => {
              taller.Restablecer(conexion, contra, correo, function(error, result) {
                if (error) {
                    console.error(error);
                    reject(error);
                    // res.json({ success: false, message: 'Error al restablecer contraseña' });
                  } else if (result.affectedRows === 0) {
                    // res.json({ success: false, message: 'Correo no encontrado' });
                    reject('correo no encontrado');
                    console.log('el correo no existe')
                  } else {
                    console.log('actualizado con exito')
                    resolve('actualizado con exito')
                    
                  }
              });
            });
          }
        var correo =req.session.correo
        console.log('resibiendo la contra')
        console.log(correo)
        var contra=req.body.password;
        // Code to receive email using SendGrid API
        console.log(req.body.password);
       
        restablecerPromesa(conexion, contra, correo)
        .then((mensaje) => {
        res.json({ success: true, message: mensaje });
        })
        .catch((error) => {
        res.json({ success: false, message: error });
        });



    }
}
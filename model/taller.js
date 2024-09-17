module.exports={
    obtener:function (conexion,funcion) {
        conexion.query("SELECT * FROM registrar",funcion);
    },
    obtener:function(conexion, funcion) {
       conexion.query("SELECT*FROM registrar", funcion);
   },
    buscar:function(conexion, usaurio, contraseña, funcion) {
       conexion.query(`SELECT * FROM registrar WHERE EMAIL=${usaurio} AND CONTRASEÑA =${contraseña}`, funcion);
   
   },

    
}
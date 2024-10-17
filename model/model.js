module.exports={
    INSERTAR_usuario:function(conexion,datos, funcion) {
        conexion.query("INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?,?,?)",[datos.nombre,datos.correo,datos.Contraseña],funcion);
    },
    Buscar_usuario:function(conexion,datos,funcion){
        conexion.query("SELECT * FROM usuarios WHERE correo=? AND contraseña=?",[datos.email,datos.contraseña],funcion);
    }
}
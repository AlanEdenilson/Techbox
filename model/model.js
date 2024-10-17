module.exports={
    INSERTAR_usuario:function(conexion,datos, funcion) {
        conexion.query("INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?,?,?)",[datos.nombre,datos.correo,datos.Contraseña],funcion);
    },
    Buscar_usuario:function(conexion,datos,funcion){
        conexion.query("SELECT * FROM usuarios WHERE correo=? AND contraseña=?",[datos.email,datos.contraseña],funcion);
    },
    INSERTAR_herramienta:function(conexion,datos, funcion) {
        conexion.query("INSERT INTO herramientas (nombre, id_tipo, estado) VALUES (?,?,?)",[datos.Nombre,datos.tipo,datos.Estado],funcion);
    },
    Buscar_herramienta:function (conexion,funcion) {
        var consulta =`
         SELECT 
         h.id, 
         h.nombre,
         h.estado, 
         t.nombre as 
         tipo_nombre, 
         t.cantidad
         FROM herramientas h
         LEFT JOIN tipo t ON h.id_tipo = t.id_tipo;
        `
        conexion.query(consulta,funcion);

    
    }
}
const con = require("../config/conexion");
const { guardarherra, actualizar } = require("../controllers/tallerControllers");

module.exports={
    obtener:function (conexion,funcion) {
        conexion.query("SELECT * FROM registrar",funcion);
    },
    //REGISTRAR USUARIO
    obtener:function(conexion, funcion) {
        conexion.query("SELECT*FROM registrar", funcion);
    },

    //VALIDAR CONTRASEÑA-------------------------------------------------//
    buscar:function(conexion, usaurio, contraseña, funcion) {
       conexion.query(`SELECT * FROM usuario WHERE EMAIL=${usaurio} AND CONTRASEÑA =${contraseña}`, funcion);
    },
    //DATOS PARA CRUD DE HERRAMIENTA(INVENTARIO)-------------------------//
    obtener:function (conexion,funcion) {
    conexion.query("SELECT * FROM herramientas",funcion);
    },
    insertar:function (conexion,datos,funcion) {
        conexion.query("INSERT INTO herramientas (Nombre,Estado) VALUES (?,?)",[datos.Nombre,datos.Estado],funcion);
    },
     //funcion para borrar datos de herramientas
    borrarh:function (conexion,id,funcion) {
        conexion.query("DELETE FROM herramientas WHERE id_herramienta=?",[id], funcion);
    },
     // esto es para retornar los datos de Id 
    RetornarDatosid: function (conexion, id, callback) {
        const query = "SELECT * FROM herramientas WHERE id_herramienta = ?";
        conexion.query(query, [id], callback);
    },
    Actualizarher: function (conexion,datos,funcion) {
        const query = "UPDATE herramientas SET Nombre=?, Estado=? WHERE id_herramienta=? ";
        conexion.query(query, [datos.Nombre, datos.Estado, datos.id], funcion);
    },

    //DATOS PARA CRUD DE PRESTAMOS--------------------------------//
    obtener:function (conexion,funcion) {
        conexion.query("SELECT * FROM prestamo",funcion);
    },
    insertar:function (conexion,datos,funcion) {
        conexion.query("INSERT INTO prestamo (Herramienta,Fecha_prestamo,estudiante,Tipo_Herramienta) VALUES (?,?,?,?)",[datos.herra,datos.prestamo,datos.Estudiante,datos.Tipo],funcion);
    },
    borrarr:function (conexion,id,funcion){
        conexion.query("DELETE FROM prestamo WHERE Id_prestamos = ?",[id],funcion);
    },
    RetornarDatosId:function (conexion, id, callback) {
        const query = "SELECT * FROM prestamo WHERE Id_prestamos = ?";
        conexion.query(query, [id], callback);
    },
    actualizarpres:function(conexion,datos,funcion){
        const query="UPDATE prestamo SET Herramienta=?, Fecha_prestamo=?, Estudiante=?, Tipo_herramienta=? WHERE Id_prestamos=?";
        conexion.query(query,[datos.NameHerra,datos.FechaPres,datos.nameEstudi,datos.Tipohpres,datos.id],funcion);
    },
    //DATOS PARA CRUD DE DEVOLUCION--------------------------------//
    obtener:function (conexion,funcion) {
    conexion.query("SELECT * FROM devolucion ",funcion)
    },
    
    insertar:function (conexion,datos,funcion) {
        conexion.query("INSERT INTO devolucion (Herramienta,fecha_devolucion,observaciones,estado_entrega,Archivo) VALUES (?,?,?,?,?)",[datos.nombree,datos.fechaa,datos.observaciones,datos.Estado],funcion);
    },

    Borrar:function (conexion,id,funcion) {
        conexion.query("DELETE FROM devolucion WHERE id_devo = ?",[id],funcion);
    },
    //para retornar datos de id devoluon 
    RetornarDatosID:function (conexion,id,callback) {
        const query="SELECT * FROM devolucion WHERE id_devo = ? ";
        conexion.query(query, [id],callback);
    },
    Actualizar: function (conexion, datos, funcion) {
        const query = "UPDATE devolucion SET Herramienta = ?, fecha_devolucion = ?, observaciones = ?, estado_entrega = ? WHERE id_devo = ?";
        conexion.query(query, [datos.nombree, datos.fechaa, datos.observaciones, datos.Estado, datos.id], funcion);
    },
    
    // DATOS CRUD PARA ESTUDIANTES----------------------------------//
    obtener:function (conexion,funcion) {
        conexion.query("SELECT * FROM estudiantes",funcion)
    },
    insertar:function (conexion,datos,funcion) {
        conexion.query("INSERT INTO estudiantes (Nombre,Apellido,Gmail,NIE) VALUES (?,?,?,?)",[datos.estudiant,datos.Apellido,datos.Gmail,datos.NIE],funcion);
    },
    borrar:function(conexion,id,funcion){
        conexion.query("DELETE FROM estudiantes WHERE id_estudiante=?",[id],funcion)
    },
    retornarDatosID:function(conexion, id, callback){
        const query = "SELECT * FROM estudiantes WHERE id_estudiante = ?";
        conexion.query(query, [id], callback);
    },
    actualizar:function(conexion,datos,funcion){
        conexion.query("UPDATE estudiantes SET Nombre=?, Apellido=?, Gmail=?, NIE=? WHERE id_estudiante=?", [datos.estudiant,datos.apellido,datos.Gmail,datos.Nie, datos.id],funcion);
    },


    // restablecer contraseña aca esta el modelo va pruebo ya 
    //  aca usaremos el correo para actualizar la contraseña si ahorita probaremos
    Restablecer:function (conexion,contraseña,correo,funcion) {
        conexion.query("UPDATE registrar SET Contraseña=? WHERE Email=? AND EXISTS (SELECT 1 FROM registrar WHERE Email=? ); ", [contraseña, correo, correo], funcion);
    }

}

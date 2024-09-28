const con = require("../config/conexion");

module.exports={
    obtener:function (conexion,funcion) {
        conexion.query("SELECT * FROM registrar",funcion);
    },

    obtener:function(conexion, funcion) {
        conexion.query("SELECT*FROM registrar", funcion);
    },
    buscar:function(conexion, usaurio, contraseña, funcion) {
       conexion.query(`SELECT * FROM usuario WHERE EMAIL=${usaurio} AND CONTRASEÑA =${contraseña}`, funcion);
    },

    obtener:function (conexion,funcion) {
    conexion.query("SELECT * FROM presamo",funcion);
    },
    obtener:function (conexion,funcion) {
    conexion.query("SELECT * FROM herramientas",funcion);
    },
    obterner:function (conexion,funcion) {
    conexion.query("SELECT * FROM estudiantes",funcion)
    },
    obterner:function (conexion,funcion) {
    conexion.query("SELECT * FROM devolucion",funcion)
    },

    guardarr: function (conexion,datos,funcion) {
        conexion.query("INSERT INTO herramientas (Nombre, Estado) VALUES (?,?) ",[datos.Nombre, datos.Estado], funcion)
    },

    retornarDatosID: function (conexion,id_herramienta,funcion) {
        conexion.query("SELECT * FROM herramientas WHERE id=? ", [id_herramienta],funcion);
    },

    borrar:function (conexion,id_herramienta,funcion) {
        conexion.query("DELETE FROM herramientas WHERE id=?",[id_herramienta], funcion);
    } 
}

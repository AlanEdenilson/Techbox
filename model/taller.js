const con = require("../config/conexion");

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

    obterner:function (conexion,funcion) {
    conexion.query("SELECT * FROM estudiantes",funcion)
    },
    obterner:function (conexion,funcion) {
    conexion.query("SELECT * FROM devolucion",funcion)

    }, 

    guardarr: function (conexion,datos,funcion) {
        conexion.query("INSERT INTO herramientas ( Nombre ) VALUES (?) ",[datos.Nombre], funcion);
    },

    retornarDatosID: function (conexion,id_herramienta,funcion) {
        conexion.query("SELECT * FROM herramientas WHERE id=? ", [id_herramienta],funcion);
    },

    borrar:function (conexion,id_herramienta,funcion) {
        conexion.query("DELETE FROM herramientas WHERE id=?",[id_herramienta], funcion);
    },

    //DATOS PARA CRUD DE PRESTAMOS--------------------------------//
    obtener:function (conexion,funcion) {
        conexion.query("SELECT * FROM presamo",funcion);
    },
    
    //DATOS PARA CRUD DE DEVOLUCION--------------------------------//
    obterner:function (conexion,funcion) {
    conexion.query("SELECT * FROM devolucion",funcion)
    },

    // DATOS CRUD PARA ESTUDIANTES----------------------------------//
    obterner:function (conexion,funcion) {
        conexion.query("SELECT * FROM estudiantes",funcion)
        },

}

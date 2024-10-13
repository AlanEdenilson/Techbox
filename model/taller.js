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
    
    obterner:function (conexion,funcion) {
    conexion.query("SELECT * FROM devolucion",funcion)

    }, 

    retornarDatosID: function (conexion,id_herramienta,funcion) {
        conexion.query("SELECT * FROM herramientas WHERE id=? ", [id_herramienta],funcion);
    },
    //funcion para borrar datos de herramientas
    borrarh:function (conexion,id,funcion) {
        conexion.query("DELETE FROM herramientas WHERE id_herramienta=?",[id], funcion);
    },

    //DATOS PARA CRUD DE PRESTAMOS--------------------------------//
    obtener:function (conexion,funcion) {
        conexion.query("SELECT * FROM presamo",funcion);
    },

    insertar:function (conexion,datos,funcion) {
        conexion.query("INSERT INTO prestamo (Herramienta,Fecha_prestamo,estudiante,Tipo_Herramienta) VALUES (?,?,?,?)",[datos.Herramienta,datos.Fecha_prestamo,datos.Estudiante,datos.Tipo_herramienta],funcion);
    },
    //DATOS PARA CRUD DE DEVOLUCION--------------------------------//
    obterner:function (conexion,funcion) {
    conexion.query("SELECT * FROM devolucion ",funcion)
    },
    
    insertar:function (conexion,datos,funcion) {
        conexion.query("INSERT INTO devolucion (Herramienta,fecha_devolucion,observaciones,estado_entrega,Archivo) VALUES (?,?,?,?,?)",[datos.Herramienta,datos.fecha_devolucion,datos.odservaciones,datos.estado_entrega,datos.Archivo],funcion);
    },
    //funcion de borrar      aqui va lo del id de la tabla  en [va el id nada mas para que no se confundan]
    borrar:function (conexion,id,funcion) {
        conexion.query("DELETE FROM devolucion WHERE id_devo=?",[id],funcion)
    },

    // esto es para retornar los datos de Id 
    retornarDatosID: function (conexion, id, callback) {
        const query = "SELECT * FROM devolucion WHERE id_devo = ?";
        conexion.query(query, [id], callback);
    },
    // para los datos de actualizar hay quetenr cuidado con los campo [estos campos deben de ir tal cual esta en name=""en el formulario editar de lo contrario no funcionara ]
    actualizar:function (conexion,datos,funcion) {
        conexion.query("UPDATE devolucion SET Herramienta = ?, fecha_devolucion = ?, observaciones = ?, estado_entrega = ? WHERE id_devo = ?", [datos.nombre, datos.fecha, datos.observaciones, datos.Estado, datos.id], funcion);
    },

    

    // DATOS CRUD PARA ESTUDIANTES----------------------------------//
    obterner:function (conexion,funcion) {
        conexion.query("SELECT * FROM estudiantes",funcion)
    },
    insertar:function (conexion,datos,funcion) {
        conexion.query("INSERT INTO estudiantes (Nombre,Apellido,Gmail,NIE) VALUES (?,?,?)",[datos.Nombre,datos.Apellido,datos.Gmail,datos.NIE],funcion);
    },

    // restablecer contraseña

    Restablecer:function (conexion,datos,funcion) {
        conexion.query("UPDATE registar SET Contraseña=? WHERE id=?", [datos.Contraseña, datos.ID_Registro], funcion);
    }

}

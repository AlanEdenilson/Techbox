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
    },
    //buscar herramienta por su nombre
    BUSCAR_nombre_herramienta:function(conexion,nombre) {
        const consulta = `SELECT id FROM herramientas WHERE nombre = '${nombre}'`;
        return new Promise((resolve, reject) => {
            try {
                conexion.query(consulta, function (error,result) {
                    if (error) {
                        return reject(error);
                    } else if(result.length>0) {
                        resolve(result);

                    }else{
                        reject('no se encontro ninguna herramienta con ese nombre ')
                    }
                });
                
            } catch (error) {
                throw error;
            }
        });
    },
    //buscar estudinate por nie
    BUSCAR_estudiante:function(conexion,nie) {
        const consulta = `SELECT id FROM perfil_estudiante WHERE nie = '${nie}'`;
        return new Promise((resolve, reject) => {
            try {
                conexion.query(consulta, function (error,result) {
                    if (error) {
                        return reject(error);
                    } else if(result.length>0) {
                        resolve(result);

                    }else{
                        reject('no se encontro ningun estudiante con ese nie ')
                    }
                });
                
            } catch (error) {
                throw error;
            }
        });
    },
    //inserta el prestamo
    INSERTAR_prestamo:function(conexion,estudiante,herramienta,estado) {
        var consulta =`INSERT INTO prestamos (perfil_estudiante_id, herramienta_id, estado) VALUES (${estudiante},${herramienta},'${estado}')`
        return new Promise((resolve, reject) => {
            try {
                conexion.query(consulta, function (err,result) {
                    if (err) {
                        return reject(err);
                    } else  {
                        console.log('retornando')
                        return resolve(result);
                    }
                });
                
            } catch (error) {
                
            }
                
                
              });
    },
    //Ver los prestamos
    VER_prestamos:function(conexion,funcion) {
       var consulta = `
        SELECT 
            p.id as prestamo_id,
            p.fecha_prestamo,
            p.estado as estado_prestamo,
            e.nie,
            e.nombre as nombre_estudiante,
            e.especialidad,
            h.nombre as nombre_herramienta,
            h.estado as estado_herramienta,
            t.nombre as tipo_herramienta
        FROM prestamos p
        INNER JOIN perfil_estudiante e ON p.perfil_estudiante_id = e.id
        INNER JOIN herramientas h ON p.herramienta_id = h.id
        INNER JOIN tipo t ON h.id_tipo = t.id_tipo
        `
        conexion.query(consulta,funcion);
    },
    //devolver
    DEVOLVER_herramienta:function(conexion,prestamo,funcion) {
        conexion.query("INSERT INTO devolucion (prestamo_id,observaciones,estado_entrega) VALUES (?,?,?)",[prestamo,"pendiente...","en espera .."],funcion);
    },
    //ACTUALIZAR DEVOLUCION
    ACTUALIZAR_devolucion:function(conexion,observacion,id,funcion){
        const query="UPDATE devolucion SET observaciones=?, estado_entrega='entregado' WHERE prestamo_id=? AND estado_entrega = 'en espera'";
        conexion.query(query,[observacion,id],funcion);
    },
    //buscar devolucion por el id del prestamo
    
    //Ver las devoluciones
    VER_devoluciones:function(conexion,funcion){
        var consulta = `
        SELECT 
        pe.nie,
        pe.nombre AS nombre_estudiante,
        h.nombre AS nombre_herramienta,
        p.fecha_prestamo,
        d.fecha_devolucion,
        d.prestamo_id,
        d.estado_entrega,
        d.observaciones
        FROM perfil_estudiante pe
        INNER JOIN prestamos p ON pe.id = p.perfil_estudiante_id
        INNER JOIN herramientas h ON h.id = p.herramienta_id
        LEFT JOIN devolucion d ON p.id = d.prestamo_id;
        `
        conexion.query(consulta,funcion)
    },
    ActualizarEstud:function(conexion,Datos,funcion){
        const query = "UPDATE estudiantes SET nie=?, nombre=?, apellido=?, correo=? WHERE id=?";
        conexion.query(query, [Datos.Nie,Datos.Estudiant,Datos.Apellido,Datos.Gmail, Datos.id],funcion);
    },
    borrarESTU:function(conexion,id,funcion){
        conexion.query("DELETE FROM estudiantes WHERE id =?",[id],funcion)
    },
    Actualizarher: function (conexion,datos,funcion) {
        const query = "UPDATE herramientas SET nombre=?, estado=? WHERE id=? ";
        conexion.query(query, [datos.Nombre, datos.Estado, datos.id], funcion);
    },


}
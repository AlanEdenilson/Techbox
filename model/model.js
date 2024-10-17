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
    INSERTAR_prestamo:function(conexion,estudiante,herramienta,estado, funcion) {
        conexion.query("INSERT INTO prestamos (perfil_estudiante_id, herramienta_id, estado) VALUES (?,?,?)",[estudiante,herramienta,estado],funcion);
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
    }

}
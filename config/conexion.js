var mysql = require("mysql");
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'taller_mecanico'
}
);
con.connect(
    (err)=>{
        if (!err) {
            console.log('conexion establecida');
        }else{
            console.log('error de conexion');
        }
    }
);

module.exports = con;

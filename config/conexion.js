var mysql = require("mysql");
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tecbox'
}
);
con.connect(
    (err)=>{
        if (!err) {
            console.log('Conexion exitosa');
        }else{
            console.log('error de conexion');
        }
    }
);

module.exports = con;

var conexion = require('../JS/conexion.js');

function validar() {
    var usuario = document.getElementById("input_ID").value;
    input_ID.value = "";
    var password = document.getElementById("input_Password").value;
    input_Password.value = "";
    $query = `select*from usuarios`;
    conexion.query($query, function(err, rows) {
        long = rows.length;
        for (i = 0; i < long; i++) {
            console.log(rows[i]);
            if (usuario == rows[i].id_usuario && password == rows[i].password_usuario) {
                console.log("Bienvenido")
                switch (rows[i].cargo_usuario) {
                    case 'Directivo':
                        localStorage.setItem("NU",i);
                        window.location.href = "Director.html";
                        break;
                    case 'Doctor':
                        localStorage.setItem("NU",i);
                        window.location.href = "Doctor.html";
                        break;
                    case 'Secretario':
                        localStorage.setItem("NU",i);
                        window.location.href = "Secretaria.html";
                        break;
                    case 'Encargado Bodega':
                        localStorage.setItem("NU",i);
                        window.location.href = "EncargadoBodega.html";
                }
            }else{
                console.log("Usuario invalido")
            }
        }
    });
}
const USUARIOS = ["pepe", "paco", "juan", "benito", "manuel"];
const CONTRASENAS = ["12345", "23456", "09876", "67890", "66666"];

    function existeLogin(login) {

        let resultado = false;
        for (i = 0; i < USUARIOS.length; i++) {

            if (login == USUARIOS[i]) {

                resultado = true;
            }
        }

        return resultado;
    }

        function passwordCorrecto(password, login) {

            let resultado = false;

            for (var i = 0; i < USUARIOS.length, i++;) {

                if (password == USUARIOS[i] == login == USUARIOS[i]) {

                    resultado = true;
                }
            }

            return resultado;
        }

        function iniciarSesion() {

            for (var j = 0; j < USUARIOS.length; j++) {
                
                var login = prompt("Usuario");
                var password = prompt("Contraseña");
            
                if (passwordCorrecto(password, login) == true) {

                    window.alert("Inicio de sesión completado");
                    break;
                } else if (existeLogin(login) == false) {

                    window.alert("Error. Usuario inexistente");
                } else if (existeLogin(login) == true && passwordCorrecto(login, password) == false) {

                    window.alert("Error. Contraseña incorrecta");
                } else {

                    window.alert("Error.")
                }
            }
        }

iniciarSesion();
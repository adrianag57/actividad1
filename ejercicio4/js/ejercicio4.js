var operando1 = parseInt(prompt("Escriba un operando"));
var operando2 = parseInt(prompt("Esciba otro operando"));

var operador = prompt("Introduce un operador");

    function validaOperador() {

        if (operador == "+" || operador == "-" || operador == "*" || operador == "/" || operador == "FIN") {
            
            if (operador == "/") {
                while (!divisionValida(operando2)) operando2 = prompt("Error en la división. Introduce otro operando");
            }
            return true;
        } else {

            operador = prompt("Error. Introduce un operador");
        }
    }

    function divisionValida() {

        let resultado = true;
        if (operando2 === null) {

            resultado = false;
        } else {

            return resultado;
        }

    }

    while (operador != "FIN") {

        validaOperador();

        switch (operador) {
            case "+":
                resultado = operando1 + operando2;
                operando1 = resultado;
                console.log(resultado);
                operador = prompt("Introduce un nuevo operador");
                break;
    
            case "-":

                resultado = operando1 - operando2;
                operando1 = resultado;
                console.log(resultado);
                operador = prompt("Introduce un nuevo operador");
                break;
    
            case "*":

                resultado = operando1 * operando2;
                operando1 = resultado;
                console.log(resultado);
                operador = prompt("Introduce un nuevo operador");
                break;
    
            case "/":

                if (divisionValida()) {
                    resultado = operando1 / operando2;
                    operando1 = resultado;
                    console.log(resultado);
                    operador = prompt("Introduce un nuevo operador");
                }
        }
    }
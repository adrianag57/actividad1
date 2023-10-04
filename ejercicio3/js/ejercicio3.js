const MAXIMO = 100; 
const MINIMO = 1; 
const DIVISORES = [2,3,5,10];

//pedimos un numero entero positivo
var num = prompt("Introduce un número entero positivo entre 0 y 100");

    while (isNaN(num) || num > MAXIMO || num < MINIMO) {

        //creamos un aviso en la consola de que el número no está entre 0 y 100
        console.log("El número no es entero positivo");
        //ponemos en pantalla que hay un error y debes introducir otro numero
        num = prompt("Error. Introduce un número entero positivo");
    }

    function esDivisible(num, divisor) {

        if(num % divisor == 0) {

            return true;
        } else {
            
            return false;
        }
    }

var division = [];

    for(var i = 0; i < DIVISORES.length; i++) {

        division += ("¿Es " + num + " divisible entre " + DIVISORES[i] + "? " + esDivisible(num, DIVISORES[i]) + "\n");
    }

window.alert(division);
const MAXIMO = 100; 
const MINIMO = 1; 
const DIVISORES = [2,3,5,10];

var num = prompt("Introduce un número entre 1 y 100");

    if(parseInt(num) > MAXIMO && parseInt(num) < MINIMO) {

        //creamos un aviso en la consola de que el número no está entre 0 y 100
        console.log("El número no es entero positivo");
        //ponemos en pantalla que hay un error y debes introducir otro numero
        num = parseInt(prompt("Error. Introduce un número entero positivo"));
    }
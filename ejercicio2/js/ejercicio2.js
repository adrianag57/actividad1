//creamos el array numeros
var numeros = [];

    //creamos un for que pida 4 numeros enteros positivos
    for (let i = 0; i < 4; i++) {

        //pedimos un numero entero positivo
        let num = prompt("Introduce un número entero positivo");

        /*
            creamos un if que nos avise si el número que introducimos no es entero positivo
            y que nos meta el número en el array si lo es
        */
        if(parseInt(num) != num || num < 0) {

            //creamos un aviso en la consola de que el número no es entero positivo
            console.log("El número no es entero positivo");
            //ponemos en pantalla que hay un error y debes introducir otro numero
            num = parseInt(prompt("Error. Introduce un número entero positivo"));
        }
        else {

            numeros[i] = num;
        }
        
    }

    //creames la funcion ordeCreciente
    function ordenCreciente() {

        let resultado = false;

        //hacemos un if para que si los numeros van en orden creciente nos devuelva true
        if (numeros[0] < numeros[1] && numeros[1] < numeros[2] && numeros[2] < numeros[3]) {

            resultado = true;
        }
        
        return resultado
    }

alert(ordenCreciente());
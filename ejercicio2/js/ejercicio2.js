//creamos el array numeros
var numeros = [];

    //creamos un for que pida 4 numeros enteros positivos
    for (var i = 0; i < 4; i++) {

        //pedimos un numero entero positivo
        var num = prompt("Introduce un número entero positivo");

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

    function ordenCreciente() {


    }
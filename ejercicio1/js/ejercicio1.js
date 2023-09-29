var num = prompt("Introduce un número");

    function esEntero() {

        var result = false;

        if (parseInt(num) == num) {

            result = true;
            alert ("El número es entero");
        }
        else {

            console.error("El número no es entero");
        }

        return result;
    }

    function esPositivo() {

        var result = false;

        if (parseInt(num) == num && num > 0) {

            alert ("El número es positivo");
        }
    }

    function sumatorio() {

        var sumatorio = 0;

        for (var i = 0; i < num; i++) {

            sumatorio += i;
        }

        return sumatorio;
    }

esEntero();
esPositivo();
console.log(sumatorio());
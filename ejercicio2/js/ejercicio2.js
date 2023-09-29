var numeros = [];

    function ordenCreciente() {

        for(var i = 0; i < 4; i++) {

            var num = prompt("Introduce un número");

            if (parseInt(num) == num) {

                numeros += num;
            }
            else {
    
                console.error("El número no es entero"); 
            }
        }
    }

ordenCreciente();
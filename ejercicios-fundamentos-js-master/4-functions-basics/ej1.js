// crea la función duplicaNumero
// debe recibir un tipo number y devolver el doble del valor recibido
function duplicaNumero(x) {
    if (typeof x === 'number'){
        return x * 2;
    } else {
        console.log("Debo ser ejecutada con un numero");
        return 'Debo ser ejecutada con un numero';
    }
    
}
// Si la función no recibe un dato tipo number debe
// devolver el string 'Debo ser ejecutada con un numero'

// Ha de pasar los test adjuntados.



let test = require('../test.js');

//  test(functionTotest, [argumento1,argumento2, etc..],  expectedOutput) 
// comprueba si: duplicaNumero(1) === 2 
// console.log(duplicaNumero(5) === 10);

//-------------------------------------SINTAXIS-------------------------------------------
// ¿funcion test? (llamada a la función , [Valor inicial que se le pasa ], retorno que debe devolver );
test(duplicaNumero, [1], 2);
test(duplicaNumero, [0], 0);
test(duplicaNumero, [-2], -4);
test(duplicaNumero, ['hola'], 'Debo ser ejecutada con un numero');

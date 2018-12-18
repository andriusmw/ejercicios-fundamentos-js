// crea la función ultimoCaracter
// debe recibir un tipo string y devolver un string con el último carácter

// Si la función no recibe un dato tipo string debe
// devolver el string 'Debo ser ejecutada con un string'

// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

// Ha de pasar los test adjuntados.


    // Aquí tu código.  Desde aquí:
    function ultimoCaracter(x) {
        if (typeof x === 'string') {
            if (x.length == 0 ) {
                return 'Debo ser ejecutada con un string no vacío'

            } else {
                return x[x.length -1];
            }
        }else {
            return 'Debo ser ejecutada con un string'
        }
    }
  


    // Hasta aquí.



let test = require('../test.js');
//  test(functionTotest, [argumento1,argumento2, etc..],  expectedOutput) 
// comprueba si: ultimoCaracter('juan') === 'n'
test(ultimoCaracter, ['juan'], 'n');
test(ultimoCaracter, ['Hola'], 'a');
test(ultimoCaracter, ['Adioss  '], ' ');
test(ultimoCaracter, [''], 'Debo ser ejecutada con un string no vacío');
test(ultimoCaracter, [true], 'Debo ser ejecutada con un string');
test(ultimoCaracter, [], 'Debo ser ejecutada con un string');

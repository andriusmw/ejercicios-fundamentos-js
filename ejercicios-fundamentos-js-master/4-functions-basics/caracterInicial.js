// crea la función caracterInicial
// debe recibir un tipo string y devolver un string con el primer caracter
// Si la función no recibe un dato tipo string debe
// devolver el string 'Debo ser ejecutada con un string'
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
// Ha de pasar los test adjuntados.
// Aquí tu código.  Desde aquí:
function caracterInicial(x) {
    if (typeof x === 'string') {
        if (x.length == 0) {
            return 'Debo ser ejecutada con un string no vacío';
        }
        else {
            return x[0];
        }
    }
    else {
        return 'Debo ser ejecutada con un string';
    }
}
exports.caracterInicial = caracterInicial;

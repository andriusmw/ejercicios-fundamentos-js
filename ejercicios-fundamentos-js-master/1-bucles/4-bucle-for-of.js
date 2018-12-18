// ej 4
// crea un array con la gente mayor de 25 años.
// y muéstralo por consola.
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of

let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]

var array25Mas = [];

//crea la var persona, y recorre el array gente y evalua si la propiedad edad de cada objeto de gente es mayor a 25
//si es así hace el push en el array array25Mas.
for (var persona of gente){
    if (persona.edad > 25 ){
    array25Mas.push(persona)
    }
 
}

console.log(array25Mas)

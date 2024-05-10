/*Objetos en javaScript*/
// formas de crear objetos y cargarlos...
const persona ={
    // en los corchetes con atributos 
}
//  sintaxis con punto.
/*
persona.nombre= 'Mariano', 
persona.edad=43;
*/
// sintaxis con corchetes.
persona['nombre']='Daniel'
persona['edad']=26
// un objeto dentro de otro
persona.direccion = {}

persona.direccion.calle = 'Yatay'
persona.direccion.numero ='240'
persona.telefonos = [] // un array de telefonos, y agrego telefonos.
persona.telefonos.push('4432421')
persona.telefonos.push('2414212')

console.log(persona)
console.log(persona.nombre)
console.log(persona['telefonos'])

// borro la edad.
delete persona.edad

console.log(persona)
console.log('-------persona2------')
const persona2 = {
    nombre: 'Fede',
    edad: 43,
    direccion:{
        calle:'Culpina',
        numero: 46
    },
    telefonos: [
       '442424','4124141'
    ],
    obj1:{
        objet2:{
            objet3:{
                dato:55, 
                obj4:{
                    dato:77
                }
            }
        }
    }
}

console.log(persona2)
//funcion que permite inspeccionar objetos a profundidad
const util= require('util')

// el objeto, el primer booleano hace que devuelva el tamaño(length) del array, el numero representa
// que tan profundo en el objeto va a inspeccionar, y el otro flag representa
// si quiero con color o no el dato que necesito
console.log(util.inspect(persona2,false,4,true))

/* JSON, es una notacion de objetos en javascript*/
// si quiero un json, las claves de los objetos pasan a ser
// strings (hay que usar comillas dobles)
const persona3 = {
    "nombre": "Fede",
    "edad": 43,
    "direccion":{
        "calle":"Culpina",
        "numero": 46
    },
    "telefonos": [
       "442424","4124141"
    ]
}

console.log(persona3)
// serializar objetos(convertirlos a string)
// convierte un objeto a un string
// puedo sustituir el null por unos corchetes(array) y dentro de los mismos
// los datos (campos,claves) que quiero ver
// el numero hace que lo vea en lineas
let j2s = JSON.stringify(persona2, null, 4)
console.log(j2s)
// deserrealizar(?)
let string2j= JSON.parse(j2s)
console.log(string2j)

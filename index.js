const maxNumber = require("./function/maxNumber")
const sumNumbers = require("./function/sumNumbers")
const stringInitial= require("./function/stringInitial")
const oneProperty = require("./function/oneProperty")
const primaryStudents = require("./function/primaryStudents")

//1
maxNumber([49,23,42,12,57,21])

//2
sumNumbers([4,4,6])

//3
stringInitial("nicolas adrian alcaraz")

//4
oneProperty([ { name: "Kuka", edad:3 }, { name: "Canela", edad:4 } ], "name")

//5
const estudiantes = [ { nombre: "Juan", edad: 17, curso: "Primero" }, { nombre: "Ana", edad: 18, curso: "Segundo" }, { nombre: "Carlos", edad: 16, curso: "Primero" }, 
{ nombre: "María", edad: 19, curso: "Tercero" }, ]
primaryStudents(estudiantes)

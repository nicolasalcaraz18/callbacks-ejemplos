const primaryStudents = (array) => {
    // filtra a los estudiantes de primero.
    const students = array.filter(student =>student.curso==="Primero")
    // crea un array con los nombres de los estudiantes
    const studentsName= students.map(student=>student.nombre)
    // ordenar alfabeticamente
    studentsName.sort() // no hace falta una variable.
    console.log(studentsName)
}

module.exports=primaryStudents
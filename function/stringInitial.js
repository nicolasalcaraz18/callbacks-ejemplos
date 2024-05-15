function stringInitial(cadena){
    //split divide la cadena en palabras
    const palabras = cadena.split(" ")
    // Crear un array para almacenar las iniciales
    const iniciales = palabras.map(palabra => palabra.charAt(0))
    // conectar las iniciales en una sola cadena
    const inicalesString= iniciales.join(".")
    console.log(inicalesString.toUpperCase())

    //const inicialesDef = cadena.splir(" ").map(val =>val[0]).join(".").toUpperCase()
    // en una linea. 
}

module.exports = stringInitial;
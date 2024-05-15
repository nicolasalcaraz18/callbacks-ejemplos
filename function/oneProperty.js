function oneProperty(array,str){
    // map() se utiliza para iterar sobre cada elemento del array y devolver un nuevo array con resultados
    // de aplicar una funcion a cada elemento.
    /*
        (elemento) => es una funcion flecha(arrow function) que se pasa como argumento al metodo map.
        para cada elemento del array, esta funcion se ejecutara y elelemento acutal se pasara como argumento a esta funcion

    */
    //const propiedad = array.map((elemento)=>({[str]:elemento[str]}))
    // otra manera
    const property=[]
    const obj = {}
    array.forEach((element)=>{
        obj[str] = element[str]
        property.push(obj)
    })
    console.log(property)
}

module.exports = oneProperty
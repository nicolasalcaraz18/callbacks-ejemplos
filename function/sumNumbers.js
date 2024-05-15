function sumNumbers(array){
    const suma = array.reduce((acumulador,value) => acumulador +=value)
    console.log("Suma total = " + suma)
}

module.exports=sumNumbers
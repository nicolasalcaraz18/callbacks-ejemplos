/*function mostrar(params){
    console.log(params)
}*/

const  mostrar = params => console.log(params)
mostrar(45996)

const saludar = nombre => console.log("Hola " + nombre)
//saludar()
// Una funcion que es pasada a otra funcion es un callback
const ejecutar = (fn,nombre) => fn(nombre)
ejecutar(saludar, "nico")

ejecutar(nombre => {
    console.log("Hola" + nombre)
}, " Pedro")

// CALLBACKS

const ff = f => `${f.getDate()}-${f.getMonth()}-${f.getFullYear()}`
//console.log(ff(new Date()))

const escribirArchivo = (ruta,datos,cb)=>{
    const datoFecha= ff(new Date())
    cb(datoFecha," ok log!")
}

const loguear=(fecha,mensaje) => console.log(fecha + " " + mensaje)
escribirArchivo("/ruta/al/archivo", "datos", loguear)

escribirArchivo("/ruta/al/archivo", "datos", (fecha,mensaje)=>{
    console.log("Log: " + fecha + " " + mensaje)
})

const sumar = (a,b,cb) => {
    if(typeof a == "number" && typeof b =="number"){
        cb(null,a+b)
    }else{
        cb("Error de tipo de dato.")
    }
    
}

sumar(4,5,(error,suma)=>{
    if(error)console.log("ERROR!! " + error)
    console.log(suma)
})



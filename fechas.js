//*! Crea un archivo llamado fechas.js que contenga las siguientes líneas

//*! - La fecha de hoy

//*! - La fecha de tu nacimiento

//*! - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

//*! - Una variable que contenga el día de tu nacimiento

//*! - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

//*! - Una variable que contenga el año de tu nacimiento (con 4 dígitos)


let fechaHoy = new Date()

// let nacimiento = new Date(2000, 4 , 28 , 14, 0 , 15, 10)

let nacimiento = new Date("May 28, 2000 14:15:00")

let cualEsMayor = fechaHoy.getTime() > nacimiento.getTime() 

let diaNacimiento = nacimiento.getDate()

let mesNacimiento = nacimiento.getMonth()

let anioNacimiento = nacimiento.getFullYear()

// /Comentario de linea
// Ejercicio 6 Java Script
// Autor: Alfonso lara
// Versión: 1.0
// -----------------------------------------------------------------------------
// Imput
let precio =prompt("Introduce precio");
const IVA = 1.21
let result;
// Proceso y calculo
function calcIva(precioP){
    result= precioP*IVA;
}
calcIva(precio);
// Output
console.log(result);

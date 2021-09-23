//Comentario de linea

// Autor: Alfonso lara
// Versión: 1.0
// -----------------------------------------------------------------------------
// // Imput
// var valorA=45;
// var valorB=15;
// var suma;
// // Proceso y calculo

// suma= valorA + valorB;
// resta= valorB - valorB;
// multip= valorA * valorB*8;

// output

// // EJERCICIO 1
// console.log(suma);
// if(suma <= 60){
//     console.log("El resultado es menor de 60")
// }
// else{
//     console.log("El resultado es mayor de 60")
// }
// console.log(suma);

// for(let i =0; i <=10; i++){
//     let tabla = i + "x2 =" +i*2 ;
//     console.log(tabla);
// }
// alert("Funciona!!!!")

let result;

function suma(num1,num2,num3){
    num1 + num2 + num3;
};

// EJECUCION
suma(4,2,2);
console.log(4,4,2);

// ---------------------------

// function SumaTres{num1,num2,num3}{
//     return num1+num2+num3;
// }

var SumaTres = function (num1,num2,num3){
    return num1 +num2 +num3;
}
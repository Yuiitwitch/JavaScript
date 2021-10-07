//Calculadora inversa

let operando1 = prompt("indicame el primero numero");
let operando2 = prompt("indicame el segundo numero");
let signoAritmetico = prompt("Dime que signo aritmetico vas a utilizar : + , - , * , /");
let resultado = "";

switch (signoAritmetico) {
    case "+":
        resultado = operando1 + operando2;
        
        break;
    case "-":
        resultado = operando1 - operando2;
        
        break;
    case "*":
        resultado = operando1 * operando2;

        break;
    case "/":
        resultado = operando1 / operando2;
        break;
}
console.log(resultado)

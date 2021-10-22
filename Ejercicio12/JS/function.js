let password = "hola";
let pregunta = "";

let intentos = 1;

do {
    pregunta = prompt("Introduca contraseña");
    intentos++;
} while ((password != pregunta) && (intentos <= 3));

if (password==pregunta) {
    alert("enhorabuena");
}else{
    alert("Has agotado el numero de intentos");
}
let password = "hola";
let pregunta = "";

let intentos = 0;

do {
    pregunta = prompt("Introduca contraseña");
    console.log();
    (intentos++);
} while ((password != pregunta) && (intentos <= 3));

alert("enhorabuena")
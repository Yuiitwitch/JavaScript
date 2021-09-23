let dia;


dia = prompt("Introduce dia de la semana");

switch (dia) {
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Jueves":
    case "Viernes":
        alert("Dia Loboral");

        break;
    case "Sabado":
    case "Domingo":
        alert("Dia no laborable");
    default:
        break;
}

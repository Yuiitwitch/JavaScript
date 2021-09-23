i=0;
let numVentas=prompt("Cuantas ventas hiciste?");
let sumaVentas=0;

    
for (let i = 0; i<numVentas; i++) {
    let venta=prompt("Introduce el precio de la venta");
    sumaVentas=sumaVentas+ parseInt(venta);
}
    alert("El valor total es "+sumaVentas)


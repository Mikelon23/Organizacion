const ciudadDestino = "bogota";
const ciudadDisponible = new Array("bogota", "medellin", "cali", "barranquilla", "cartagena");
//console.log(ciudadDisponible.indexOf(ciudadDestino));
console.log(`verificando si la ciudad ${ciudadDestino} esta disponible...`);
if (ciudadDisponible.indexOf(ciudadDestino)>=0) {
    console.log('Pasajes disponibles para venta');
}else{
    console.log('ciudad no disponible');
}

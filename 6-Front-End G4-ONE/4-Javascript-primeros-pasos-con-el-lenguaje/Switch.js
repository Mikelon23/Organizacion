const ciudadDestino = "medellin";
const ciudadDisponible = new Array("bogota", "medellin", "cali");
let valorpasaje = 0;
//console.log(ciudadDisponible.indexOf(ciudadDestino));
console.log(`verificando si la ciudad ${ciudadDestino} esta disponible...`);
if (ciudadDisponible.indexOf(ciudadDestino)> -1) {
/*    CONDICION IF ANIDADA
if (ciudadDestino == "bogota") {
        valorpasaje = 50000;
    }else if (ciudadDestino == "medellin") {
        valorpasaje = 35000;
    }else if (ciudadDestino == "cali") {
        valorpasaje = 30000;} */
//condicion switch
switch (ciudadDestino) {
    case "bogota":
        valorpasaje = 50000;
        break;
    case "medellin":
        valorpasaje = 35000;
        break;
    case "cali":
        valorpasaje = 30000;
        break;
    default:
        valorpasaje = 0;
        break;
}
        console.log(`El valor del pasaje es de ${valorpasaje}`);
}
else{
    console.log('ciudad no disponible');
}
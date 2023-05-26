const ciudadDisponible = new Array("bogota", "medellin", "cali");
const precioPasaje = new Array(5300, 350, 300);
const presupuesto = 500;
//LISTA DE MAPAS
const presupueso = 300;

const datos = [
    {
    'ciudad': "bogota",
    'precio': 5300
}, 
{
    'ciudad': "medellin",
    'precio': 350
}, 
{
    'ciudad': "cali",
    'precio': 300
 }
];
//FOR valor inicial para un valor final
let ciudadelegida = '';
for (let i = 0; i < datos.length; i++) {
    if (datos[i].precio < presupuesto){
        ciudadelegida = datos[i].ciudad;
    }
}
if (ciudadelegida == '') {
    console.log("No hay pasajes disponibles");
}else{
    console.log('Puedes comparar pasajes para: ' + ciudadelegida);
}

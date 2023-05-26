const ciudadDisponible = new Array("bogota", "medellin", "cali");
const precioPasaje = new Array(5300, 350, 300);
const presupuesto = 500;

let i = 0;
/*while (precioPasaje[i] > presupuesto) {
    i++;    
}
console.log(`puedes comprar pasajaes a ${ciudadDisponible[i]}`);
*/
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
/*
while (i < datos.length && datos[i].precio > presupueso) {
    i++;    
}
if (i == datos.length) {
    console.log("No hay pasajes disponibles");
}else{
    console.log('Puedes comparar pasajes para: ' + datos[i].ciudad);
}
 */
//DO WHILE

/*let presupu = 930;
let ciudadelegida = '';
do {
    if (datos[i].precio < presupu){
        ciudadelegida = datos[i].ciudad;
        break;
    }
    i++;
}
while (i < datos.length && ciudadelegida == '');
if (ciudadelegida == '') {
    console.log("No hay pasajes disponibles");
}else{
    console.log('Puedes comparar pasajes para: ' + ciudadelegida);
}*/

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

//Trabajo de persistencia entregable

import * as fs from 'node:fs';

const productos: string[] = ["Leche", "Galletitas", "Harina","Queso"];
let contenidoProductos:string="";

const precios: number[] = [525, 3500, 400, 1999];
let contenidoPrecios:string="";


for (let i:number=0 ; i < productos.length; i++){
    contenidoProductos += `${productos[i]} `
}

console.log(contenidoProductos);

for (let j:number=0 ; j < precios.length; j++){
    contenidoPrecios += `${precios[j]} `
}

console.log(contenidoPrecios);


//Escribo el contenido de productos en el archivo productos.txt
fs.writeFileSync('./productos.txt', contenidoProductos);
console.log("Finalizada la escritura de los productos");

//Escribo el contenido de los precios en el archivo precios.txt
fs.writeFileSync('./precios.txt', contenidoPrecios);
console.log("Finalizada la escritura de los precios");

//Traigo los datos del archivo de productos
const datosLeidosProductos:string = fs.readFileSync('./productos.txt',"utf8");
const datosProductosSinEspacios:string=datosLeidosProductos.trim(); 

//convierto a la variable datosProductosSinEspacios en un array tomando el separador como un espacio
const arrayProductos = datosProductosSinEspacios.split(" ");
console.log(arrayProductos);


//Traigo los datos del archivo de precios
const datosLeidosPrecios:string= fs.readFileSync('./precios.txt',"utf8");
const datosPreciosSinEspacios:string=datosLeidosPrecios.trim(); 

//convierto a la variable datosProductosSinEspacios en un array tomando el separador como un espacio
const arrayPrecios = datosPreciosSinEspacios.split(" ");
console.log(arrayPrecios);


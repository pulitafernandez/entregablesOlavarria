"use strict";
//Trabajo de persistencia entregable
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
var contenidoProductos = "";
var precios = [525, 3500, 400, 1999];
var contenidoPrecios = "";
for (var i = 0; i < productos.length; i++) {
    contenidoProductos += "".concat(productos[i], " ");
}
console.log(contenidoProductos);
for (var j = 0; j < precios.length; j++) {
    contenidoPrecios += "".concat(precios[j], " ");
}
console.log(contenidoPrecios);
//Escribo el contenido de productos en el archivo productos.txt
fs.writeFileSync('./productos.txt', contenidoProductos);
console.log("Finalizada la escritura de los productos");
//Escribo el contenido de los precios en el archivo precios.txt
fs.writeFileSync('./precios.txt', contenidoPrecios);
console.log("Finalizada la escritura de los precios");
//Traigo los datos del archivo de productos
var datosLeidosProductos = fs.readFileSync('./productos.txt', "utf8");
var datosProductosSinEspacios = datosLeidosProductos.trim();
//convierto a la variable datosProductosSinEspacios en un array tomando el separador como un espacio
var arrayProductos = datosProductosSinEspacios.split(" ");
console.log(arrayProductos);
//Traigo los datos del archivo de precios
var datosLeidosPrecios = fs.readFileSync('./precios.txt', "utf8");
var datosPreciosSinEspacios = datosLeidosPrecios.trim();
//convierto a la variable datosProductosSinEspacios en un array tomando el separador como un espacio
var arrayPrecios = datosPreciosSinEspacios.split(" ");
console.log(arrayPrecios);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadena = 'Juan Perez';
var inicialNombre = cadena[0];
var inicialApellido = cadena[5];
console.log("Posicion 0 " + inicialNombre);
console.log("Posicion 5 " + inicialApellido);
// Longitud: length
var arreglo = ["a", "b", "c"];
console.log(arreglo.length);
//indexOf retorna la posicion donde empieza lo que estoy buscando
//textoBuscado
var arreglo2 = "Tengo que hacer muchos ejercicios";
console.log(arreglo2.indexOf("hacer"));
//Aca devuelve -1 porque no encuentra la palabra hacer a partir de la posicion 20
console.log(arreglo2.indexOf("hacer", 20));
//lastIndexOff: retorna la ultima ocurrencia que este dentro de la cadena
var arreglo3 = "Tengo que hacer y hacer y hacer muchos ejercicios";
console.log(arreglo3.lastIndexOf("hacer"));
//subString(inicio,final): retorna la porcion de cadena que hay entre inicio y fin
//substr(inicio, largo): retorna la porcion de candena, desde el inicio y el largo que quiero
console.log(arreglo3.substring(10, 15));
console.log(arreglo3.substr(10, 21));
//texo combinado. Pasar todo a minuscula y el otro pasar otro a mayuscula
var textoCombinado = "AaAaA";
console.log(textoCombinado.toLowerCase());
console.log(textoCombinado.toUpperCase());
//toString() devuelve el valor de una variable a string
var numero = 234;
console.log(numero.toString());
var numeroString = "234";
console.log(parseInt(numeroString));
//typeOff me da el tipo de la variable
var numeroNumber = parseInt(numeroString);
console.log(typeof numeroString);
var numDecimalString = "3.20";
console.log(parseFloat(numDecimalString));
//split (a)
//La función Split() se utiliza para dividir una cadena en un array de subcadenas basándose en un separador especificado.
//Dentro de la funcion split paso por lo que quiero dividir
var arrayDeNumeros = numeroString.split("");
console.log(arrayDeNumeros);
var readlineSync = require("readline-sync");
var palabra = readlineSync.question("Ingrese el valor de la base: ");
var cantidadLetras = palabra.length;
var arregloLetras = palabra.split("");
console.log(cantidadLetras);
console.log(arregloLetras);
function invertirVector(v, cantidad) {
    var indiceIzq = 0;
    var indiceDer = cantidad - 1;
    var aux;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
    return v;
}
var cant = 3;
var v = ["puli", "fernandez", "maceo"];
invertirVector(v, cant);
console.log(v);

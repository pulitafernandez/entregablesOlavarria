"use strict";
//Trabajo de potencias
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese el valor de la base: ");
var exponente = readlineSync.questionInt("Ingrese el valor del exponente: ");
var resultado = 0;
if (exponente < 0) {
    console.log("El exponente debe ser mayor o igual a cero");
}
else {
    if (exponente == 0) {
        resultado = 1;
        console.log("Todo numero de exponente cero es igual a: " + resultado);
    }
    else {
        buscarPotencia(base, exponente);
    }
}
function buscarPotencia(base, exponente) {
    var resultado = base;
    var i;
    for (i = 1; i < exponente; i++) {
        resultado = resultado * base;
        //console.log(resultado);
    }
    console.log("La potencia es: " + resultado);
    return resultado;
}

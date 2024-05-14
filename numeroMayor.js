//Trabajo entregable nro. 3
//Arreglo de numeros
var arregloNumeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var indice;
var resultado = arregloNumeros[0];
for (indice = 0; indice < 11; indice++) {
    if (arregloNumeros[indice - 1] < arregloNumeros[indice]) {
        resultado = arregloNumeros[indice];
    }
}
console.log("El número mas grande del arreglo es: " + resultado);
esParImpar(resultado);
function esParImpar(numeroIngresado) {
    var resto = numeroIngresado % 2;
    if (resto == 0) {
        console.log("El número es PAR");
    }
    else {
        console.log("El número es IMPAR");
    }
}

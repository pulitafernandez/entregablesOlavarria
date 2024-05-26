//Ejercicio obligatorio de ordenamiento -  Metodo Burbuja
//el valor cantidad es la longitud del arreglo y el Num azar es el maximo numero que puede tomar. si pongo 100 puede ir de 0 a 100
function cargarArreglo(arreglo, cantidad, numAzar) {
    var i;
    for (i = 0; i < cantidad; i++) {
        arreglo[i] = azar(numAzar);
    }
}
function azar(numAzar) {
    return Math.floor(Math.random() * (numAzar));
}
var arregloA = [];
cargarArreglo(arregloA, 5, 10);
console.log(arregloA);
//Ahora ordeno el arregloA con el metodo burbuja descendente
function ordenaBurbuja(arreglo) {
    var auxiliar;
    for (var i = 0; i < arreglo.length; i++) {
        for (var j = 0; j < arreglo.length - i - 1; j++) {
            if (arreglo[j] < arreglo[j + 1]) {
                auxiliar = arreglo[j + 1];
                arreglo[j + 1] = arreglo[j];
                arreglo[j] = auxiliar;
            }
        }
    }
    return arreglo;
}
var arregloOrdenado = ordenaBurbuja(arregloA);
console.log("El arreglo ordenado es: " + arregloOrdenado);
console.log(arregloOrdenado);

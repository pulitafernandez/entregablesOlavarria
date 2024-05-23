let cadena : string = 'Juan Perez';

let inicialNombre:string = cadena[0];
let inicialApellido:string = cadena[5];

console.log("Posicion 0 " + inicialNombre);
console.log("Posicion 5 " + inicialApellido);

// Longitud: length

let arreglo: string [] = ["a", "b", "c"];
console.log(arreglo.length);

//indexOf retorna la posicion donde empieza lo que estoy buscando
//textoBuscado

let arreglo2:string ="Tengo que hacer muchos ejercicios";
console.log(arreglo2.indexOf("hacer"));

//Aca devuelve -1 porque no encuentra la palabra hacer a partir de la posicion 20
console.log(arreglo2.indexOf("hacer",20));

//lastIndexOff: retorna la ultima ocurrencia que este dentro de la cadena

let arreglo3:string ="Tengo que hacer y hacer y hacer muchos ejercicios";
console.log(arreglo3.lastIndexOf("hacer"));

//subString(inicio,final): retorna la porcion de cadena que hay entre inicio y fin
//substr(inicio, largo): retorna la porcion de candena, desde el inicio y el largo que quiero

console.log(arreglo3.substring(10,15));

console.log(arreglo3.substr(10,21));

//texo combinado. Pasar todo a minuscula y el otro pasar otro a mayuscula
let textoCombinado:string="AaAaA";
console.log(textoCombinado.toLowerCase());
console.log(textoCombinado.toUpperCase());

//toString() devuelve el valor de una variable a string
let numero:number=234;
console.log(numero.toString());

let numeroString : string ="234";
console.log(parseInt(numeroString));

//typeOff me da el tipo de la variable
let numeroNumber : number=parseInt(numeroString);
console.log(typeof numeroString);

let numDecimalString : string= "3.20";
console.log(parseFloat(numDecimalString));

//split (a)
//La función Split() se utiliza para dividir una cadena en un array de subcadenas basándose en un separador especificado.
//Dentro de la funcion split paso por lo que quiero dividir
let arrayDeNumeros : string [] = numeroString.split("");
console.log(arrayDeNumeros);

import * as readlineSync from 'readline-sync';

let palabra: string= readlineSync.question("Ingrese el valor de la base: ");
let cantidadLetras: number= palabra.length;
let arregloLetras:string [] = palabra.split("");

console.log(cantidadLetras);
console.log(arregloLetras);

function invertirVector(v: string[], cantidad: number) {
    let indiceIzq: number = 0;
    let indiceDer: number = cantidad - 1;
    let aux: string;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
    return v;
}

let cant:number=3;
let v: string[]=["puli", "fernandez", "maceo"];
invertirVector(v, cant);
console.log(v);










//Encuentra el promedio de una lista de números.

let numeros1 : number[] = [1,5,4,6,8,7,6];
let numeros2 : number[] = [9,5,8,6,11,2,1];
let promedio : number;

function sumarElementos(v: number []){
    let indice: number;
    let suma:number=0;
    for(indice=0; indice < v.length; indice++){
        suma = suma + v[indice];
    }
    return suma;
}

let suma: number = sumarElementos(numeros1);
promedio = suma / numeros1.length;

console.log("La suma es: " + suma);

console.log("El promedio del arreglo es: " + promedio);

//Encuentra el número más grande en una lista

function elementoMasGrande (v: number []){
    let indice: number;
    let mayor :number=v[0];
    for(indice=0; indice < v.length; indice++){
        if(v[indice] < v[indice+1]){
        mayor = v[indice+1];
        }
    }
    return mayor;
}

let elementoMayor : number;

elementoMayor = elementoMasGrande(numeros1);

console.log("El elemento mayor del arreglo 1 es: " + elementoMayor);

//Encuentra el número más pequeño en una lista.

function elementoMasPequeño(v: number[]){
    let i:number;
    let menor: number=v[0];
    for(i=0; i < v.length; i++){
        if(menor > v[i+1]){
            menor = v[i+1];
            console.log(menor);
        }
    }
    return menor;
}

let elementoMenor : number;

elementoMenor = elementoMasPequeño(numeros1);

console.log("El elemento menor del arreglo 1 es: " + elementoMenor);


//Calcula la suma de dos arreglos elemento por elemento

function sumarArreglos (arreglo1: number[], arreglo2: number[]){
    let i:number;
    let arregloSuma:number[]= new Array();
    for(i=0; i < arreglo1.length; i++){
        arregloSuma[i]=arreglo1[i]+arreglo2[i];
    }
    return arregloSuma;
}

let arregloResultado:number[] = new Array();
arregloResultado = sumarArreglos(numeros1, numeros2);
console.log("La arreglo resultado con la suma de los dos arreglos es: " + arregloResultado);

//Encuentra el número de elementos pares en una lista

let i:number;
for(i=0; i < numeros1.length; i++){
    console.log("El numero " + numeros1[i]);
    esParImpar(numeros1[i]);
}

function esParImpar (numeroIngresado: number): void{
	
    let resto:number=numeroIngresado%2;
	
    if (resto ==0 ) {
        console.log("es PAR");
		}else {
        console.log("es IMPAR");
        
    }

}

//Encuentra el número de veces que aparece un elemento en una lista.

let numeroBuscado: number = 5;
function cantidadVecesAparece(arreglo1: number[], numeroBuscado:number){
    let i:number;
    let cant:number=0;
    for(i=0; i < arreglo1.length; i++){
        if(arreglo1[i]==numeroBuscado){
            cant=cant+1;
        }
    }
    console.log("La cantidad de veces que aparece el numero " + numeroBuscado + " es: " + cant);
}

cantidadVecesAparece(numeros1, numeroBuscado);

//Calcula el producto de todos los elementos en una lista.

function productoDeArreglo(arreglo1: number[]){
    let mult:number =1;
    for(i=0; i < arreglo1.length; i++){
        mult = mult * arreglo1[i];
    }
    return mult;
}

let producto:number= productoDeArreglo(numeros1);
console.log("La multiplicacion de los numeros del arreglo 1 es: " + producto);

//Encuentra el número más grande entre dos números.
/*
import * as readlineSync from 'readline-sync';

let numero1 = readlineSync.questionInt("Ingrese el valor de un numero: ");

let numero2 = readlineSync.questionInt("Ingrese el valor de otro numero: ");

function elMayor(num1:number, num2:number){
    if(num1>num2){
        console.log("El numero mayor es: " + num1);
    }else{
        console.log("El numero mayor es: " + num2); 
    }
}

elMayor(numero1, numero2);
*/

//Ordena una lista de números de forma ascendente

function ordenarArregloAsc(arreglo: number[]){
    let temporal: number = 0;

    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 1; j < (arreglo.length - i); j++) {
            if (arreglo[j - 1] > arreglo[j]) {
                temporal = arreglo[j - 1];
                arreglo[j - 1] = arreglo[j];
                arreglo[j] = temporal;
            }
        }
    }
    return arreglo;
}

console.log("Arreglo numeros 1 ordenado de forma ascendente: ");
console.log(ordenarArregloAsc(numeros1));


//Ordena una lista de números de forma descendente

function ordenarArregloDesc(arreglo: number[]){
    let temporal: number;
    for (i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length-i-1; j++) {
            if(arreglo[j] < arreglo[j+1]){
                temporal = arreglo[j+1];
                arreglo[j+1] = arreglo[j];
                arreglo[j] = temporal;
            }
        }
    }
    return arreglo;
}


console.log("Arreglo numeros 1 ordenado de forma descendente: ");
console.log(ordenarArregloDesc(numeros1));



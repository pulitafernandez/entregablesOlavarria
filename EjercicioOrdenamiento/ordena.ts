//Ejercicio obligatorio de ordenamiento -  Metodo Burbuja

//el valor cantidad es la longitud del arreglo y el Num azar es el maximo numero que puede tomar. si pongo 100 puede ir de 0 a 100

function cargarArreglo(arreglo:number[], cantidad:number, numAzar:number){
    let i : number;
    for (i = 0 ; i<cantidad; i++ ) {
        arreglo[i] = azar(numAzar);
    }
}

function azar(numAzar: number): number {
    return Math.floor(Math.random() * (numAzar));
}

let arregloA : number[]=[];

cargarArreglo(arregloA, 5, 10);

console.log(arregloA);

//Ahora ordeno el arregloA con el metodo burbuja descendente

function ordenaBurbuja(arreglo :number []){
    let auxiliar: number;
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length-i-1; j++) {
            if(arreglo[j] < arreglo[j+1]){
                auxiliar = arreglo[j+1];
                arreglo[j+1] = arreglo[j];
                arreglo[j] = auxiliar;
            }
        }
    }
    return arreglo;
}


let arregloOrdenado: number[]=ordenaBurbuja(arregloA);

console.log("El arreglo ordenado es: " + arregloOrdenado);

console.log(arregloOrdenado);
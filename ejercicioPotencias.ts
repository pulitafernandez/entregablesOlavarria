//Trabajo de potencias
//Vuelvo a subir al git con carpeta

import * as readlineSync from 'readline-sync';

let base = readlineSync.questionInt("Ingrese el valor de la base: ");
let exponente = readlineSync.questionInt("Ingrese el valor del exponente: ");
let resultado: number = 0;


if(exponente<0){
    console.log("El exponente debe ser mayor o igual a cero");
}else{
    if(exponente==0){
        resultado=1;
        console.log("Todo numero de exponente cero es igual a: " + resultado);
    }else{
        buscarPotencia(base, exponente);
    }
}


function buscarPotencia(base:number, exponente:number){
    let resultado:number = base;
    let i:number;
    for (i=1; i < exponente; i++){
        resultado=resultado * base;
        //console.log(resultado);
    }
    console.log("La potencia es: " + resultado);
    return resultado;
}



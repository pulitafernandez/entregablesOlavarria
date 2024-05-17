
//Trabajo entregable nro. 3
//Arreglo de numeros

let arregloNumeros: number[]= [4,7,9,3,1,45,67,23,29,78,11,16];

let indice:number;

let resultado:number=arregloNumeros[0];


for(indice=0; indice<arregloNumeros.length ; indice++){

	if(arregloNumeros[indice-1]<arregloNumeros[indice]){
		
        resultado=arregloNumeros[indice];

	}
}

console.log("El número mas grande del arreglo es: " + resultado);

esParImpar(resultado);

function esParImpar (numeroIngresado: number): void{
	
    let resto:number=numeroIngresado%2;
	
    if (resto ==0 ) {
        console.log("El número es PAR");
		}else {
        console.log("El número es IMPAR");
        
    }

}

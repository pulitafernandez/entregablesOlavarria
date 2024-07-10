"use strict"

let divDerecha = document.querySelector('#der');

let divIzquierda = document.querySelector("#izq");
divDerecha.style.visibility = "visible";

let boton = document.querySelector("#btn1");
boton.addEventListener("click", mostrarOcultar);

let boton2 = document.querySelector("#btn2");
boton2.addEventListener("click", mostrarOcultar);

function mostrarOcultar(){


  if(divDerecha.style.visibility == "visible"){
    divDerecha.style.visibility = "hidden";
    divIzquierda.style.visibility = "visible";
  }else{
    divDerecha.style.visibility = "visible";
    divIzquierda.style.visibility = "hidden";
  }
}
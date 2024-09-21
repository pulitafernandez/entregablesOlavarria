"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
//creo el registro de olavarria
var registroAutomotor = new RegistroAutomotor_1.RegistroAutomotor("Registro Olavarria", 11545);
//creo los autos 
var auto1 = new Auto_1.Auto("AB544CS", "Toyota", "Corolla");
var auto2 = new Auto_1.Auto("AD721BG", "Fiat", "Cronos");
//creo una moto
var moto1 = new Moto_1.Moto("EYO444", "Honda", "XR150");
//creo un camion
var camion1 = new Camion_1.Camion("AC555AC", "Mercedes Benz", "114SD");
//agrego los vehiculos cargados al registro
registroAutomotor.agregarAuto(auto1);
registroAutomotor.agregarAuto(auto2);
registroAutomotor.agregarMoto(moto1);
registroAutomotor.agregarCamion(camion1);
console.log("El registro del automotor es: " + registroAutomotor.getNombre());
console.log(registroAutomotor.getAutos());
//modifico la el modelo del auto2
auto2.setModelo("Pulse");
console.log(registroAutomotor.getAutos());
//elimino el auto2
registroAutomotor.darBajaAuto("AD721BG");
console.log(registroAutomotor.getAutos());
//modifico los datos de la moto y la muestro de nuevo
console.log(registroAutomotor.getMotos());
//si paso algun campo vacio, deja el valor como estaba. Solo cambio el modelo (podria hacerlo con el setModelo directamente)
moto1.editarMoto("", "Civic", "");
console.log(registroAutomotor.getMotos());

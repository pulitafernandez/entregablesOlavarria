import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';
import { RegistroAutomotor } from './RegistroAutomotor';

//creo el registro de olavarria
const registroAutomotor = new RegistroAutomotor("Registro Olavarria", 11545);

//creo los autos 
const auto1 = new Auto("AB544CS", "Toyota", "Corolla");
const auto2 = new Auto("AD721BG", "Fiat", "Cronos");

//creo una moto
const moto1 = new Moto("EYO444","Honda", "XR150");

//creo un camion
const camion1 = new Camion("AC555AC", "Mercedes Benz", "114SD");

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
moto1.editarMoto("","Civic","");
console.log(registroAutomotor.getMotos());



"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre, nroRegistro) {
        this.nombre = nombre;
        this.nroRegistro = nroRegistro;
        this.autos = [];
        this.camiones = [];
        this.motos = [];
    }
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.getNroRegistro = function () {
        return this.nroRegistro;
    };
    RegistroAutomotor.prototype.getAutos = function () {
        return this.autos;
    };
    RegistroAutomotor.prototype.getCamiones = function () {
        return this.camiones;
    };
    RegistroAutomotor.prototype.getMotos = function () {
        return this.motos;
    };
    RegistroAutomotor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    RegistroAutomotor.prototype.setNroRegistro = function (nroRegistro) {
        this.nroRegistro = nroRegistro;
    };
    RegistroAutomotor.prototype.setAutos = function (autos) {
        this.autos = autos;
    };
    RegistroAutomotor.prototype.setCamiones = function (camiones) {
        this.camiones = camiones;
    };
    //agrego vehiculos al registro: auto camion y moto
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        this.autos.push(auto);
        console.log("El auto de patente: " + auto.getPatente() + " fue agregado correctamente");
    };
    RegistroAutomotor.prototype.agregarCamion = function (camion) {
        this.camiones.push(camion);
        console.log("El camion de patente: " + camion.getPatente() + " fue agregado correctamente");
    };
    RegistroAutomotor.prototype.agregarMoto = function (moto) {
        this.motos.push(moto);
        console.log("La moto de patente: " + moto.getPatente() + " fue agregada correctamente");
    };
    //eliminio vehiculos del registro: auto camion y moto
    RegistroAutomotor.prototype.darBajaAuto = function (patente) {
        this.autos = this.autos.filter(function (auto) { return auto.getPatente() !== patente; });
        console.log("El auto de patente: " + patente + " fue dado de baja exitosamente");
    };
    RegistroAutomotor.prototype.darBajaCamion = function (patente) {
        this.camiones = this.camiones.filter(function (camion) { return camion.getPatente() !== patente; });
        console.log("El camion de patente: " + patente + " fue dado de baja exitosamente");
    };
    RegistroAutomotor.prototype.darBajaMoto = function (patente) {
        this.motos = this.motos.filter(function (moto) { return moto.getPatente() !== patente; });
        console.log("La moto de patente: " + patente + " fue dada de baja exitosamente");
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;

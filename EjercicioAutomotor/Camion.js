"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(patente, marca, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    Camion.prototype.getPatente = function () {
        return this.patente;
    };
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    Camion.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Camion.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camion.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    return Camion;
}());
exports.Camion = Camion;

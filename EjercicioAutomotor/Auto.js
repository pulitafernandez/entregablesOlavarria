"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(patente, marca, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    return Auto;
}());
exports.Auto = Auto;

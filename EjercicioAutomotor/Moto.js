"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(patente, marca, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    Moto.prototype.getPatente = function () {
        return this.patente;
    };
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Moto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Moto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    //metodo para editar todos los campos de moto
    Moto.prototype.editarMoto = function (patente, marca, modelo) {
        if (patente != "") {
            this.patente = patente;
        }
        if (marca != "") {
            this.marca = marca;
        }
        if (modelo != "") {
            this.modelo = modelo;
        }
    };
    return Moto;
}());
exports.Moto = Moto;

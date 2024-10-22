"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre) {
        this.nombre = nombre;
        this.vidas = 3;
        this.puntos = 0;
    }
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getVidas = function () {
        return this.vidas;
    };
    Personaje.prototype.getPuntos = function () {
        return this.puntos;
    };
    Personaje.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personaje.prototype.setVidas = function (vidas) {
        if (vidas)
            this.vidas = vidas;
    };
    Personaje.prototype.setPuntos = function (puntos) {
        this.puntos = puntos;
    };
    return Personaje;
}());
exports.Personaje = Personaje;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videojuego = void 0;
var Videojuego = /** @class */ (function () {
    function Videojuego(nombreJuego) {
        this.nombreJuego = nombreJuego;
        this.personajes = [];
    }
    Videojuego.prototype.getNombreJuego = function () {
        return this.nombreJuego;
    };
    Videojuego.prototype.getPersonajes = function () {
        return this.personajes;
    };
    Videojuego.prototype.setNombreJuego = function (nombreJuego) {
        this.nombreJuego = nombreJuego;
    };
    Videojuego.prototype.setPersonaje = function (personajes) {
        this.personajes = personajes;
    };
    Videojuego.prototype.agregarPersonaje = function (personaje) {
        this.personajes.push(personaje);
        console.log("El personaje " + personaje.getNombre() + " fue agregado correctamente");
    };
    Videojuego.prototype.iniciar = function () {
        console.log('¡El juego ha comenzado!');
    };
    return Videojuego;
}());
exports.Videojuego = Videojuego;

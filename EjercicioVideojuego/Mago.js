"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var Personaje_1 = require("./Personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, nivel, poder) {
        var _this = _super.call(this, nombre) || this;
        _this.poder = poder;
        _this.nivel = 1;
        return _this;
    }
    Mago.prototype.getNivel = function () {
        return this.nivel;
    };
    Mago.prototype.atacar = function (oponente) {
        console.log("".concat(this.nombre, " ataca a ").concat(oponente.nombre, "!"));
        // Cada vez que ataca, gana 10 puntos
        this.ganarPuntos(10);
        // al oponente le resto una vida
        oponente.perderVida();
    };
    Mago.prototype.defender = function () {
        if (this.puntos == 0) {
        }
        console.log("".concat(this.nombre, " se defiente"));
    };
    Mago.prototype.larzarHechizo = function () {
        console.log("".concat(this.nombre, " lanza un hechizo con poder").concat(this.poder, "!"));
    };
    Mago.prototype.ganarPuntos = function (puntosGanado) {
        this.puntos = this.puntos + puntosGanado;
        console.log("".concat(this.nombre, " gana ").concat(puntosGanado, " de puntos. Total: ").concat(this.puntos));
        //valido si cambia o no de nivel.
        if (this.puntos >= this.nivel * 10) {
            this.subirNivel();
        }
    };
    Mago.prototype.subirNivel = function () {
        this.nivel = this.nivel + 1;
        this.puntos = 0; //vuelvo a reiniciar los puntos
        console.log("Felicitaciones! ha subido al nivel: ".concat(this.nivel));
    };
    Mago.prototype.perderVida = function () {
        if (this.vidas > 0) {
            this.vidas = this.vidas - 1;
            console.log("".concat(this.nombre, " ha perdido una vida. Vidas restantes: ").concat(this.vidas));
        }
        else {
            console.log("".concat(this.nombre, " no tiene vidas restantes. Fin del juego"));
        }
    };
    return Mago;
}(Personaje_1.Personaje));
exports.Mago = Mago;

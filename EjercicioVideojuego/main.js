"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Videojuego_1 = require("./Videojuego");
var Mago_1 = require("./Mago");
var MagoEvolucionado_1 = require("./MagoEvolucionado");
//creo el videojuego
var videoJuego = new Videojuego_1.Videojuego("Valhala");
videoJuego.iniciar();
var mago = new Mago_1.Mago("Slimn", 1, 10);
var mago2 = new Mago_1.Mago("Lulu", 1, 10);
videoJuego.agregarPersonaje(mago);
videoJuego.agregarPersonaje(mago2);
console.log(mago.getPuntos());
mago.atacar(mago2);
console.log(mago.getPuntos());
mago.ganarPuntos(35);
console.log(mago.getNivel());
//3 el numero maximo para evolucionar
if (mago.getNivel() == 3) {
    mago = new MagoEvolucionado_1.MagoEvolucionado("SlimnEvolution", 1, 10);
}
console.log(mago.getNombre());

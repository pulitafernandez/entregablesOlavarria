import { Videojuego } from './Videojuego';
import { Mago } from './Mago';
import { MagoEvolucionado } from './MagoEvolucionado';

//creo el videojuego


const videoJuego = new Videojuego("Valhala");

videoJuego.iniciar();

let mago= new Mago("Slimn", 1, 10);

let mago2= new Mago("Lulu", 1, 10);

videoJuego.agregarPersonaje(mago);
videoJuego.agregarPersonaje(mago2);

console.log(mago.getPuntos());
mago.atacar(mago2);
console.log(mago.getPuntos());


mago.ganarPuntos(35);
console.log(mago.getNivel());

//3 el numero maximo para evolucionar
if(mago.getNivel()==3){
    mago=new MagoEvolucionado("SlimnEvolution", 1, 10)
}

console.log(mago.getNombre());


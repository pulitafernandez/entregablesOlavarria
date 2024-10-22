import { Personaje } from './Personaje';

export class Videojuego{
    private nombreJuego: string;
    private personajes: Personaje[];


    public constructor(nombreJuego:string){
        this.nombreJuego=nombreJuego;
        this.personajes=[];

    }

    public getNombreJuego():string{
        return this.nombreJuego;
    }
    public getPersonajes():Personaje[]{
        return this.personajes;
    }

    public setNombreJuego(nombreJuego:string){
        this.nombreJuego=nombreJuego;
    }

    public setPersonaje(personajes:Personaje[]){
        this.personajes=personajes;
    }

    public agregarPersonaje(personaje:Personaje):void{
        this.personajes.push(personaje);
        console.log("El personaje " + personaje.getNombre() + " fue agregado correctamente");
    }


    public iniciar(): void{
        console.log('¡El juego ha comenzado!');
    }
}


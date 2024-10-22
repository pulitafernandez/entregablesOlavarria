
import { Personaje } from './Personaje';
export class Mago extends Personaje{

    private poder: number;
    private nivel:number;

    public constructor(nombre:string, nivel:number, poder:number){
        super(nombre);
        this.poder=poder;
        this.nivel=1;

    }

    public getNivel():number{
        return this.nivel;
    }


    public atacar(oponente:Mago):void{
        console.log(`${this.nombre} ataca a ${oponente.nombre}!`);
        // Cada vez que ataca, gana 10 puntos
        this.ganarPuntos(10);
        // al oponente le resto una vida
        oponente.perderVida();   
    }

    defender():void{
        if(this.puntos==0){

        }
        console.log(`${this.nombre} se defiente`);
    }

    larzarHechizo():void{
        console.log(`${this.nombre} lanza un hechizo con poder${this.poder}!`);
    }

    ganarPuntos(puntosGanado:number){
        this.puntos = this.puntos + puntosGanado;
        console.log(`${this.nombre} gana ${puntosGanado} de puntos. Total: ${this.puntos}`);

        //valido si cambia o no de nivel.
        if(this.puntos >= this.nivel * 10){
            this.subirNivel();
        }

    }

    private subirNivel(){
        this.nivel = this.nivel + 1;
        this.puntos=0; //vuelvo a reiniciar los puntos
        console.log(`Felicitaciones! ha subido al nivel: ${this.nivel}`);
        
    }

    private perderVida(): void {
        if (this.vidas > 0) {
            this.vidas = this.vidas -1;
            console.log(`${this.nombre} ha perdido una vida. Vidas restantes: ${this.vidas}`);
        } else {
            console.log(`${this.nombre} no tiene vidas restantes. Fin del juego`);
        }
    }



}

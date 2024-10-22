export abstract class Personaje{
    public nombre: string;
    protected vidas:number;
    protected puntos:number;


    public constructor(nombre:string){
        this.nombre=nombre;
        this.vidas=3;
        this.puntos=0;
    }

    public getNombre():string{
        return this.nombre;
    }
    public getVidas():number{
        return this.vidas;
    }
    public getPuntos():number{
        return this.puntos;
    }
 
    public setNombre(nombre:string){
        this.nombre=nombre;
    }

    public setVidas(vidas:number){
        if(vidas)
        this.vidas=vidas;
    }
    public setPuntos(puntos:number){
        this.puntos=puntos;
    }


    //metodo atacar que debe redefinir cada hijo de personaje
 
    abstract atacar(oponente:Personaje):void;

    abstract defender():void;
}
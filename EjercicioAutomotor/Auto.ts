import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo{
    private tipo:string; //automatico o manual


    public constructor(patente:string,marca:string, modelo:string, tipo:string){
        super(patente, marca, modelo);
        this.tipo=tipo;
    }

    public getTipo():string{
        return this.tipo;
    }

    public setTipo(tipo:string):void{
        this.tipo=tipo;
    }
    
}
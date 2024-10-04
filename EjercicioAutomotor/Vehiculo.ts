export class Vehiculo{
    private patente:string;
    protected marca:string;
    protected modelo:string;

    public constructor(patente:string,marca:string, modelo:string){
        this.patente=patente;
        this.marca=marca;
        this.modelo=modelo;
    }

    public getPatente():string{
        return this.patente;
    }
    public getMarca():string{
        return this.marca;
    }
    public getModelo():string{
        return this.modelo;
    }

    public setPatente(patente:string):void{
        this.patente=patente;
    }
    public setMarca(marca:string):void{
        this.marca=marca;
    }
    public setModelo(modelo:string):void{
        this.modelo=modelo;
    }
}
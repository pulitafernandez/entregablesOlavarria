export class Moto{
    private patente:string;
    private marca:string;
    private modelo:string;


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

    //metodo para editar todos los campos de moto
    public editarMoto(patente:string,marca:string,modelo:string):void{
        if(patente!=""){
            this.patente=patente;
        }
        if(marca!=""){
            this.marca=marca;
        }
        if(modelo!=""){
            this.modelo=modelo;
        }
    }
}
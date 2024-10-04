import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo{
    private tipoCilindro:string;
    private tipoMoto:string;

    public constructor(patente:string,marca:string, modelo:string, tipoCilindro:string, tipoMoto:string){
        super(patente, marca, modelo)
        this.tipoCilindro=tipoCilindro;
        this.tipoMoto=tipoMoto;

    }
    public getTipoCilindro():string{
        return this.tipoCilindro;
    }
    public getTipoMoto():string{
        return this.tipoMoto;
    }

    public setTipoCilindro(tipoCilindro:string):void{
        this.tipoCilindro=tipoCilindro;
    }
    public setTipoMoto(tipoMoto:string):void{
        this.tipoMoto=tipoMoto;
    }

    //metodo para editar los campos marca y modelo de vehiculo, que son las protected. La patente establezco que no se deberia editar
    public editarMoto(marca:string,modelo:string):void{
        if(marca!=""){
            this.marca=marca;
        }
        if(modelo!=""){
            this.modelo=modelo;
        }
    }
}
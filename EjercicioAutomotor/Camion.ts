import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo{
    public tipoAcoplado: string;
    private cajaVolcadora: boolean;

    public constructor(patente:string,marca:string, modelo:string, tipoAcoplado:string, cajaVolcadora:boolean){
        super(patente, marca, modelo);
        this.tipoAcoplado=tipoAcoplado;
        this.cajaVolcadora=cajaVolcadora;
    }
    
    public getTipoAcoplado():string{
        return this.tipoAcoplado;
    }
    public getCajaVolcadora():boolean{
        return this.cajaVolcadora;
    }

    public setTipoAcoplado(tipoAcoplado:string):void{
        this.tipoAcoplado=tipoAcoplado;
    }
    public setCajaVolcadora(cajaVolcadora:boolean):void{
        this.cajaVolcadora=cajaVolcadora;
    }


}
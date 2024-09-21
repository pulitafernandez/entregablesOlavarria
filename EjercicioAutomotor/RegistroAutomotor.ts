import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';

export class RegistroAutomotor{
    private nombre: string;
    private nroRegistro: number;
    private autos: Auto[];
    private camiones: Camion[];
    private motos: Moto[];

    public constructor(nombre:string, nroRegistro:number){
        this.nombre=nombre;
        this.nroRegistro=nroRegistro;
        this.autos=[];
        this.camiones=[];
        this.motos=[];
    }

    public getNombre():string{
        return this.nombre;
    }
    public getNroRegistro():number{
        return this.nroRegistro;
    }
    public getAutos():Auto[]{
        return this.autos;
    }
    public getCamiones():Camion[]{
        return this.camiones;
    }
    public getMotos():Moto[]{
        return this.motos;
    }
    public setNombre(nombre:string):void{
        this.nombre=nombre;
    }
    public setNroRegistro(nroRegistro:number):void{
        this.nroRegistro=nroRegistro;
    }
    public setAutos(autos:Auto[]){
        this.autos=autos;
    }
    public setCamiones(camiones:Camion[]){
        this.camiones=camiones;
    }
    //agrego vehiculos al registro: auto camion y moto
    public agregarAuto(auto:Auto):void{
        this.autos.push(auto);
        console.log("El auto de patente: " + auto.getPatente() + " fue agregado correctamente");
    }
    public agregarCamion(camion:Camion):void{
        this.camiones.push(camion);
        console.log("El camion de patente: " + camion.getPatente() + " fue agregado correctamente");
    }
    public agregarMoto(moto:Moto):void{
        this.motos.push(moto);
        console.log("La moto de patente: " + moto.getPatente() + " fue agregada correctamente");
    }
    //eliminio vehiculos del registro: auto camion y moto
    public darBajaAuto(patente:string){
        this.autos = this.autos.filter(auto => auto.getPatente() !== patente);
        console.log("El auto de patente: " + patente + " fue dado de baja exitosamente");
    }
    public darBajaCamion(patente:string){
        this.camiones = this.camiones.filter(camion => camion.getPatente() !== patente);
        console.log("El camion de patente: " + patente + " fue dado de baja exitosamente");

    }
    public darBajaMoto(patente:string){
        this.motos = this.motos.filter(moto => moto.getPatente() !== patente);
        console.log("La moto de patente: " + patente + " fue dada de baja exitosamente");
    }

}
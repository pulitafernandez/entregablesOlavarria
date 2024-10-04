"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(patente, marca, modelo, tipoCilindro, tipoMoto) {
        var _this = _super.call(this, patente, marca, modelo) || this;
        _this.tipoCilindro = tipoCilindro;
        _this.tipoMoto = tipoMoto;
        return _this;
    }
    Moto.prototype.getTipoCilindro = function () {
        return this.tipoCilindro;
    };
    Moto.prototype.getTipoMoto = function () {
        return this.tipoMoto;
    };
    Moto.prototype.setTipoCilindro = function (tipoCilindro) {
        this.tipoCilindro = tipoCilindro;
    };
    Moto.prototype.setTipoMoto = function (tipoMoto) {
        this.tipoMoto = tipoMoto;
    };
    //metodo para editar los campos marca y modelo de vehiculo, que son las protected. La patente establezco que no se deberia editar
    Moto.prototype.editarMoto = function (marca, modelo) {
        if (marca != "") {
            this.marca = marca;
        }
        if (modelo != "") {
            this.modelo = modelo;
        }
    };
    return Moto;
}(Vehiculo_1.Vehiculo));
exports.Moto = Moto;

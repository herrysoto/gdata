import { Component, OnInit } from '@angular/core';
import { Ubigeo } from '../ubigeo/ubigeo';
import { Sucursal } from './sucursal';
import { UbigeoService } from '../ubigeo/ubigeo.service';
import { SucursalService } from './sucursal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
    selector: 'sucursal-crear',
    templateUrl: 'sucursal-crear.component.html'
})
export class SucursalCrearComponent implements OnInit {
    rutaAdmin: string = environment.API_ROOT_URL_ADMIN;
    sub: any;
    sucursal: Sucursal;
    departamentoSeleccionado: string;
    provinciaSeleccionada: string;
    distritoSeleccionado: string;
    departamentos: Ubigeo[] = [];
    provincias: Ubigeo[] = [];
    distritos: Ubigeo[] = [];
    constructor(private _ubigeoService: UbigeoService,
        private _sucursalService: SucursalService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.sucursal = new Sucursal;
        this.cargaDepartamento();
        console.log(this.router.url.split('/'));
    }

    cargaDepartamento() {
        this.sub = this._ubigeoService
            .lisDepartamento()
            .skipWhile((p) => p === undefined)
            .subscribe(p => {
                this.departamentos = p;
                this.departamentoSeleccionado = p[0].ubigeoId;
                this.cargaPronvicia(this.departamentoSeleccionado);
            });
    }
    cargaPronvicia(ubigeoId: string) {
        this.sub = this._ubigeoService
            .lisProvinciaByDepartamento(ubigeoId)
            .skipWhile((p) => p === undefined)
            .subscribe((p) => {
                this.provincias = p;
                this.provinciaSeleccionada = p[0].ubigeoId;
                this.cargaDistrito(this.provinciaSeleccionada);
            });

    }
    cargaDistrito(ubigeoId: string) {
        this.sub = this._ubigeoService
            .lisDistritoByProvincia(ubigeoId)
            .skipWhile((p) => p === undefined)
            .subscribe(p => {
                this.distritos = p;
                this.distritoSeleccionado = p[0].ubigeoId;
            });
    }
    cboDepartamento(ubigeoId: string) {
        console.log(ubigeoId);
        this._ubigeoService
            .lisProvinciaByDepartamento(ubigeoId)
            .skipWhile((p) => p === undefined)
            .subscribe(p => {
                this.provincias = p;
                this.provinciaSeleccionada = p[0].ubigeoId;
                this.cboProvincia(p[0].ubigeoId);
            });
    }
    cboProvincia(ubigeoId: string) {
        this._ubigeoService
            .lisDistritoByProvincia(ubigeoId)
            .skipWhile((p) => p === undefined)
            .subscribe(p => {
                this.distritoSeleccionado = p[0].ubigeoId;
                this.distritos = p;
            });
    }
    grabar() {
        this.sucursal.ubigeoId = this.distritoSeleccionado;
        console.log(this.route.url);
        this._sucursalService.crear(this.sucursal, 
        this.router.url.split('/')[this.router.url.split('/').length - 2]).subscribe(e => { console.log(e) });
        console.log(this.sucursal);
        console.log(this.distritoSeleccionado);
    }

     gotoLisSucursal() {
        let ruta = this.rutaAdmin + 'sucursal/' + this.router.url.split('/')[this.router.url.split('/').length - 2];
        let link = [ruta];
        this.router.navigate(link);
    }
}
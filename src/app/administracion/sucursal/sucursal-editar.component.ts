import { Component, OnInit, OnDestroy } from '@angular/core';
import { Sucursal } from './sucursal';
import { SucursalService } from './sucursal.service';
import { UbigeoService } from '../ubigeo/ubigeo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ubigeo } from '../ubigeo/ubigeo';
@Component({
    selector: 'sucursal-editar',
    templateUrl: 'sucursal-editar.component.html'
})
export class SucursalEditarComponent implements OnInit, OnDestroy {
    sucursal: Sucursal;
    sub: any;
    departamentos: Ubigeo[] = [];
    provincias: Ubigeo[] = [];
    distritos: Ubigeo[] = [];
    constructor(private _sucursalService: SucursalService,
        private _ubigeoService: UbigeoService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {

    }

    cargaSucursal() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['sucursalId'];
            this._sucursalService
                .obtener(id)
                .skipWhile((p) => p === undefined)
                .subscribe(p => {
                    this.sucursal = p;
                    this.cargaDepartamento(this.sucursal.ubigeo[this.sucursal.ubigeo.length - 1].ubigeoId);
                });
        });
    }
    cargaDepartamento(ubigeoId: string) {
        this.sub = this._ubigeoService
            .lisDepartamento()
            .skipWhile((p) => p === undefined)
            .subscribe(p => {
                this.departamentos = p;
                this.cargaPronvicia(ubigeoId);
            });
    }
    cargaPronvicia(ubigeoId: string) {
        this.sub = this._ubigeoService
            .lisProvinciaByDepartamento(ubigeoId)
            .skipWhile((p) => p === undefined)
            .subscribe((p) => {
                this.provincias = p;
                this.cargaDistrito(ubigeoId);
            });

    }
    cargaDistrito(ubigeoId: string) {
        this.sub = this._ubigeoService
            .lisDistritoByProvincia(ubigeoId)
            .skipWhile((p) => p === undefined)
            .subscribe(p => {
                this.distritos = p;
            });
    }
    cboDepartamento(ubigeoId: string) {
        this._ubigeoService
            .lisProvinciaByDepartamento(ubigeoId)
            .skipWhile( (p) => p === undefined)
            .subscribe(p => {
                this.provincias = p;
                this.sucursal.ubigeo[1] = p[0];
                this.cboProvincia(p[0].ubigeoId);
            });
    }
    cboProvincia(ubigeoId: string) {
        this._ubigeoService
            .lisDistritoByProvincia(ubigeoId)
            .skipWhile( (p) => p === undefined)
            .subscribe( p => {
                this.distritos = p;
                this.sucursal.ubigeo[2] = p[0];
            });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

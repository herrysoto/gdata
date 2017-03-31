import { Component, OnInit, OnDestroy } from '@angular/core';
import { Sucursal } from './sucursal';
import { SucursalService } from './sucursal.service';
import { UbigeoService } from '../ubigeo/ubigeo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ubigeo } from '../ubigeo/ubigeo';
import { environment } from '../../../environments/environment';
@Component({
    selector: 'sucursal-editar',
    templateUrl: 'sucursal-editar.component.html'
})
export class SucursalEditarComponent implements OnInit, OnDestroy {
    rutaAdmin: string = environment.API_ROOT_URL_ADMIN;
    id: string;
    sucursal: Sucursal;
    sub: any;
    departamentos: Ubigeo[] = [];
    provincias: Ubigeo[] = [];
    distritos: Ubigeo[] = [];
    constructor(private _sucursalService: SucursalService,
        private _ubigeoService: UbigeoService,
        private route: ActivatedRoute,
        private router: Router) {
        console.log(route.url);
    }

    ngOnInit() {
        this.cargaSucursal();
    }

    gotoLisSucursal() {
        let ruta = this.rutaAdmin + 'sucursal/' + this.id.split('-')[0];
        let link = [ruta];
        this.router.navigate(link);
    }
    cargaSucursal() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['sucursalId'];
            this._sucursalService
                .obtener(this.id)
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
            .skipWhile((p) => p === undefined)
            .subscribe(p => {
                this.provincias = p;
                this.sucursal.ubigeo[1] = p[0];
                this.cboProvincia(p[0].ubigeoId);
            });
    }
    cboProvincia(ubigeoId: string) {
        this._ubigeoService
            .lisDistritoByProvincia(ubigeoId)
            .skipWhile((p) => p === undefined)
            .subscribe(p => {
                this.distritos = p;
                this.sucursal.ubigeo[2] = p[0];
            });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    actualizar(sucursal: Sucursal) {

        sucursal = this.sucursal;
        sucursal.ubigeoId = this.sucursal.ubigeo[2].ubigeoId;
        console.log(this.sucursal);
        this._sucursalService.actualizar(sucursal).subscribe(e => {
            console.log(e);
        });
    }
}

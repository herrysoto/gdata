import { ToastComponent } from './../../shared/toast/toast.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Empresa } from './empresa';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from './empresa.service';
import { Ubigeo } from '../ubigeo/ubigeo';
import { UbigeoService } from '../ubigeo/ubigeo.service';

@Component({
    selector: 'empresa-detalle',
    templateUrl: 'empresa-detalle.component.html',
    providers: [ ToastComponent]
})

export class EmpresaDetalleComponent implements OnInit, OnDestroy {
    isEdicion = false;
    empresa: Empresa;
    departamentos: Ubigeo[] = [];
    provincias: Ubigeo[] = [];
    distritos: Ubigeo[] = [];
    sub: any;
    constructor(private _empresaService: EmpresaService,
        private _ubigeoService: UbigeoService,
        private toast: ToastComponent,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
           this.cargaEmpresa();
    }

    private cargaEmpresa() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['empresaId'];
            this._empresaService
                .obtener(id)
                .skipWhile((p) => p === undefined)
                .subscribe(p => {
                    this.empresa = p;
                    this.cargaDepartamento(this.empresa.ubigeo[this.empresa.ubigeo.length - 1].ubigeoId);
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
                this.empresa.ubigeo[1] = p[0];
                this.cboProvincia(p[0].ubigeoId);
            });
    }
    cboProvincia(ubigeoId: string) {
        this._ubigeoService
            .lisDistritoByProvincia(ubigeoId)
            .skipWhile( (p) => p === undefined)
            .subscribe( p => {
                this.distritos = p;
                this.empresa.ubigeo[2] = p[0];
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    gotoLisEmpresa() {
        let link = ['/g-data.motriz/users-admin'];
        this.router.navigate(link);
    }

    actualizar(empresa: Empresa ) {
        empresa = this.empresa;
        empresa.ubigeoId = this.empresa.ubigeo[2].ubigeoId;
        this._empresaService.actualizar(empresa)
            .subscribe( e => {console.log(e);
            this.toast.setMessage('Se actualizo de manera exitosa', 'success');
     }, e => this.toast.setMessage(e, 'warning'));
    }

    grabarEmpresaDetalle() {
        this._empresaService.crear(this.empresa);
    }

}

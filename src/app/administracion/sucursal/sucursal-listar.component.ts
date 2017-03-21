import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SucursalService } from './sucursal.service';
import { Sucursal } from './sucursal';

@Component({
    selector: 'sucursal-listar',
    templateUrl: 'sucursal-listar.component.html'
})
export class SucursalListarComponent implements OnInit, OnDestroy {
    sucursales: Sucursal[] = [];
    sub: any;
    constructor(private _sucursalService: SucursalService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe( params => {
            let id = params['empresaId'];
            this._sucursalService
            .getAll(id)
            .subscribe( p => this.sucursales = p );
        });
     }
     ngOnDestroy() {
         this.sub.unsubscribe();
     }

     gotoLisEmpresa(){
         let link = ['/empresas'];
         this.router.navigate(link);
     }
     cambioValor(sucursal: Sucursal) {
    if (sucursal.estado === '0') {
      sucursal.estado = '1';
    } else {
      sucursal.estado = '0';
    }
  }
}
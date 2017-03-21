import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from  '@angular/router';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
@Component({
    selector: 'usuario-listar',
    templateUrl: 'usuario-listar.component.html'
})
export class UsuarioListarComponent implements OnInit, OnDestroy {
    usuarios: Usuario[] = [];
    sub: any;
    constructor(private _usuarioService: UsuarioService,
                private route: ActivatedRoute,
                private router: Router  ) { }

    ngOnInit() {
       this.sub = this.route.params.subscribe( params => {
           let id = params['sucursalId'];
           this._usuarioService
           .getAll(id)
           .subscribe( p => this.usuarios = p);
       });

     }

     ngOnDestroy() {
         this.sub.unsubscribe();
     }
}
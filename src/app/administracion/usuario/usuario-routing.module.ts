import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioListarComponent } from './usuario-listar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';


const routes: Routes = [
    {
        path: '',
        component: UsuarioComponent,
        children: [
            { path: '', component: UsuarioListarComponent },
            { path: 'usuario/:usuarioId', component: UsuarioListarComponent}
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }

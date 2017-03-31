import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucursalComponent } from './sucursal.component';
import { SucursalListarComponent } from './sucursal-listar.component';
import { SucursalEditarComponent } from './sucursal-editar.component';
import { SucursalCrearComponent } from './sucursal-crear.component';
const routes: Routes = [
  {
    path: '',
    component: SucursalComponent,
    children: [
      { path: '', component: SucursalListarComponent },
      { path: 'sucursal' , component: SucursalCrearComponent },
      { path: 'sucursal/:sucursalId', component: SucursalEditarComponent }
    ]
  },
  { path: 'usuario/:sucursalId', loadChildren: 'app/administracion/usuario/usuario.module#UsuarioModule' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalRoutingModule { }

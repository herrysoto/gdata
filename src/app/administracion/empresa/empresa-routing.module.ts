import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent} from './empresa.component';
import { EmpresaListarComponent } from './empresa-listar.component';
import { EmpresaDetalleComponent } from './empresa-detalle.component';
import { EmpresaCrearComponent } from './empresa-crear.component';

const routes: Routes = [
  {
    path : '',
    component : EmpresaComponent,
    children: [
      {path: '', component: EmpresaListarComponent},
      {path: 'empresas', component :  EmpresaCrearComponent},
      {path: 'empresas/:empresaId', component: EmpresaDetalleComponent },
      ]
  },
  { path: 'sucursal/:empresaId', loadChildren : 'app/administracion/sucursal/sucursal.module#SucursalModule' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }

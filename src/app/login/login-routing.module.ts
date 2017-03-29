import { TallerComponent } from './../taller/taller.component';
import { EmpresaDetalleComponent } from './../administracion/empresa/empresa-detalle.component';
import { EmpresaCrearComponent } from './../administracion/empresa/empresa-crear.component';
import { EmpresaListarComponent } from './../administracion/empresa/empresa-listar.component';
import { EmpresaComponent } from './../administracion/empresa/empresa.component';
import { HomeComponent } from './../administracion/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', redirectTo: '/g-data.motriz/users-login', pathMatch: 'full' }, //esto sirve para cambiar el paht'' por una dirección que desees
  {path: 'g-data.motriz/users-login', component: LoginComponent },
  { path: 'g-data.motriz/users-admin', loadChildren: '../administracion/home/home.module#HomeModule',
    //  children : [
    //    { path: '', loadChildren: '../administracion/empresa/empresa.module#EmpresaModule'}]
  },
  { path: 'g-data.motriz/users-taller', component: TallerComponent}
  // src/app/administracion/home/home.module#HomeModule 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
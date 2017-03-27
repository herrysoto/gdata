import { TallerComponent } from './../taller/taller.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth-login.component';


const routes: Routes = [
  {
   path: 'g-data.motriz/prueba',
    component: AuthLoginComponent,
    },
    { path: 'g-data.motriz/users-admin', loadChildren: '../administracion/home/home.module#HomeModule',
    //  children : [
    //    { path: '', loadChildren: '../administracion/empresa/empresa.module#EmpresaModule'}]
  },
  { path: 'g-data.motriz/users-taller', component: TallerComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }

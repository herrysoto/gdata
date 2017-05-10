import { PrincipalComponent } from './principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //  { path: '', redirectTo: 'control', pathMatch: 'full' },
  {
    path : '', component : PrincipalComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }

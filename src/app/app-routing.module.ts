import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { PageNotFoundComponent} from './error404.component';

export const routes: Routes = [
  { path: '', redirectTo: 'empresas', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

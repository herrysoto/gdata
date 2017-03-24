import { LoginComponent } from './login/login.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { PageNotFoundComponent} from './error404.component';

export const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

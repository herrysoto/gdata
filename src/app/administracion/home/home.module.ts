import { EmpresaRoutingModule } from './../empresa/empresa-routing.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { NavegacionSuperiorComponent } from './navbar.component';
import { EmpresaComponent } from './../empresa/empresa.component';

@NgModule({
  imports: [ SharedModule,HomeRoutingModule ],
  declarations: [MenuComponent, NavegacionSuperiorComponent,HomeComponent],
  exports:[MenuComponent, NavegacionSuperiorComponent,HomeComponent]
})
export class HomeModule { }

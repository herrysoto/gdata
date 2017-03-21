import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { NavegacionSuperiorComponent } from './navbar.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [MenuComponent, NavegacionSuperiorComponent],
  exports:[MenuComponent, NavegacionSuperiorComponent]
})
export class HomeModule { }

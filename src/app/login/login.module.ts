import { EmpresaRoutingModule } from './../administracion/empresa/empresa-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule  } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  imports: [SharedModule,LoginRoutingModule],
  exports: [ LoginComponent ],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {}
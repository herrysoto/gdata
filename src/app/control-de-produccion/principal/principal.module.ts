import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { SharedModule } from './../../shared/shared.module';
import {CalendarModule} from 'primeng/primeng';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ SharedModule, PrincipalRoutingModule,CalendarModule],
  declarations: [PrincipalComponent],
  providers: [PrincipalComponent]
})
export class PrincipalModule { }

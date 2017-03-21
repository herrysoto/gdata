import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { SucursalRoutingModule } from './sucursal-routing.module';
import { SucursalService } from './sucursal.service';
import { SucursalComponent } from './sucursal.component';
import { SucursalListarComponent } from './sucursal-listar.component';
import { SucursalCrearComponent } from './sucursal-crear.component';
import { SucursalEditarComponent } from './sucursal-editar.component';
import { UbigeoService } from '../ubigeo/ubigeo.service'; 
@NgModule({
  imports: [SharedModule, SucursalRoutingModule],
  declarations: [SucursalComponent, SucursalListarComponent, SucursalCrearComponent, SucursalEditarComponent],
  providers: [SucursalService, UbigeoService]
})
export class SucursalModule { }

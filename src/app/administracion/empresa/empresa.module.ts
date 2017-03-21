import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { EmpresaListarComponent } from './empresa-listar.component';
import { EmpresaDetalleComponent } from './empresa-detalle.component';
import { EmpresaComponent } from './empresa.component';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaService } from './empresa.service';
import { UbigeoService} from '../ubigeo/ubigeo.service';
import { EmpresaCrearComponent } from './empresa-crear.component'; 

@NgModule({
  imports: [ SharedModule, EmpresaRoutingModule ],
  declarations: [EmpresaComponent, EmpresaListarComponent, EmpresaDetalleComponent, EmpresaCrearComponent],
  providers: [EmpresaService, UbigeoService]
})
export class EmpresaModule { }

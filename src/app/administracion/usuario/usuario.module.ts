import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioService } from './usuario.service';
import { UsuarioComponent } from './usuario.component';
import { UsuarioListarComponent } from './usuario-listar.component';
@NgModule({
    imports: [SharedModule, UsuarioRoutingModule],
    declarations: [UsuarioComponent, UsuarioListarComponent],
    providers: [UsuarioService]
})
export class UsuarioModule { }

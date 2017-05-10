import { PrincipalComponent } from './control-de-produccion/principal/principal.component';
import { PrincipalModule } from './control-de-produccion/principal/principal.module';
import { LogModule } from './log/log.module';
import { TallerComponent } from './taller/taller.component';
import { ContextMenuModule,GrowlModule,SplitButtonModule,DropdownModule,DialogModule,TieredMenuModule,DataTableModule, SharedModule,
    ButtonModule,PasswordModule,InputTextModule,MessagesModule,InputMaskModule,ConfirmDialogModule ,ConfirmationService} from 'primeng/primeng';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import './rxjs-operators';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent} from './error404.component';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomeModule } from './administracion/home/home.module';
import { EmpresaModule } from './administracion/empresa/empresa.module';
import { SucursalModule } from './administracion/sucursal/sucursal.module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    TallerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    LogModule,
    HomeModule,
    EmpresaModule,
    PrincipalModule,
    AppRoutingModule,
    ContextMenuModule,GrowlModule,SplitButtonModule,DropdownModule,DialogModule,TieredMenuModule,DataTableModule, SharedModule,
    ButtonModule,PasswordModule,InputTextModule,MessagesModule,InputMaskModule,ConfirmDialogModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

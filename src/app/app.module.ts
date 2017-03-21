import { LoginComponent } from './Login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent} from './error404.component';
import { AppComponent } from './app.component';
import { HomeModule } from './administracion/home/home.module';
import { EmpresaModule } from './administracion/empresa/empresa.module';
import { SucursalModule } from './administracion/sucursal/sucursal.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    EmpresaModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

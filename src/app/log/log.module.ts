import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LogRoutingModule } from './log-routing.module';
import { AuthLoginComponent } from './auth-login.component';
@NgModule({
    imports: [SharedModule, LogRoutingModule],
    exports: [ AuthLoginComponent],
    declarations: [ AuthLoginComponent],
    providers: [],
})
export class LogModule { }

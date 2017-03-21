import { LoggerModule } from './../administracion/logger/logger.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToastComponent],
  exports : [ CommonModule, FormsModule, HttpModule, LoggerModule, ToastComponent]
})
export class SharedModule { }

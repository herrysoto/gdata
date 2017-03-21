
import { Component, Input } from '@angular/core';

@Component({
    selector: 'toast',
    templateUrl: 'toast.component.html',
    styleUrls: ['toast.component.css']
})
export class ToastComponent {
    @Input() mensaje = { cuerpo: '', tipo: '' };

    setMessage(cuerpo, tipo, time = 3000) {
        this.mensaje.cuerpo = cuerpo;
        this.mensaje.tipo = tipo;
        setTimeout(() => { this.mensaje.cuerpo = ''; }, time);
    }
}
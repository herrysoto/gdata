import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


declare var myExtObject: any;

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    usuario: string;
    clave: string;
    constructor(private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
  myExtObject.func2();

    }

    ingresar() {
        console.log(this.usuario);
        console.log(this.clave);
        if (this.usuario === 'jmpaucarcaja' ||
             this.clave === '123') {
            let link = ['g-data.motriz/prueba'];
            this.router.navigate(link);
        }

    }
}
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { } from '../../assets/js/circular.js';
declare var myExtObject: any;
@Component({
    selector: 'auth-login',
    templateUrl: 'auth-login.component.html'
})
export class AuthLoginComponent implements OnInit {

    constructor(private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        myExtObject.func2();
    }
}

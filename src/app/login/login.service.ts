import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {
    isLoggedIn: boolean = false;
    redirectUrl: string;
    private baseUrl: string = environment.API_ENDPOINT;

    constructor(private http: Http) { }
    login(): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }
    logout(): void {
        this.isLoggedIn = false;
    }
}

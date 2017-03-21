import { environment } from './../../../environments/environment';
import { Injectable} from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Ubigeo } from './ubigeo';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class UbigeoService {

    private baseUrl: string  = environment.API_ENDPOINT;
    constructor (private http: Http) {}
    lisDepartamento(): Observable<Ubigeo[]> {
        let ubigeo$= this.http.get(`${this.baseUrl}/departamento`, {headers : this.getHeaders()})
        .map(mapUbigeos);
        return ubigeo$;
    }
    lisProvinciaByDepartamento( ubigeoId: string): Observable<Ubigeo[]> {
        let ubigeo$ = this.http
        .get(`${this.baseUrl}/provincia/${ubigeoId}`, {headers: this.getHeaders()})
        .map(mapUbigeos)
        .catch(handleError);
        return ubigeo$;
    }
    lisDistritoByProvincia( ubigeoId: string):  Observable<Ubigeo[]> {
        let ubigeo$= this.http
        .get(`${this.baseUrl}/distrito/${ubigeoId}`, {headers:  this.getHeaders()})
        .map(mapUbigeos);
        return ubigeo$;
    }
    private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function toUbigeo( r: any) {
    let ubigeo = <Ubigeo>({
        ubigeoId: r.ubigeoId,
        descripcion: r.descripcion
    });
    return ubigeo;
}

function mapUbigeo(response: Response): Ubigeo {
    return toUbigeo(response.json());
}
function mapUbigeos(response: Response): Ubigeo[] {
    return response.json().map(toUbigeo);
}

function handleError (error: any) {
  let errorMsg = error.message || `Error al consumir api_endpoint`;
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}

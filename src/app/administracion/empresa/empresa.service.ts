import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Empresa } from './empresa';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmpresaService {

  private baseUrl: string  =  environment.API_ENDPOINT;
  
  constructor(private http: Http) { }
  getAll(): Observable<Empresa[]> {
    let empresa$ = this.http
    .get(`${this.baseUrl}/empresa`, {headers: this.getHeaders()})
    .map(mapEmpresas)
    .catch(handleError);
    return empresa$;
  }
  obtener( empresaId: string ): Observable<any> {
    let empresa$ = this.http
    .get(`${this.baseUrl}/empresa/${empresaId}`, {headers: this.getHeaders()})
    .map(mapEmpresa);
    return empresa$;
  }
  crear(empresa: Empresa): Observable<Response> {
    return this
    .http
    .post(`${this.baseUrl}/empresa`, JSON.stringify(empresa), {headers: this.getHeaders()});
  }
  actualizar(empresa: Empresa): Observable<Response> {
    return this
    .http.put(`${this.baseUrl}/empresa/${empresa.empresaId}`, JSON.stringify(empresa), {headers: this.getHeaders()}).catch(handleError);
  }
 private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
   private clone(object: any) {
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}
function toEmpresa( r: any ): Empresa {
    let empresa = <Empresa>({
    direccion: r.direccion,
    nombre: r.nombre,
    celular: r.celular,
    ruc: r.ruc,
    estado: r.estado,
    empresaId: r.empresaId,
    ubigeo : r.ubigeo
    });
    return empresa;
}
  function mapEmpresa(response: Response): Empresa {
    return toEmpresa(response.json());
  }
  function mapEmpresas(response: Response):  Empresa[] {
    return response.json().map(toEmpresa);
  }



function handleError (error: any) {
  let errorMsg = error.message || `Error al consumir api_endpoint`;
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}
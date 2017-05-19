import { BeanTecnico } from './Bean/BeanTecnico';
import { BeanClienteVehiculo } from './Bean/BeanClienteVehiculo';
import { BeanCliente } from './Bean/BeanCliente';
import { BeanControldeproduccion } from './Bean/BeanControldeproduccion';

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Controlproduccionservice {

  //para local
    private _produccion1Url = 'http://10.0.0.125/control_de_produccion-1.0/api/v1/ordenesservicio'; //JAVA
    private _produccion2Url = 'http://10.0.0.125/control_de_produccion-1.0/api/v1/grillaportecnico';
    private _produccion3Url = 'http://10.0.0.125/control_de_produccion-1.0/api/v1/grillaporfecha';
    private _produccion4Url = 'http://10.0.0.125/control_de_produccion-1.0/api/v1/grillaporOS';
    private _produccion5Url = 'http://10.0.0.125/control_de_produccion-1.0/api/v1/grillapornrollave';
    private _produccion6Url = 'http://10.0.0.125/control_de_produccion-1.0/api/v1/datoscliente';
    private _produccion7Url = 'http://10.0.0.125/control_de_produccion-1.0/api/v1/datosclientevehiculo';
    private _produccion8Url = 'http://localhost:8080/api/v1/datostecnico';
   
  lessons = [];
  constructor(private http: Http) { }

  getgrillaporcategoria(codestado: string,codsucursal:string): Observable<BeanControldeproduccion[]> {
    return this.http.get(this._produccion1Url + '/' + codestado+'/'+codsucursal)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getgrillaportecnico(codsucursal: string,codnumtecnico:string): Observable<BeanControldeproduccion[]> {
    return this.http.get(this._produccion2Url + '/' + codsucursal+'/'+codnumtecnico)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getgrillaporfecha(codsucursal: string,fechainicial:string,fechafinal:string): Observable<BeanControldeproduccion[]> {
    return this.http.get(this._produccion3Url + '/' + codsucursal+'/'+fechainicial+'/'+fechafinal)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getgrillaporOS(codsucursal: string,codigoOS:string): Observable<BeanControldeproduccion[]> {
    return this.http.get(this._produccion4Url + '/' + codsucursal+'/'+codigoOS)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  getgrillaporLlave(codsucursal: string,nroLlave:number): Observable<BeanControldeproduccion[]> {
    return this.http.get(this._produccion5Url + '/' + codsucursal+'/'+nroLlave)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getcliente(doccliente: string): Observable<BeanCliente[]> {
    return this.http.get(this._produccion6Url + '/' + doccliente)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getclientevehiculo(placa: string,chasis:string): Observable<BeanClienteVehiculo[]> {
    return this.http.get(this._produccion7Url + '/' + placa+'/'+chasis)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  gettecnico(sucursal: string): Observable<BeanTecnico[]> {
    return this.http.get(this._produccion8Url + '/' + sucursal)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
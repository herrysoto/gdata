import { beanNumMaestra } from './../Bean/beanNumMaestra';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { beanservicios } from '../Bean/beanservicios';
import { beanoperacion } from '../Bean/beanoperacion';
import { beanoperacionservicios } from '../Bean/beanoperacionservicios';
import { beanoperacionservicios2 } from '../Bean/beanoperacionservicios2';
import { beanHoraHombre } from '../Bean/beanHoraHombre';
import { beanNumCodigo } from '../Bean/beanNumCodigo';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Flatrateservice {
  //private _produccion1Url = 'http://10.0.0.249:8083/api/v1/firstcombo';

  //para local
  //  private _produccion1Url = 'http://localhost:8080/api/v1/primercombo'; //JAVA
  //  private _produccion2Url = 'http://localhost:8080/api/v1/segundocombo'; //JAVA
  //  private _produccion3Url = 'http://localhost:8080/api/v1/grilla';//JAVA
  //  private _produccion4Url = 'http://localhost:8090/api/v1/insertaroperacionservicio';
  //  private _produccion5Url = 'http://localhost:8080/api/v1/horashombre';//JAVA
  //  private _produccion6Url = 'http://localhost:8090/api/v1/actualizaroperacionservicio'; //JAVA
  //  private _produccion7Url = 'http://localhost:8090/api/v1/actualizarhorashombre'; //JAVA
  //  private _produccion8Url = 'http://localhost:8080/api/v1/Getnumcodigo';//JAVA
  //  private _produccion9Url = 'http://localhost:8090/api/v1/insertarhorashombre';  //JAVA
  //  private _produccion10Url = 'http://localhost:8080/api/v1/buscarvalid';//JAVA
  //  private _produccion11Url = 'http://localhost:8080/api/v1/buscar';//JAVA
  //  private _produccion12Url = 'http://localhost:8080/api/v1/listacontenidos';//JAVA
  //  private _produccion13Url = 'http://localhost:8080/api/v1/buscarnumcod';//JAVA
  //  private _produccion14Url = 'http://localhost:8090/api/v1/eliminarcontenido';
  //  private _produccion15Url = 'http://localhost:8090/api/v1/actualizargrilla'; //JAVA
  //  private _produccion16Url = 'http://localhost:8080/api/v1/buscarcodmaestra';//JAVA
  //  private _produccion17Url = 'http://localhost:8090/api/v1/insertarcontenido'; //java

  //para servidor
   private _produccion1Url = 'http://10.0.0.125/flatrate-1.0/api/v1/primercombo'; //JAVA
    private _produccion2Url = 'http://10.0.0.125/flatrate-1.0/api/v1/segundocombo'; //JAVA
   private _produccion3Url = 'http://10.0.0.125/flatrate-1.0/api/v1/grilla';//JAVA
   private _produccion4Url = 'http://10.0.0.125/flatrate-1.0/api/v1/insertaroperacionservicio';
  private _produccion5Url = 'http://10.0.0.125/flatrate-1.0/api/v1/horashombre';//JAVA
   private _produccion6Url = 'http://10.0.0.125/flatrate-1.0/api/v1/actualizaroperacionservicio';
   private _produccion7Url = 'http://10.0.0.125/flatrate-1.0/api/v1/actualizarhorashombre';
  private _produccion8Url = 'http://10.0.0.125/flatrate-1.0/api/v1/Getnumcodigo';//JAVA
   private _produccion9Url = 'http://10.0.0.125/flatrate-1.0/api/v1/insertarhorashombre';
  private _produccion10Url = 'http://10.0.0.125/flatrate-1.0/api/v1/buscarvalid';//JAVA
   private _produccion11Url = 'http://10.0.0.125/flatrate-1.0/api/v1/buscar';//JAVA
   private _produccion12Url = 'http://10.0.0.125/flatrate-1.0/api/v1/listacontenidos';//JAVA
   private _produccion13Url = 'http://10.0.0.125/flatrate-1.0/api/v1/buscarnumcod';//JAVA
   private _produccion14Url = 'http://10.0.0.125/flatrate-1.0/api/v1/eliminarcontenido';
   private _produccion15Url = 'http://10.0.0.125/flatrate-1.0/api/v1/actualizargrilla';
   private _produccion16Url = 'http://10.0.0.125/flatrate-1.0/api/v1/buscarcodmaestra';//JAVA
   private _produccion17Url = 'http://10.0.0.125/flatrate-1.0/api/v1/insertarcontenido';
  lessons = [];
  constructor(private http: Http) { }

  getProduccion(): Observable<beanservicios[]> {
    return this.http.get(this._produccion1Url)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getProduccion2(argumento: string): Observable<beanoperacion[]> {
    return this.http.get(this._produccion2Url + '/' + argumento)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getProduccion3(argumento2: string): Observable<beanoperacionservicios[]> {
    return this.http.get(this._produccion3Url + '/' + argumento2)
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  postinsertardatos(vchcodigooperacion:string,chrcodigooperacionservicio:string,numpreciooficial:number,vchdescripcion:string,numhorashombre:number,numpreciosugerido:number,
                     numdescuento:number,numcodigo:number,numtotal:number): Observable<beanoperacionservicios[]>{
    return this.http.post(this._produccion4Url,{vchcodigooperacion:vchcodigooperacion, chrcodigooperacionservicio:chrcodigooperacionservicio,numpreciooficial:numpreciooficial, vchdescripcion:vchdescripcion,
      numhorashombre:numhorashombre, numpreciosugerido:numpreciosugerido, numdescuento:numdescuento,numcodigo:numcodigo ,numtotal:numtotal})
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getHorasHombre(): Observable<beanHoraHombre[]>{
    return this.http.get(this._produccion5Url)
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  putOperacionServicio(vchnrotrabajo:string,vchdescripcion:string,numpreciosugerido:number,numhorashombre:number,numdescuento:number,numtotal:number,chrcodigooperacionservicio:string,
                        vchcodigooperacion:string):Observable<beanoperacionservicios[]>{
    return this.http.put(this._produccion6Url,{vchnrotrabajo:vchnrotrabajo,vchdescripcion:vchdescripcion,numpreciosugerido:numpreciosugerido,numhorashombre:numhorashombre,numdescuento:numdescuento,
                              numtotal:numtotal,chrcodigooperacionservicio:chrcodigooperacionservicio,vchcodigooperacion:vchcodigooperacion})
    .map((res: Response) => res.json())

    ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  UpdateGrilla(numpreciosugerido:number,numtotal:number,numdescuento:number,numhorashombre:number,vchcodigooperacion:string,chrcodigooperacionservicio:string){
    return this.http.put(this._produccion15Url,{numpreciosugerido:numpreciosugerido,numtotal:numtotal,numdescuento:numdescuento,numhorashombre:numhorashombre,vchcodigooperacion:vchcodigooperacion,
                              chrcodigooperacionservicio:chrcodigooperacionservicio})
    .map((res: Response) => res.json())

    ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  PutHorasHombre(numpreciooficial:number):Observable<beanoperacionservicios[]>{
    return this.http.put(this._produccion7Url,{numpreciooficial:numpreciooficial})
    .map((res: Response) => res.json())

    ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  Getnumcodigo(): Observable<beanHoraHombre[]>{
    return this.http.get(this._produccion8Url)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  PostHorasHombres(numcodigo:number,numhorashombre:number): Observable<any[]>{
    return this.http.post(this._produccion9Url,{numcodigo:numcodigo,numhorashombre:numhorashombre})
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  Getcodigovalidacion(argumento3: string,argumento4: string): Observable<beanoperacionservicios2[]> {
    return this.http.get(this._produccion10Url + '/' + argumento3+'/'+argumento4)
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  BuscarOperServiciosParam(argumento5:string): Observable<any[]> {
    return this.http.get(this._produccion11Url + '/' + argumento5)
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  LISTAROPERSERVCONTENIDOS(argumento6:string,argumento7:string):Observable<beanoperacionservicios2[]>  {
    return this.http.get(this._produccion12Url + '/' + argumento6+'/'+argumento7)
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  Getnumcodigoop():Observable<beanNumCodigo[]>{
    return this.http.get(this._produccion13Url)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  DeleteContenido(argumento8:number){
    return this.http.delete(this._produccion14Url + '/' + argumento8)
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  Getnumcodigooperacionmaestra():Observable<any>{
    return this.http.get(this._produccion16Url)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  Nuevocontenido(numcodigooperacionmaestra:number,vchoperacionmaestra:string,vchcodigooperacion:string,chrcodigooperacionservicio:string,chrestado:string,numcodigomaster:number,numcodigoitem:number): Observable<any[]>{
    return this.http.post(this._produccion17Url,{numcodigooperacionmaestra:numcodigooperacionmaestra,vchoperacionmaestra:vchoperacionmaestra,
                                                vchcodigooperacion:vchcodigooperacion,chrcodigooperacionservicio:chrcodigooperacionservicio,chrestado:chrestado,
                                                numcodigomaster:numcodigomaster,numcodigoitem:numcodigoitem})
      .map((res: Response) => res.json())

      ._catch((error: any) => Observable.throw(error.json().error || 'Server error'));
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
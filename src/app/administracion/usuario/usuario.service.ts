import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Usuario } from './usuario';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsuarioService {
    private baseUrl: string = environment.API_ENDPOINT;

    constructor(private http: Http) { }
    getAll(sucursalId: string): Observable<Usuario[]> {
        let empresa$ = this.http
            .get(`${this.baseUrl}/usuario/${sucursalId}`, { headers: this.getHeaders() })
            .map(mapUsuarios)
            .catch(handleError);
        return empresa$;
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
function toUsuario(r: any): Usuario {
    let usuario = <Usuario>({
        usuarioId: r.usuarioId,
        nombreUsuario: r.nombreUsuario,
        primerNombre: r.primerNombre,
        segundoNombre: r.segundoNombre,
        tercerNombre: r.tercerNombre,
        apellidoPaterno: r.apellidoPaterno,
        apellidoMaterno: r.apellidoMaterno,
        direccion: r.direccion,
        telefonoCelular: r.telefonoCelular,
        telefonoFijo: r.telefonoFijo,
        nombrePerfil: r.nombrePerfil,
        estado: r.estado
    });
    console.log(usuario)
    return usuario;
}
function mapUsuario(response: Response): Usuario {
    return toUsuario(response.json());
}
function mapUsuarios(response: Response): Usuario[] {
    return response.json().map(toUsuario);
}

function handleError(error: any) {
    let errorMsg = error.message || `Error al consumir api_endpoint`;
    console.error(errorMsg);
    return Observable.throw(errorMsg);
}
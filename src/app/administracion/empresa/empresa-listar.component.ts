import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa';
import { EmpresaService } from '../empresa/empresa.service';
@Component({
  selector: 'empresa-listar',
  templateUrl: './empresa-listar.component.html'
})
export class EmpresaListarComponent implements OnInit {
  empresas: Empresa[] = [];
  mensajeError: string = '';
  isCargando: boolean = true;
  constructor(private _empresaService: EmpresaService) { }

  ngOnInit() {
    this._empresaService
      .getAll()
      .subscribe(p => this.empresas = p,
      e => this.mensajeError = e,
      () => this.isCargando = false);
  }
  cambioValor(empresa: Empresa) {
    if (empresa.estado === '0') {
      empresa.estado = '1';
    } else {
      empresa.estado = '0';
    }
  }
}

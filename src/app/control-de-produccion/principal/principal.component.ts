import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'principal',
    templateUrl: 'principal.component.html',
    styleUrls: ['principal.component.css'],
})
export class PrincipalComponent implements OnInit {
    fechaini: Date= new Date();
    fechafin: Date= new Date();
    es: any;

    fecIniS:string;
  fecFinS:string;
  dateFormat:string =  'dd/MM/yyyy';

  ngAfterViewInit(): void {

      // Valoreses inicales de las fechas
      //   this._titleService.setTitle( 'Orden de servicio' );
      this.fechaini.setDate(this.fechaini.getDate() - 4);
  }
    constructor() { }
    ngOnInit() { 
        this.es = {
            firstDayOfWeek: 1,
            dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
            dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
            dayNamesMin: [ "D","L","M","X","J","V","S" ],
            monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
            monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ]
        }
    }
}
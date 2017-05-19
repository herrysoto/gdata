import { BeanTecnico } from './Bean/BeanTecnico';
import { BeanClienteVehiculo } from './Bean/BeanClienteVehiculo';
import { BeanCliente } from './Bean/BeanCliente';
import { Controlproduccionservice } from './principal.service';
import { BeanControldeproduccion } from './Bean/BeanControldeproduccion';
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
    beancontroldeproduccion: BeanControldeproduccion[];
    beancliente : BeanCliente[];
    beanclientevehiculo : BeanClienteVehiculo[];
    beantecnico : BeanTecnico[];
    errorMessage: string;
    fecIniS:string;
    fecFinS:string;
    dateFormat:string =  'dd/MM/yyyy';

  ngAfterViewInit(): void {
      this.obtenertecnico();
      // Valoreses inicales de las fechas
      //   this._titleService.setTitle( 'Orden de servicio' );
      this.fechaini.setDate(this.fechaini.getDate() - 4);
  }
    constructor(private _controlproduccionservice : Controlproduccionservice) {
     }

    categoriaservicio(valor:string){
        console.log(valor);
        this._controlproduccionservice.getgrillaporcategoria(valor,'01')
                .subscribe(
                       cuadro => {this.beancontroldeproduccion = cuadro
                            console.log(this.beancontroldeproduccion);
                        },
                       error =>  this.errorMessage = <any>error);}

    ObtenerGrillaPorTecnico(codnumtecnico:string){
        this._controlproduccionservice.getgrillaportecnico('01',codnumtecnico)
                .subscribe(
                       cuadro => {this.beancontroldeproduccion = cuadro
                           
                        },
                       error =>  this.errorMessage = <any>error);}


    Mandarfecha(){
      
    //   fecha inicial 
      let dayini = this.fechaini.toISOString().slice(8,10).replace(/\//g,'-');
      let monthini = this.fechaini.toISOString().slice(5,7).replace(/\//g,'-');
      let yearini = this.fechaini.toISOString().slice(0,4).replace(/\//g,'-');
      this.fecIniS = dayini+'-'+monthini+'-'+yearini;
      console.log(this.fecIniS);
        // fecha final
      let dayfin = this.fechafin.toISOString().slice(8,10).replace(/\//g,'-');
      let monthfin = this.fechafin.toISOString().slice(5,7).replace(/\//g,'-');
      let yearfin = this.fechafin.toISOString().slice(0,4).replace(/\//g,'-');
      this.fecFinS = dayfin+'-'+monthfin+'-'+yearfin;
      console.log(this.fecFinS);

    //   LLAMANDO AL SERVICIOS PARA OBTENER LA GRILLA ENVIANDO LA FECHA
    this._controlproduccionservice.getgrillaporfecha('01',this.fecIniS,this.fecFinS)
        .subscribe(
            grillaxfecha => {this.beancontroldeproduccion = grillaxfecha
                           
                        },
                       error =>  this.errorMessage = <any>error
        );
    }

    ObtenerGrillaPorOS(codigoOS:string){
        if(codigoOS == ''){
            alert("Tiene que ingresar un el código");
        }else{
            this._controlproduccionservice.getgrillaporOS('01',codigoOS)
                 .subscribe(
                        cuadro => {this.beancontroldeproduccion = cuadro
                        
                         },
                        error =>  this.errorMessage = <any>error);
        }
         
    }

    ObtenerGrillaPorLlave(nroLlave:number){
        // console.log(Number(nroLlave));
        if(isNaN(Number(nroLlave))){
            alert("Solo se pueden ingresar número");
        }else{
            this._controlproduccionservice.getgrillaporLlave('01',nroLlave)
                 .subscribe(
                        cuadro => {this.beancontroldeproduccion = cuadro
                        
                         },
                        error =>  this.errorMessage = <any>error);
        }
         
    }

    ObtenerCliente(doccliente:string){
        this.beanclientevehiculo = null;
        this._controlproduccionservice.getcliente(doccliente)
            .subscribe(
                        cuadro => {this.beancliente = cuadro
                            console.log(this.beancliente)
                         },
                        error =>  this.errorMessage = <any>error);
    }

    ObtenerClienteVehiculo(placa:string,chasis:string){
         this.beancliente = null;
         this._controlproduccionservice.getclientevehiculo(placa,chasis)
             .subscribe(
                         cuadro => {this.beanclientevehiculo = cuadro
                            console.log(this.beanclientevehiculo);
                          },
                         error =>  this.errorMessage = <any>error);
    }

    obtenertecnico(){
      this._controlproduccionservice.gettecnico("01")
        .subscribe(
                       cuadro => {this.beantecnico = cuadro
                            console.log(this.beantecnico);
                        },
                       error =>  this.errorMessage = <any>error);}
  cerrarModulo(){
      window.history.go(-1);
  }

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
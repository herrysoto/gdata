import { beancodigooperacionmaestra } from './Bean/beancodigooperacionmaestra';
import { beanNumMaestra } from './Bean/beanNumMaestra';
import { Component, OnInit,Input } from '@angular/core';
import { beanservicios } from './Bean/beanservicios';
import { beanoperacion } from './Bean/beanoperacion';
import { beanoperacionservicios } from './Bean/beanoperacionservicios';
import { beanoperacionservicios2 } from './Bean/beanoperacionservicios2';
import { beanoperacionservicioscontenido } from './Bean/beanoperacionservicioscontenido';
import { beanHoraHombre } from './Bean/beanHoraHombre';
import { beanNumCodigo } from './Bean/beanNumCodigo';
import { Flatrateservice } from './Servicios/flatrate.service';
import {Message,MenuItem,HeaderColumnGroup,Row,RowExpansionLoader,Growl,ConfirmationService} from 'primeng/primeng';

class Prime implements beanoperacionservicios{
  constructor(public numnropieza?,public codigo?,public vchcodigooperacion?,public chrcodigooperacionservicio?,public vchdescripcion? ,public numhorashombre?: number,public numpreciosugerido?,
              public numdescuento?,public precioestimado?,public nummanoobra?,public numrepuesto?,public numtotal?,
    public numeropreciooficial?,public dtemodificacion?,public numprecioestimado?,public vchnrotrabajo?,public numcodigo?,public dtecreacion?,public numtiposervicio?
    ,public numpreciooficial?,public chrestado?){}
}

class Prime2 implements beanHoraHombre{
  constructor(public numhorashombre?){}
}

@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css'],
  viewProviders: [ Flatrateservice ],
})
export class TallerComponent implements OnInit {
    @Input() numhorashombre;

msgs: Message[] = [];
  items: MenuItem[];
  numeros:any;
beanservicios : beanservicios[];
beanservicioscontenido : beanservicios[];
  beanoperacion : beanoperacion[];
  beanoperacioncontenido : beanoperacion[];
  beanoperacionservicios : beanoperacionservicios[];
  beanoperacionserviciosnewcontenido : beanoperacionservicioscontenido[];
  beanoperacionservicioscontenido : beanoperacionservicioscontenido[];
  beanoperacionservicios2 : beanoperacionservicios2[];
  beanNumMaestra : beanNumMaestra[];
  beancodigooperacionmaestra : beancodigooperacionmaestra[];
  beanNumCodigo : beanNumCodigo[];
  beanHoraHombre : beanHoraHombre[];
  cuadroSeleccionado0 : beanoperacionservicios;
  cuadroSeleccionado : beanservicios;
  cuadroSeleccionado2 : beanoperacion;
  cuadroSeleccionado3 : beanoperacionservicios;
  contenidoseleccionado :beanoperacionservicioscontenido;
//   Opselected : beanoperacionservicios;
  default : string;
  default1 : string;
  default2 : string;
  default3 : string;
  newbeanoperacionservicios : boolean;
  newbeanHoraHombre : boolean;
  beanopser : beanoperacionservicios = new Prime();
  beanhh : beanHoraHombre = new Prime2();
  Registraritemdialog: boolean;
  Actulizarhhdialog: boolean;
  Actualizaritemdialog: boolean;
  Veroeditardialog:boolean;
  valorvch :string;
  valornumhh : number;
  valornumhhdefault : number;
  selectedbeanoperacionservicios:beanoperacionservicios;
  errorMessage: string;
  horahombre:number;
  horahombredefault:number;
  multipsugerido:number;
  numpreciosugerido1 : number;
	numpreciosugerido2 : number;
  numtotal:number;
  valordescto:number;
  valordesctodefault:number;
  restdescuento:number;
  descrp:string;
  numtrabajo:string;
  nwhh:number;
  newdesc:number;
  newresta:number;
  numcod:number;
  numhh:number;
  toggleButton:boolean;
  toggleButtonupdate:boolean;
  newdescripcion:string;
  newnumtrabajo:string;
  newchrcodigooperacionservicio:string;
  pruebavali:string;
  prue:string;
  buscardescripcion:string;
  totalmanoobracontenido:number;
  totalhhcontenido:number=0;
  totalcontenido:number=0;
  totaldsctcontenido:number=0;
  mostrarhorarhombre:boolean;
  mostrardscto:boolean;
  mostrarhorarhombreread:boolean;
  mostrardsctoread:boolean;
	selectedRow : Number;
    setClickedRow : Function;
    selectedcontenido : Number;
    setClickedcontenido : Function;
    valor : number;
    esrepetido : boolean;
    entraporbuscar:boolean;


  constructor(private _flatrateservice : Flatrateservice,private confirmationService:ConfirmationService ) {
    this.cuadroSeleccionado = new beanservicios();
    this.cuadroSeleccionado2 = new beanoperacion();
    this.cuadroSeleccionado0 = new beanoperacionservicios();
    this.cuadroSeleccionado3 = new beanoperacionservicios();
    this.contenidoseleccionado = new beanoperacionservicioscontenido();
		this.setClickedRow = function(index){
            this.selectedRow = index;
        }
        this.setClickedcontenido = function(index){
            this.selectedcontenido = index;
        }
  }

  //Esta funcion me ayuda a obtener el objeto produccio que esta en el html
  

    mostrarprod(produccio){
        // this.cuadroSeleccionado0 = produccio.substring(0, 2);
        // console.log(produccio.substring(0, 2));
        // console.log("hola");
        // console.log(produccio);
        // console.log(this.cuadroSeleccionado0);
        // console.log("fin");
         this.getCuadros2(produccio.substring(0, 2));
    }
    mostrarprod2(produccio2){
        // this.cuadroSeleccionado0 = produccio.substring(0, 2);
        // console.log(produccio.substring(0, 2));
        // console.log("hola");
        // console.log(produccio);
        // console.log(this.cuadroSeleccionado0);
        // console.log("fin");
         this.getCuadros3(produccio2.substring(0, 2));
    }

// esta función sirve para seleccionar un item del la lista de servicios y mandarlo al segundo input como argumento 
//   seleccionar(cuadro:beanservicios){
//     this.cuadroSeleccionado = cuadro;
//     console.log(this.cuadroSeleccionado.chrcodigoservicio);
//     this.getCuadros2(this.cuadroSeleccionado.chrcodigoservicio);
//   }

//realiza la seleccion de las operaciones para que se muestre en la tabla
//   seleccionar2(cuadro2:beanoperacion){
//     this.cuadroSeleccionado2 = cuadro2;
//     console.log(this.cuadroSeleccionado2.vchdescripcion);
//     this.getCuadros3(this.cuadroSeleccionado2.vchcodigooperacion);
//   }

// obtiene la lista de los servicios llamando al service(metodo get) para que luego con el seleccionar escoja uno de ellos
  getCuadros(): void {
      this._flatrateservice.getProduccion()
                     .subscribe(
                       cuadros =>{this.beanservicios = cuadros;
                           this.default = this.beanservicios[0].vchdescripcion
                           this.default1 = this.beanservicios[0].chrcodigoservicio  //trae como valor 01
                        //    console.log(this.default1)
                        this.getCuadros2(this.default1);} ,  
                       error =>  this.errorMessage = <any>error);
    }

// obtiene la lista de las operaciones llamando al service(metodo get) para que se muestren en el input, recibe el argumento del seleccionar 1
    getCuadros2( argumento:string): void {
      this._flatrateservice.getProduccion2(argumento)
                     .subscribe(
                       cuadros2 => {this.beanoperacion = cuadros2
                           this.default2= this.beanoperacion[0].vchdescripcion
                           this.default3= this.beanoperacion[0].vchcodigooperacion
                        //    console.log(this.default3),
                         this.getCuadros3(this.default3);},
                       error =>  this.errorMessage = <any>error);
    }

		

//llama al servicio get para que pueda listar en primera instancia a los valores de la tabla,recibe argumento del seleccionar2
    getCuadros3(argumento2:string):void {
        this.valorvch = argumento2.substring(0, 2);
      this._flatrateservice.getProduccion3(argumento2)
      .subscribe(
        beanoperacionservicios =>{this.beanoperacionservicios = beanoperacionservicios
            if(this.valorvch=='1W' || this.valorvch=='1X' || this.valorvch=='1Z'){
                this.mostrarhorarhombreread=true;
                this.mostrardsctoread=true;
                this.mostrarhorarhombre=false;
                this.mostrardscto= false;
            }else{
                this.mostrarhorarhombre=true;
                this.mostrardscto= true;
                this.mostrarhorarhombreread=false;
                this.mostrardsctoread=false;
            }
        },
        error => this.errorMessage = <any>error);
    }
//Obtener Valor Horas Hombre
    getHoraHombre(): any {
      this._flatrateservice.getHorasHombre()
                     .subscribe(
                       hh => {this.beanHoraHombre = hh 
                           this.horahombre = this.beanHoraHombre[0].numhorashombre;
                           this.horahombre=parseFloat(this.horahombre.toFixed(2));
                           this.Actulizarhhdialog = true;    
                        }, 
                       error =>  this.errorMessage = <any>error);
    }

//LLama a la funcion para obtener el numero del codigo siguiente para insertarlo en las tabla HORASHOMBRE
    Getnumcodigo():any{
        this._flatrateservice.Getnumcodigo()
        .subscribe(
            numcod => {this.beanHoraHombre=numcod;
                this.numcod = this.beanHoraHombre[0].numcodigo;//trae el nuevo numero de codigo para actualizar el horas hombre
            }
        )

    }

//sta funcion sirve para insertar en la tabla horas hombre el nuevo valor de horas hombre
PostHorasHombres(numcodigo:number,numhorashombre:number){
    // numcodigo = this.numcod;
    // numhorashombre = this.numhorashombre;
    this._flatrateservice.PostHorasHombres(numcodigo,numhorashombre)
            .subscribe(
                act => {this.getCuadros3(this.valorvch);}
            )
}

//guarda las horas hombre y actualiza la data 
savehh(numhorashombre:number){
    numhorashombre= this.horahombre;
    this.confirmationService.confirm({
            message: '¿Estás seguro que deseas actualizar el valor Hora Hombre de '+ this.horahombredefault +' por '+ this.horahombre +' ?',
            accept: () => { 
     
     numhorashombre = +numhorashombre;
     this._flatrateservice.PutHorasHombre(numhorashombre)
                .subscribe(
                    puthh => {
                        this.PostHorasHombres(this.numcod,numhorashombre);
                        this.Actulizarhhdialog = false;
                    }
                )
                }})
}

//funcion para que me traiga valor repetidos al momento de registrar
    Getcodigovalidacion(vchcodigooperacion:string,chrcodigooperacionservicio:string,numpreciooficial:number,vchdescripcion:string,numhorashombre:number,numpreciosugerido:number,
                        numdescuento:number,numtotal:number):any{
                            
        // this.pruebavali = this.newchrcodigooperacionservicio;
        console.log(this.valorvch,chrcodigooperacionservicio);
        this._flatrateservice.Getcodigovalidacion(this.valorvch,chrcodigooperacionservicio)
        .subscribe(
            
            prue =>{ 
                if(prue == null || prue.length==0){ 
              this.save(vchcodigooperacion,chrcodigooperacionservicio,numpreciooficial,vchdescripcion,numhorashombre,numpreciosugerido,numdescuento,numtotal);

                }else{
                    this.confirmationService.confirm({
                        message: 'No se puede Registrar esta información ya que el codigo de operacion ya existe ,Pulse el boton Aceptar para regresar y modificar los datos',
                         accept: () =>{
                              // this.showDialogToAdd();
                             this.Registraritemdialog = true;
                         },
                        reject: () =>{
                           this.salirRegistrar();
                        }
                        }) 
                 }
            }
            
        )
    }

// Post a la nueva operacion servicio
    save(vchcodigooperacion:string,chrcodigooperacionservicio:string,numpreciooficial:number,vchdescripcion:string,numhorashombre:number,numpreciosugerido:number,
                        numdescuento:number,numtotal:number):any {     
            this.confirmationService.confirm({
            message: '¿Estás seguro que deseas registrar este item con el código '+ vchcodigooperacion +'-'+chrcodigooperacionservicio +' ?',
            accept: () => { 
             numhorashombre = this.nwhh;
             numdescuento = this.newdesc;
             vchdescripcion = this.newdescripcion;
            console.log(this.horahombre);
            numpreciooficial = this.horahombre;  
            // console.log(numpreciooficial);      
             numhorashombre = +numhorashombre;
             numpreciosugerido = +numpreciosugerido;
             numdescuento = +numdescuento;
             numtotal = +numtotal;
             numpreciooficial = +numpreciooficial;
             this._flatrateservice.postinsertardatos(vchcodigooperacion,chrcodigooperacionservicio,numpreciooficial,vchdescripcion,numhorashombre,numpreciosugerido,numdescuento,this.beanNumCodigo[0].numcodigo,numtotal).subscribe(
                    cuad =>{this.getCuadros3(this.valorvch);}
             );
             // this.beanoperacionservicios.push(this.beanopser);
             this.msgs = [];
             this.msgs.push({severity:'info', summary:'Correcto', detail:'Se agregó un nuevo N° de trabajo'});
             this.beanopser = null;
             this.Registraritemdialog = false;}})
        }

//Actualizar la lista de operacion servicio en la tabla
    PutOperacionServicio(vchnrotrabajo:string,vchdescripcion:string,numpreciosugerido:number,numhorashombre:number,numdescuento:number,numtotal:number,chrcodigooperacionservicio:string,
                        vchcodigooperacion:string):any{
            this.confirmationService.confirm({
            message: '¿Estás seguro que deseas actualizar este item con el código '+ vchcodigooperacion +'-'+chrcodigooperacionservicio +' ?',
            accept: () =>{
            vchnrotrabajo = this.numtrabajo;
            // this.cuadroSeleccionado3.vchnrotrabajo = this.numtrabajo;

            vchdescripcion = this.descrp;
            // this.cuadroSeleccionado3.vchdescripcion = this.descrp;

             numhorashombre = this.valornumhh;
            //  this.cuadroSeleccionado3.numhorashombre = this.valornumhh;

             numpreciosugerido =  this.multipsugerido;
            //  this.cuadroSeleccionado3.numpreciosugerido = this.multipsugerido;

             numdescuento = this.valordescto;
            //  this.cuadroSeleccionado3.numdescuento = this.valordescto;

             numhorashombre = +numhorashombre;
             numpreciosugerido = +numpreciosugerido;
             numdescuento = +numdescuento;
             numtotal = +numtotal;
                this._flatrateservice.putOperacionServicio(vchnrotrabajo,vchdescripcion,numpreciosugerido,numhorashombre,numdescuento,numtotal,chrcodigooperacionservicio,vchcodigooperacion)
            .subscribe(cuad1 =>{this.getCuadros3(this.valorvch);});
            this.cuadroSeleccionado3=0;
            this.cuadroSeleccionado0 = null;
            this.Actualizaritemdialog=false;
						this.selectedRow = null;
        }})
    }

    //Esta función es para la validacion sobre el negativo que hay en el descuento en el caso de actualizar un item
         Validacionnegativos(vchnrotrabajo:string,vchdescripcion:string,numpreciosugerido:number,numhorashombre:number,numdescuento:number,numtotal:number,chrcodigooperacionservicio:string,
                         vchcodigooperacion:string):any{
            if(numtotal < 0 || numpreciosugerido < 0){
                  this.confirmationService.confirm({
                message: 'No se puede actualizar esta información ya que existe un valor negativo,Pulse el boton Aceptar para regresar',
                accept: () =>{
                    // this.PutOperacionServicio(vchnrotrabajo,vchdescripcion,numpreciosugerido,numhorashombre,numdescuento,numtotal,chrcodigooperacionservicio,vchcodigooperacion);
                    this.Actualizaritemdialog = true;
                },
                reject: () =>{
                    this.salirUpdate();
                }
                })  
              }else{
                  this.PutOperacionServicio(vchnrotrabajo,vchdescripcion,numpreciosugerido,numhorashombre,numdescuento,numtotal,chrcodigooperacionservicio,vchcodigooperacion);
              }
         }
    
    //Esta función es para la validacion sobre el negativo que hay en el descuento en el caso de registrar un item
        Validarnegativosregistrar(vchcodigooperacion:string,chrcodigooperacionservicio:string,numpreciooficial:number,vchdescripcion:string,numhorashombre:number,numpreciosugerido:number,
                        numdescuento:number,numtotal:number):any{      
                            chrcodigooperacionservicio = this.newchrcodigooperacionservicio.toUpperCase();
                        if(numtotal < 0 || numpreciosugerido < 0){
                  this.confirmationService.confirm({
                message: 'No se puede Registrar esta información ya que existe un valor negativo,Pulse el boton Aceptar para regresar y modificar los datos',
                accept: () =>{
                    // this.showDialogToAdd();
                    this.Registraritemdialog = true;
                },
                reject: () =>{
                    this.salirRegistrar();
                }
                })  
              }else{
                  this.Getcodigovalidacion(vchcodigooperacion,chrcodigooperacionservicio,numpreciooficial,vchdescripcion,numhorashombre,numpreciosugerido,numdescuento,numtotal);
              }    
        }

    //Esta funcion sirve para el boton salir del ver Horas Hombre
    salirHorasHombre(){
        this.Actulizarhhdialog = false;
				this.selectedRow = null;
    }


    //ESTAS FUNCIONES SIRVEN PARA EL INSERTAR UN NUEVO ITEM

    //obtener por teclado al HH
    newHorasHombre(newhh){
        this.nwhh=newhh;
        this.multipsugerido = 0;
        this.multipsugerido = (this.nwhh * this.horahombre);
        if(isNaN(this.multipsugerido)){
            newhh=0;
            this.nwhh=0;
            this.toggleButton=true;
        }
        else{
            this.beanopser.numpreciosugerido=this.multipsugerido;
        this.newresta = (this.multipsugerido-this.newdesc);
        this.beanopser.numtotal=this.newresta;
         if(this.newdesc.toString() == '' || (this.newdescripcion == undefined || this.newdescripcion == '')||(this.nwhh == 0 || this.nwhh == null || this.nwhh == undefined || isNaN(this.multipsugerido))||
         (this.newchrcodigooperacionservicio == '' || this.newchrcodigooperacionservicio == undefined)){
             this.toggleButton=true;
         }else{
             this.toggleButton=false;
         }}  
        
    }

    //esta funcion es para validar la descripcion,si es nulo el valor que se desabilite (lee lo que se ingresa por teclado en la descripcion)
    newVchdescripcion(newdescripcion){
        this.newdescripcion = newdescripcion;
         if(this.newdesc.toString() == '' || (this.newdescripcion == undefined || this.newdescripcion == '')||(this.nwhh == 0 || this.nwhh == null || this.nwhh == undefined || isNaN(this.multipsugerido))||
         (this.newchrcodigooperacionservicio == '' || this.newchrcodigooperacionservicio == undefined)){
             this.toggleButton=true;
         }else{
             this.toggleButton=false;
         }
    }

    newChrcodigooperacionservicio(newchrcodigooperacionservicio){
       this.newchrcodigooperacionservicio = newchrcodigooperacionservicio;
        if(this.newdesc.toString() == '' || (this.newdescripcion == undefined || this.newdescripcion == '')||(this.nwhh == 0 || this.nwhh == null || this.nwhh == undefined || isNaN(this.multipsugerido))|| (this.newchrcodigooperacionservicio == '' || this.newchrcodigooperacionservicio == undefined)){
             this.toggleButton=true;
         }else{
             this.toggleButton=false;
         }
    }

    //esta funcion es para validar el numero de trabajo,si es nulo el valor que se desabilite (lee lo que se ingresa por teclado en el numero de trabajo)
    newVchnumtrabajo(newnumtrabajo){
        this.newnumtrabajo = newnumtrabajo;
        if(this.newdesc.toString() == '' || (this.newdescripcion == undefined || this.newdescripcion == '')||(this.nwhh == 0 || this.nwhh == null || this.nwhh == undefined || isNaN(this.multipsugerido))||
        (this.newchrcodigooperacionservicio == '' || this.newchrcodigooperacionservicio == undefined)){
             this.toggleButton=true;
         }else{
             this.toggleButton=false;
         }
    }

    //obtener por teclado al HH
    newNumDescuento(newdesc){
        this.newdesc=0;
        this.newdesc = newdesc;
        this.newresta = (this.multipsugerido-this.newdesc);
        if(isNaN(this.newresta) || isNaN(this.multipsugerido)){
            this.newdesc=0;
            newdesc=0;
            this.toggleButton=true;
        }else{
            this.beanopser.numtotal=this.newresta;
            if(this.newdesc.toString() == '' || (this.newdescripcion == undefined || this.newdescripcion == '')||(this.nwhh == 0 || this.nwhh == null || this.nwhh == undefined || isNaN(this.multipsugerido))||
            (this.newchrcodigooperacionservicio == '' || this.newchrcodigooperacionservicio == undefined)){
             this.toggleButton=true;
            }else{
             this.toggleButton=false;
         }
        }
    }

    showDialogToAdd() {
        // this.newbeanoperacionservicios = true;
        this.beanopser = new Prime();
        this.beanopser.vchcodigooperacion = this.valorvch;
        this.nwhh = 0;
        this.newdesc=0;
        this.multipsugerido=0;
        this.beanopser.numdescuento = this.newdesc;
        this.Registraritemdialog = true;
        this.toggleButton=true;
    }

    salirRegistrar(){
         this.beanopser = null;
         this.Registraritemdialog = false;
         this.newresta = 0;
         this.nwhh = 0;
         this.newdesc=0;
         this.multipsugerido = 0;
				 this.selectedRow = null;
    }


    //AQUI TERMINAN LAS FUNCIONES DE INSERTAR UN NUEVO ITEM



    //ESTAS FUNCIONES SIRVEN PARA EL ACTUALIZAR UN ITEM
    salirUpdate() {//creo que solo sirve para hacer la actualizacion
         this.Actualizaritemdialog = false;
         this.cuadroSeleccionado3.numpreciosugerido = this.numpreciosugerido1; 
         this.cuadroSeleccionado3.numtotal = this.numtotal;
         this.valornumhh = 0;
         this.cuadroSeleccionado3.numdescuento = this.valordesctodefault;
         this.cuadroSeleccionado3.numhorashombre = this.valornumhhdefault;
         this.cuadroSeleccionado3 = 0;
				 this.selectedRow = null;
    }
    //esta funcion sirve para que el numero de trabajo no se actualice solo
    mostrarNumeroTrabajo(ntrabajo){
        this.numtrabajo=ntrabajo;
        if(this.descrp == ''  || (this.valornumhh == 0 || this.valornumhh == null || this.valornumhh == undefined || isNaN(this.multipsugerido)) || (this.valordescto == null || this.valordescto == undefined || isNaN(this.restdescuento))){
            this.toggleButtonupdate = true;
        }
        else{
            this.toggleButtonupdate = false;
        }
    }

    //esta funcion hace que la descripcion no se duplique y al momento de guardar se quede guardado
    mostrarDescripcion(descr){
        this.descrp = descr;
        if(this.descrp == ''  || (this.valornumhh == 0 || this.valornumhh == null || this.valornumhh == undefined || isNaN(this.multipsugerido)) || (this.valordescto == null || this.valordescto == undefined || isNaN(this.restdescuento))){
            this.toggleButtonupdate = true;
        }
        else{
            this.toggleButtonupdate = false;
        }
    }

    //recibe data del input y lo guarda en valornumhh para luego en el save mandarlo a cuandroseleccionado3
    mostrashorahombre(valornumhh){
         if(valornumhh == ' ' || valornumhh == null || valornumhh == ''){
             valornumhh = 0;
             this.valornumhh = valornumhh;
             this.valordescto = 0;
             this.cuadroSeleccionado3.numdescuento=0;
             this.multipsugerido = (this.valornumhh * this.horahombre);
             if(isNaN(this.multipsugerido)){
                 this.valornumhh = 0;
                 valornumhh = 0;
                 this.toggleButtonupdate = true;
             }
                this.cuadroSeleccionado3.numpreciosugerido = this.multipsugerido;
                this.cuadroSeleccionado3.numtotal = (this.multipsugerido - this.cuadroSeleccionado3.numdescuento);
         }else{
             this.valornumhh = valornumhh;
             this.multipsugerido = (this.valornumhh * this.horahombre);
             if(isNaN(this.multipsugerido)){
                 this.valornumhh = 0;
                 valornumhh = 0;
                 this.multipsugerido = 0;
                 this.toggleButtonupdate = true;
             }
            this.cuadroSeleccionado3.numpreciosugerido = this.multipsugerido;
            this.cuadroSeleccionado3.numtotal = (this.multipsugerido - this.cuadroSeleccionado3.numdescuento);
                
         }
         if(this.descrp == ''  || (this.valornumhh == 0 || this.valornumhh == null || this.valornumhh == undefined || isNaN(this.multipsugerido)) || (this.valordescto == null || this.valordescto == undefined || isNaN(this.restdescuento))){
                 this.toggleButtonupdate = true;}
             else{
                 this.toggleButtonupdate = false;
                 }
    }


    validardescuento(valordescto){
        if(valordescto == ' ' || valordescto === null || valordescto == ''){
            valordescto = 0;
            this.valordescto = valordescto;
            this.cuadroSeleccionado3.numdescuento = 0;
            this.restdescuento = (this.cuadroSeleccionado3.numpreciosugerido-this.valordescto);
            if(isNaN(this.restdescuento)){
                this.valordescto = 0;
                valordescto = 0;
                this.toggleButtonupdate = true;
            }
            this.cuadroSeleccionado3.numtotal=this.restdescuento;
        }else{
            this.valordescto = valordescto;
            this.restdescuento = (this.cuadroSeleccionado3.numpreciosugerido-this.valordescto);
            if(isNaN(this.restdescuento)){
                 this.valordescto = 0;
                valordescto = 0;
                this.restdescuento=0;
                this.toggleButtonupdate = true;
            }
            this.cuadroSeleccionado3.numtotal=this.restdescuento;
        }
            if(this.descrp == ''  || (this.valornumhh == 0 || this.valornumhh == null || this.valornumhh == undefined || isNaN(this.multipsugerido)) || (this.valordescto == null || this.valordescto == undefined || isNaN(this.restdescuento))){
                 this.toggleButtonupdate = true;
            }
            else{
                 this.toggleButtonupdate = false;
            }
    }

    //cuando tenga el numtotal y si no quiere que se guarde obtiene el anterior a actualizar y al poner salir se guarda este dato(osea el antiguo)
    mostrarNumtotal(numtotal){
        this.numtotal = numtotal;
    }

		//la funcion de esto es que cuando ingrese por teclado mande el valor al dato numpreciosugerido2 y luego este lo 
		//mande a cuadroseleccionado3 para que mientras este alli no se edite en la pantalla apenas se escriba
		mostrarPrecioSugerido(numpreciosugerido1){
			this.numpreciosugerido2=numpreciosugerido1;
		}

    //Obtiene el dato previo a la guardada y si pones salir se regresa con este valor en la grilla
    mostrarPrecioSugeridobackup(numpreciosugerido1){
        this.numpreciosugerido1=numpreciosugerido1;
    }

//esto es cuando le da click a la opcion editar item obtiene los registros
    EditarItem(cuad:beanoperacionservicios){
        this.cuadroSeleccionado3 = cuad;
        this.mostrarPrecioSugeridobackup(this.cuadroSeleccionado3.numpreciosugerido);
        this.mostrarNumtotal(this.cuadroSeleccionado3.numtotal);
        this.valordescto  = this.cuadroSeleccionado3.numdescuento;
        this.valordesctodefault = this.cuadroSeleccionado3.numdescuento;
        this.valornumhh = this.cuadroSeleccionado3.numhorashombre;
        this.valornumhhdefault = this.cuadroSeleccionado3.numhorashombre;
        this.multipsugerido = this.cuadroSeleccionado3.numpreciosugerido;
        this.descrp = this.cuadroSeleccionado3.vchdescripcion;
        this.numtrabajo = this.cuadroSeleccionado3.vchnrotrabajo;
        this.restdescuento = this.cuadroSeleccionado3.numtotal;
        this.Actualizaritemdialog = true;
        this.toggleButtonupdate = false;
    }
//AQUI TERMINAN LAS FUNCIONES DEL UPDATE 

//esta funcion sirve para poner salir a las opciones de ver o editar
SalirVeroeditardialog(){
    this.Veroeditardialog = false;
		this.selectedRow = null;
}

//funcion para que escoja que hacer si editar item o ver contenidos
    Clickgrid(cuad:beanoperacionservicios){
        this.cuadroSeleccionado3 = cuad;
        if(this.cuadroSeleccionado3.vchcodigooperacion=='1W' || this.cuadroSeleccionado3.vchcodigooperacion=='1X' || this.cuadroSeleccionado3.vchcodigooperacion=='1Z'){
                this.mostrarhorarhombreread=true;
                this.mostrardsctoread=true;
                this.mostrarhorarhombre=false;
                this.mostrardscto= false;
            }else{
                this.mostrarhorarhombre=true;
                this.mostrardscto= true;
                this.mostrarhorarhombreread=false;
                this.mostrardsctoread=false;
            }
        this.Veroeditardialog = true;
    }

    EscogerVerContenidos(){
         this.Veroeditardialog = false;
         this.VerContenidos(this.cuadroSeleccionado3);
    }

    EscogerEditarItem(){
          this.EditarItem(this.cuadroSeleccionado3);
          this.Veroeditardialog = false;
    }

     

    //Esta funcion sirve para que llame al servicio de listarcontenidos argumento6:string,argumento7:string
    VerContenidos(cuad:beanoperacionservicioscontenido){
        this.contenidoseleccionado = cuad;
        this._flatrateservice.LISTAROPERSERVCONTENIDOS(this.contenidoseleccionado.vchcodigooperacion,this.contenidoseleccionado.chrcodigooperacionservicio)
            .subscribe(
                contenido => { this.beanoperacionservicioscontenido = contenido;
                    this.totalmanoobracontenido = 0;
                    this.totalhhcontenido = 0;
                    this.totalcontenido = 0;
                    this.totaldsctcontenido=0;
                        for (let num of contenido){
                            // contenido.forEach((numpreciosugerido) => {total} );//total.push(Number(num.numpreciosugerido)), Iteramos el array llamado: arr1. Con el método Number los declaramos enteros y los sumamos
                            // console.log(total);
                             this.numeros = new Array();
                             this.numeros.push(num.codigo)
                            // this.obtenercodigocontenido(this.numeros);
                            // console.log(this.numeros)
                            this.totalmanoobracontenido =this.totalmanoobracontenido + num.numpreciosugerido;
                            this.totalmanoobracontenido = parseFloat(this.totalmanoobracontenido.toFixed(2));
                            this.totalhhcontenido = this.totalhhcontenido + num.numhorashombre;
                            this.totaldsctcontenido = this.totaldsctcontenido + num.numdescuento;
                            this.totalcontenido = this.totalmanoobracontenido - this.totaldsctcontenido;
                        }
                        this.UpdateGrilla(this.totaldsctcontenido,this.totalhhcontenido,this.totalmanoobracontenido,this.totalcontenido);
                    }   
            )
    }

    UpdateGrilla(totaldsctcontenido:number,totalhhcontenido:number,totalmanoobracontenido:number,totalcontenido:number){
        totaldsctcontenido =  this.totaldsctcontenido;
        totalhhcontenido = this.totalhhcontenido;
        totalmanoobracontenido = this.totalmanoobracontenido;
        totalcontenido = this.totalcontenido;
        this._flatrateservice.UpdateGrilla(this.totalmanoobracontenido,this.totalcontenido,this.totaldsctcontenido,this.totalhhcontenido,this.cuadroSeleccionado3.vchcodigooperacion,this.cuadroSeleccionado3.chrcodigooperacionservicio)
                .subscribe(
                    newgrilla => {
                        if(this.entraporbuscar){
                        }
                        else{
                            this.getCuadros3(this.valorvch);
                        }
                    }
                )
    }

//Terminan las funciones de ver contenido o editar item


//Comienzan las funciones para buscar una operacion servicio con parametro
Ingresaroperacionservicioparam(descripcion){
    this.buscardescripcion = descripcion;
}

Buscaroperacionservicioparam(){
    this.entraporbuscar = true;
    if(this.buscardescripcion.length == 0){
        alert("Debe ingresar un texto para buscar");
    }else{
        this._flatrateservice.BuscarOperServiciosParam(this.buscardescripcion)
        .subscribe(
            beanoperacionservicios =>{
                if(beanoperacionservicios.length ==0){
                }else{
                    this.beanoperacionservicios = beanoperacionservicios
                }

            }
        );
    }
    
}

    //para que me traiga el ultimo numcodigo para poder insertar un nuevo item
    Getnumcodigoop(){
        this._flatrateservice.Getnumcodigoop()
            .subscribe(
                cod => { this.beanNumCodigo = cod;
                }
            )
    }

    //Inicio de funciones para la eliminacion de un beanoperacionservicioscontenido

    //esta por demas el select que estoy haciendo ya que en el bean ya lo trae

    //Obtener el numcodigooperacionmaestra

        DeleteContenido(beanoperacionserviciocontenidoseleccionado:beanoperacionservicioscontenido){
            this.confirmationService.confirm({
                message: '¿Está seguro que desea eliminar el Item?',
                accept: () =>{
                    // this.showDialogToAdd();
                    this._flatrateservice.DeleteContenido(beanoperacionserviciocontenidoseleccionado.numcodigooperacionmaestra)
                        .subscribe(
                            cod => { this.beanNumMaestra = cod;
                            this.VerContenidos(this.cuadroSeleccionado3);
                            }
                        )
                },
                // reject: () =>{
                    
                // }
                }) 
            
        }

		CerrarContenido(){
			this.selectedRow = null;
            this.selectedcontenido =  null;
		}


    //obtener coodigo maestro para agregar contenido
    Getnumcodigooperacionmaestra(){
        this.selectedcontenido =  null;
        this._flatrateservice.Getnumcodigooperacionmaestra()
            .subscribe(
                maestra => { this.beancodigooperacionmaestra = maestra
                    this.valor = this.beancodigooperacionmaestra[0].numcodigooperacionmaestra;
                }
            );
    }

  
    //Validar que no se ingresen items repetidos
     IsRepetido(beanoperacionservicionewc:beanoperacionservicioscontenido):Boolean{                
                             for (let num of this.beanoperacionservicioscontenido){
                                 if (beanoperacionservicionewc.codigo == num.codigo ){
                                    return true;
                                 }
                             }
            return false;
    }   

    
    validarcontenido(beanoperacionservicionewc:beanoperacionservicioscontenido):void{
        if(beanoperacionservicionewc.vchcodigooperacion == '1X' || beanoperacionservicionewc.vchcodigooperacion == '1W' || beanoperacionservicionewc.vchcodigooperacion == '1Z'){
            alert("No se puede insertar un servicio contenido");
            this.selectedcontenido =  null;
            return
        }
        if (this.IsRepetido(beanoperacionservicionewc)==true) {
            alert("No se puede insertar un servicio contenido porque ya existe");
            this.selectedcontenido =  null;
            return
        }
        this.clickContenido(beanoperacionservicionewc);
    }

    //funcion para agregar el contenido
    clickContenido(beanoperacionservicionewc:beanoperacionservicioscontenido){
        this.confirmationService.confirm({
                message: '¿Está seguro que desea agregar este Item?',
                accept: () =>{
           this._flatrateservice.Nuevocontenido(this.valor,this.cuadroSeleccionado3.vchcodigooperacion+this.cuadroSeleccionado3.chrcodigooperacionservicio,beanoperacionservicionewc.vchcodigooperacion,
           beanoperacionservicionewc.chrcodigooperacionservicio,beanoperacionservicionewc.chrestado,this.cuadroSeleccionado3.numcodigo,beanoperacionservicionewc.numcodigo)
            .subscribe(
                nuevocontenido => {
                    this.EscogerVerContenidos();
                    this.Getnumcodigooperacionmaestra();
                }
            )
                },
         reject: () =>{
                    this.selectedcontenido =  null;
                 }    
        })
    }

    //Comienzan las funciones para que me obtenga el cuadro de agregar contenido :)

    mostrarprodcontenido(produccio){
          this.Obtenersegundocombo(produccio.substring(0, 2));
    }

    mostrarprod2contenido(produccio2){
     this.Obtenergrillacontenido(produccio2.substring(0, 2));
    }

    Obtenerprimercombo(){
        this._flatrateservice.getProduccion()
                     .subscribe(
                       cuadros =>{
                           this.beanservicioscontenido = cuadros;
                           this.default = this.beanservicioscontenido[0].vchdescripcion
                           this.default1 = this.beanservicioscontenido[0].chrcodigoservicio  //trae como valor 01
                        this.Obtenersegundocombo(this.default1);} ,  
                       error =>  this.errorMessage = <any>error);
    }

    Obtenersegundocombo(argumento:string){ 
      this._flatrateservice.getProduccion2(argumento)
                     .subscribe(
                       cuadros2 => {this.beanoperacioncontenido = cuadros2;
                           this.default2= this.beanoperacioncontenido[0].vchdescripcion;
                           this.default3= this.beanoperacioncontenido[0].vchcodigooperacion;
                        //    console.log(this.default3),
                        this.Obtenergrillacontenido(this.default3);
                    },
                    error =>  this.errorMessage = <any>error);
    
    }

    Obtenergrillacontenido(argumento2:string){
      this._flatrateservice.getProduccion3(argumento2)
      .subscribe(
        beanoperacionservicios =>{this.beanoperacionserviciosnewcontenido = beanoperacionservicios
        },
        error => this.errorMessage = <any>error);
    }

    
    
    //INICIALIZA LAS FUNCIONES PARA QUE CARGEN AL MISMO INSTANTE
    ngOnInit(): void {
        this.Getnumcodigooperacionmaestra();
        this.buscardescripcion = '';
        this.Getnumcodigoop();
      this.Getnumcodigo();
      this.getCuadros();
       this._flatrateservice.getHorasHombre()
                     .subscribe(
                       hh => {this.beanHoraHombre = hh 
                           this.horahombre = this.beanHoraHombre[0].numhorashombre;
                           this.horahombre=parseFloat(this.horahombre.toFixed(2)); //sirve para redonderar los numeros
                           this.horahombredefault = this.beanHoraHombre[0].numhorashombre;
                           this.horahombredefault=parseFloat(this.horahombredefault.toFixed(2));
                        }, 
                       error =>  this.errorMessage = <any>error);
        // console.log(this.beanservicios);
        // console.log(this.beanoperacion);
        //el item es para el boton menu
    }

}

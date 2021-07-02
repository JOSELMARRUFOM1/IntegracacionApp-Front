import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray,Validators, FormControl } from '@angular/forms';
import * as  data  from  '~/assets/json/estados.json';
import * as  entornos from '../assets/json/Entornos.json'; //json s


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


 // variables generales 
 public ListaEstado: any = data;
 public ListaEntorno: any = entornos;

 busquedaform = new FormGroup({
   IdentificadorCI : new FormControl(''), 
   IdInterfaz : new FormControl(''), 
   Middleware : new FormControl(''),
   Entorno: new FormControl(''), 
   Estados : new   FormControl(''),
 }); 
 
 
 onBuscar() {
   
 }



}

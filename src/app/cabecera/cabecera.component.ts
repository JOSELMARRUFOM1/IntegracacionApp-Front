import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray,Validators, FormControl } from '@angular/forms';
import * as  data  from  '../assets/json/estados.json';
import * as  entornos from '../assets/json/Entornos.json';




@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // variables generales 
  public ListaEstado: any = data;
  public ListaEntorno: any = entornos;

  cabeceraform = new FormGroup({
    IdentificadorCI : new FormControl(''), 
    IdentificacionActivo : new FormControl(''), 
    Descripcion : new FormControl(''),
    Entorno: new FormControl(''), 
    Estados : new   FormControl(''),
  }); 
  
  
  onGuardar() {
    
  }



}

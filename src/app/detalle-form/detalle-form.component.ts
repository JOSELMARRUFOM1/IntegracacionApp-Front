import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray,Validators, FormControl } from '@angular/forms';
import * as  data  from  '../assets/json/estados.json';
import * as  entornos from '../assets/json/Entornos.json';





@Component({
  selector: 'app-detalle-form',
  templateUrl: './detalle-form.component.html',
  styleUrls: ['./detalle-form.component.css']
})
export class DetalleFormComponent implements OnInit {

  
  constructor() { }
  ngOnInit(): void {
  }
  
 // variables generales 
 Accion = new FormControl('');  

  detalleform = new FormGroup({
    Middleware: new FormControl(''), 
    Estados : new   FormControl(''),
    SecuenciaOrigen: new FormControl(''),
    SecuenciaDestino: new FormControl(''),
    InstanciaOrigen: new FormControl(''),
    InstanciaDestino: new FormControl(''),
    ConexionOrigen : new FormControl(''),
    ConexionDestino : new FormControl(''),
    UsuarioComunicaciónOrigen : new FormControl(''),
    UsuarioComunicaciónDestino : new FormControl(''), 
    CertificadoOrigen : new FormControl(''), 
    CertificadoDestino : new FormControl(''),
    JobRelacionadoOrigen : new FormControl(''),
    JobRelacionadoDestino  : new FormControl(''),
    CelulaResponsableOrigen : new FormControl(''),
    CelulaResponsableDestino : new FormControl(''),
    ConectorOrigen : new FormControl(''),
    ConectorDestino : new FormControl(''),
    SistemaLogicoOrigen : new FormControl(''),
    SistemaLogicoDestino : new FormControl(''),   

  });  
  
  public ListaEstado: any = data;
  public ListaEntorno: any = entornos;

  // Eventos de la vista  
  onSubmit() {
    
  }

  

}

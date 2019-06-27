import { Component, OnInit } from '@angular/core';
// Importo el servicio y la interfaz
import { ServicesService, ServiceInterface } from '../../services/services.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  //crear un array de tipo interfaz personalizado creado en el servicio
  servicios:ServiceInterface [] = [];

  
  //Instanciar el servicio
  constructor(private _ServicesService:ServicesService) {

  }


  ngOnInit(){
    this.servicios  = this._ServicesService.getServicios();
    console.log(this.servicios);
  }
}


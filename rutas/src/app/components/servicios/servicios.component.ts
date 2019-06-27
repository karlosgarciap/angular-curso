import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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
  router:any;
  
  //Instanciar el servicio
  constructor(private _router:Router, private _ServicesService:ServicesService, private activatedRoute: ActivatedRoute) {
    this.router = _router;
  }


  ngOnInit(){
    // Controls if is called from servicios page or from finder
    if (this._router.url == '/servicios') {
      this.servicios  = this._ServicesService.getServicios();
    } else {
      this.activatedRoute.params.subscribe(params => {
        this.servicios  = this._ServicesService.getServicioByString(params['servicio']);
      })
      
    }
  }

}


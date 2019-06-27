import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  servicio:any = {};

  constructor(private activeRoutes: ActivatedRoute, private _servicioService: ServicesService) {

    this.activeRoutes.params.subscribe(params => {
      this.servicio = _servicioService.getServicioById(params['id']);
    })
    
    console.log(this.servicio);
   }

  ngOnInit() {
    
  }

}

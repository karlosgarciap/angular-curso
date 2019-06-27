import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  servicios:any = {};

  servicioService:any;

  constructor(private router: Router, private _servicioService: ServicesService) { 

      this.servicioService = _servicioService;
      
      
   }

  ngOnInit() {
  }

  // method to find service by string triggered from finder
  findServicio(servicio) {
      //call to method inside the service
      this.servicios = this.servicioService.getServicioByString(servicio);
      console.log(this.servicios);
      this.router.navigate(['/busqueda', servicio]);
      return false;
  }
}

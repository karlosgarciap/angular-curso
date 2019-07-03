import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../../../../../rutas/src/app/services/services.service";
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  car: any = {};

  constructor(private activeRoutes: ActivatedRoute, private carService: CarsService) {

      this.activeRoutes.params.subscribe(params => {
          this.car = carService.getCarById(params['id']);
      })


  }

  ngOnInit() {
      console.log(this.car);
  }

}

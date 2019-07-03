import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarInterface, CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

    cars: CarInterface [] = [];

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private carsService: CarsService) {
        this.activatedRoute.params.subscribe(params => {
            // this.cars = this.carsService.getCarsByParams(params.str, params.precio, params.garantia, params.cambio);
        });
    }

    ngOnInit() {
      this.cars = this.carsService.getCars();
      // console.log(this.cars);
        // this.router.navigate(['/lista-cars']);

    }

    // Parent method
    verCar(i: number) {
         this.router.navigate(['/details', i]);
    }
}


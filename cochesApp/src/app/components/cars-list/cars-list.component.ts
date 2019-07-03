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

  }

  ngOnInit() {
    this.cars = this.carsService.getCars();
    console.log(this.cars);
  }

    // Parent method
    verCar(i: number) {
        this.router.navigate('car', i);
    }
}


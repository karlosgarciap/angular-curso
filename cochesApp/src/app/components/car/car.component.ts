import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  // Definir inputs y Output en el Card

  @Input() car: any = {};
  @Input() i: number;
  @Output() carSelected: EventEmitter<number>;

  constructor() {
    this.carSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  // metodo que escucha

  verCar() {
    this.carSelected.emit(this.i);
  }
}

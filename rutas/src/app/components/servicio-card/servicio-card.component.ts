import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-servicio-card',
  templateUrl: './servicio-card.component.html',
  styleUrls: ['./servicio-card.component.css']
})
export class ServicioCardComponent implements OnInit {

  @Input() servicio: any = {};
  @Input() i: number;
  @Output() servicioSelected: EventEmitter<number>;

  constructor() {
    this.servicioSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  verServicio() {
    this.servicioSelected.emit(this.i);
  }

}

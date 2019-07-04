import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  @Input() pais: any = {};
  @Input() i: number;
  @Output() paisSelected: EventEmitter<number>;
  constructor() {
    this.paisSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  verPais(i: number) {
    this.paisSelected.emit(i);
  }
}

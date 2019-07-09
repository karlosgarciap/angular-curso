import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  @Input() pais: any = {};
  @Output() paisSelected: EventEmitter<string>;

  constructor() {
    this.paisSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  // crear el metodo en el hijo para que pueda ser invocado.
  verPais(code: string) {
    console.log(code);
    this.paisSelected.emit(code);
  }
}

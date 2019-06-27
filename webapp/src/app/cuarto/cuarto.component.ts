import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuarto',
  templateUrl: './cuarto.component.html',
  styleUrls: ['./cuarto.component.sass']
})
export class CuartoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name:string;
  age:number;
  sendData(nombre, edad){
    console.log(edad.value);
    console.log(nombre.value);
    this.name = nombre.value;
    this.age = edad.value;
    return false;
  }

}

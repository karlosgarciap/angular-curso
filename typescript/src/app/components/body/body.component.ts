import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-rutas',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  animales = [];
  length:number;
  totalLength:number; 
  show: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  addAnimal(animal){
    if (animal.value!="") {
      console.log(animal.value);
      let animalLength = 0;
      animalLength = animal.value.length;
      this.animales.push(animal.value);
      this.mostrarInfo(animal.value.length)
      animal.value = "";
      animal.focus();
      this.contarTotal();
    }
    return false;
  }

  mostrarInfo(longitud) {
    this.length = longitud;
  }

  contarTotal() {
    this.totalLength = 0;
    this.animales.forEach(element => {
      this.totalLength = this.totalLength + element.length;
    });
  }

  
}

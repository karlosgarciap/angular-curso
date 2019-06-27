import { Component } from '@angular/core';

@Component({
  selector: 'web-app',
  templateUrl: 'segundoComponente.html',
  styleUrls: ['segundoComponente.css']
})
export class segundoComponente {
  titulo = "Karlos";
  animales:string[] = ["Gato", "Perro", "Pajaro", "Mono"];
  eliminarAnimal(animal) {
    for (let i=0; i<this.animales.length;i++) {
      if (animal == this.animales[i]) {
        this.animales.splice(i, 1);
      }
    }
  }

  addAnimal(animal){
    console.log(animal.value);
    this.animales.push(animal.value);
    animal.value = "";
    animal.focus();
    return false;
  }

  
}
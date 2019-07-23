import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario: object = {
      name: null,
      apellido: null,
      email: null,
      paises: ''
  };

  paises = [{
        cod: 'ITA',
        nombre: 'Italia',
      },
      {
        cod: 'ENG',
        nombre: 'Inglaterra',
      },
      {
        cod: 'IRL',
        nombre: 'Irlanda',
      },
      {
        cod: 'FR',
        nombre: 'Francia',
      }
      ];
  guardar(forma: NgForm) {
    console.log(forma);
    console.log(this.usuario['name']);
  }

  constructor() { }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

  items = ['Marketing', 'Desarrollo', 'Sistemas'];

  constructor() { 
    /*
    this.items.push(
      {title:'Marketing', precio:25},
      {title:'Desarrollo', precio:35},
      );
    */
  }

  ngOnInit() {
  }

}

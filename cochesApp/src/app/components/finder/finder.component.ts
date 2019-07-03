import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/lista-cars', '', 0, 0, '']);
  }

  search(str: string, precio: number, garantia: number, cambio: string){
    console.log(str);
    console.log(precio);
    console.log(garantia);
    console.log(cambio);
    this.router.navigate(['lista-cars', str, precio, garantia, cambio]);
  }



}

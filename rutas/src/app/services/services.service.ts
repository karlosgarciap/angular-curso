import { Injectable } from '@angular/core';

@Injectable()

export class ServicesService {
    //Declarar un array con el interfaz qe he creado abajo
    private services:ServiceInterface[] = 
  [
    {
      nombre: 'Marketing',
      precio: 350
    },
    {
      nombre: 'Desarrollo',
      precio: 555
    },
    {
      nombre: 'Sistemas',
      precio: 650
    },
    {
      nombre: 'Big Data',
      precio: 1500
    },
    {
      nombre: 'SEO',
      precio: 225
    }
  ]

    constructor() {
        console.log('El servicio está listo!')
    }

    //metodo para obtener el array
  getServicios() {
    return this.services;
  }
}

// Interfaz personalizado
export interface ServiceInterface {
    nombre:string;
    precio:number;
}
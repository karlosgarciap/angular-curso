import { Injectable } from '@angular/core';

@Injectable()

export class ServicesService {
    // Declarar un array con el interfaz qe he creado abajo
    private services: ServiceInterface[] = [
    {
      id: 0,
      nombre: 'Marketing',
      precio: 350
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      precio: 555
    },
    {
      id: 2,
      nombre: 'Sistemas',
      precio: 650
    },
    {
      id: 3,
      nombre: 'Big Data',
      precio: 1500
    },
    {
      id: 4,
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

  getServicioById(id) {
    return this.services[id];
  }

  
  getServicioByString(data) {
    let servicios = [];
    this.services.forEach(element => {
      if (element.nombre.toLowerCase().includes(data.toLowerCase())) {
        servicios.push(element);
      }
    });
    return servicios;
  }
}

// Interfaz personalizado
export interface ServiceInterface {
    id:number;
    nombre:string;
    precio:number;
}
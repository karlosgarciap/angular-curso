import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {

    carSearch: CarInterface [] = [];

  private cars: CarInterface[] =
      [
        {
            id: 1,
            nombre: 'SMART fortwo 0.9 66kW 90CV COUPE 3p.',
            precio: 15400,
            garantia: 2,
            cambio: 'automatico',
            img: 'https://a.ccdn.es/cnet/2019/06/21/39596160/191871495_g.jpg'
        },
        {
            id: 2,
            nombre: 'PEUGEOT Rifter GT Line Standard PureTech 81kW 5p.',
            precio: 19340,
            garantia: 4,
            cambio: 'manual',
            img: 'https://a.ccdn.es/cnet/2019/06/26/39693225/192706084_g.jpg'
        },
        {
            id: 3,
            nombre: 'FORD Focus 1.0 Ecoboost 92kW STLine 5p..',
            precio: 23597,
            garantia: 3,
            cambio: 'manual',
            img: 'https://a.ccdn.es/cnet/2018/12/10/36454873/168905918_g.jpg'
        },
        {
            id: 4,
            nombre: 'ALFA ROMEO Giulia 2.2 JTDM 154kW 210CV Veloce ATX 4p.',
            precio: 42500,
            garantia: 4,
            cambio: 'automatico',
            img: 'https://a.ccdn.es/cnet/2019/06/03/39269178/191110812_g.jpg'
        },
        {
            id: 5,
            nombre: 'PEUGEOT 5008 Allure 1.2L PureTech 96kW 130CV SS 5p.',
            precio: 25330,
            garantia: 6,
            cambio: 'manual',
            img: 'https://a.ccdn.es/cnet/2019/06/21/39604040/191968860_g.jpg'
        },
        {
            id: 6,
            nombre: 'FORD Kuga 1.5 EcoBoost 88kW 4x2 Trend 5p.',
            precio: 20990,
            garantia: 2,
            cambio: 'manual',
            img: 'https://a.ccdn.es/cnet/2019/06/18/39546643/192476586_g.jpg'
        },
        {
            id: 7,
            nombre: 'NISSAN JUKE G E6DTemp 83 kW112 CV 5MT NCONNECTA 5p.',
            precio: 17899,
            garantia: 5,
            cambio: 'automatico',
            img: 'https://a.ccdn.es/cnet/2019/06/03/39269178/191110812_g.jpg'
        },
        {
            id: 8,
            nombre: 'PEUGEOT Rifter Allure Standard BlueHDi 73kW 5p.',
            precio: 19435,
            garantia: 4,
            cambio: 'manual',
            img: 'https://a.ccdn.es/cnet/2019/06/26/39688834/192654028_g.jpg'
        }
      ];


        constructor() {
            console.log('Service loaded');
        }

        getCars() {
            return this.cars;
        }

        getCarById(id: number) {
            let car: CarInterface;
            this.cars.forEach(element => {
                if (element.id == id) {
                    car = element;
                }
            });

            return car;
        }

        getCarsByParams(str: string, precio: number, garantia: number, cambio: string) {
            if (str.length > 0) {

            this.cars.forEach(element => {
                if (element.nombre.toLowerCase().includes(str)) {
                    this.carSearch.push(element);
                }
            });

            }
            return false;
        }
  }


export interface CarInterface {
  id: number;
  nombre: string;
  precio: number;
  garantia: number;
  cambio: string;
  img: string;
}

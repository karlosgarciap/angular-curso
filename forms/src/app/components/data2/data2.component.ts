import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrls: ['./data2.component.css']
})
export class Data2Component implements OnInit {

  usuario: object = {
    // Creamos un nuevo grupo
    nombreCompleto: {
      nombre: 'Karlos',
      apellido: 'Garcia',
    } ,
    // dejamos el mail fuera en este ejemplo
    email: 'karlos.garciap@gmail.com'
  };

  // Instanciar Forma
  forma: FormGroup;

  guardarCambios() {

    this.forma.reset({
          nombreCompleto: {
            nombre: '',
            apellido: ''
          },
          email: ''
        }
    );
  }

  constructor() {
    this.forma = new FormGroup({

      nombreCompleto: new FormGroup({
          nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
          apellido: new FormControl('', Validators.required)
        }),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')])

    });

    this.forma.setValue(this.usuario);
  }

  ngOnInit() {
  }


}

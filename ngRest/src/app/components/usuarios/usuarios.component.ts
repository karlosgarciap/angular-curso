import { Component, OnInit } from '@angular/core';
import { RestService } from "../../rest.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent implements OnInit {

    users:any = [];

    constructor(private _RestService: RestService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this._RestService.getUsers().subscribe((data: {}) => {
            this.users = data;
            console.log(this.users);
        });
    }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RestService} from "../../rest.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass']
})
export class UsuarioComponent implements OnInit {

    user:any = [];

    constructor(private _RestService: RestService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.getUser();
    }


    getUser() {
        this.route.params.subscribe(params => {
            this.user = this._RestService.getUser(params['id']);
        })
    }
}

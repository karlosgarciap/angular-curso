import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {PaisService} from "../../pais.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  pais: any = {};

  constructor(private http: HttpClient, private router: Router,
              private activatedRoute: ActivatedRoute,
              private paisService: PaisService) {
      this.pais = this.paisService.getRandomPais();
  }

  ngOnInit() {
  }

}

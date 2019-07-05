import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PaisService} from "../../pais.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    paises: any[] = [];

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private paisService: PaisService) {
    }

    ngOnInit() {
        console.log(this.activatedRoute.paramMap);
        this.activatedRoute.params.subscribe(params => {
            this.paisService.getPaisesByRegion(params['paises']).subscribe(
                (resp: any) => {
                    this.paises = resp;
                }
            );
        });
    }


    // Parent method
    verPais(i: number) {
        this.router.navigate(['/details', i]);
    }

}

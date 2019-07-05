import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {PaisService} from "../../pais.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    regionUrl: string = 'https://restcountries.eu/rest/v2/region/';

    @Input() paises: any[] = [];

    constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private paisService: PaisService) {
    }

    ngOnInit() {
        this.paisService.getPaises().subscribe(
            (res:any) => { this.paises = res; }
            );
    }

    // Parent method
    search(region: string) {
        if (region === '') {
            this.regionUrl = 'https://restcountries.eu/rest/v2/all';
        } else {
            this.regionUrl = 'https://restcountries.eu/rest/v2/region/';
        }

        this.paisService.getPaisesByRegion(region).subscribe(
            (resp: any) => {
                this.paises = resp;
            }
        );

    }


}

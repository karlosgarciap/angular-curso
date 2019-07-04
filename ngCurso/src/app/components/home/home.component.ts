import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    paises: any[] = [];

    regionUrl: string = 'https://restcountries.eu/rest/v2/region/';

    constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.http.get('https://restcountries.eu/rest/v2/all').subscribe(
            (resp: any) => {
                this.paises = resp;
            }
        );
    }

    // Parent method
    search(region: string) {
        if (region === '') {
            this.regionUrl = 'https://restcountries.eu/rest/v2/all';
        } else {
            this.regionUrl = 'https://restcountries.eu/rest/v2/region/';
        }

        this.http.get(this.regionUrl + region).subscribe(
            (resp: any) => {
                console.log(resp);
                this.paises = resp;
            }
        );

    }

    // Parent method
    verPais(i: number) {
        this.router.navigate(['/details', i]);
    }


}

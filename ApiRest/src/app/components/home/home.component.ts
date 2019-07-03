import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  paises: any[] = [];
  constructor(private http: HttpClient) {
     this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(
         (resp: any) => {
           console.log(resp)
          this.paises = resp;
        }
    );
  }


}

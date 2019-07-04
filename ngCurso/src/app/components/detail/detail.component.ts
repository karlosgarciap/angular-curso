import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pais: any = {};
  regionUrl = 'https://restcountries.eu/rest/v2/alpha/'
  constructor(private http: HttpClient , private activeRoutes: ActivatedRoute) {
    console.log (this.activeRoutes.params);
    this.activeRoutes.params.subscribe(params => {
      this.http.get(this.regionUrl + params.i).subscribe(
          (resp: any) => {
            console.log(resp);
            this.pais = resp;
          }
      );
    });
  }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

    paises: any[] = [];

    baseUrl: string = 'https://restcountries.eu/rest/v2/';
    regionUrl: string = 'region/';
    nameUrl: string = 'name/';

    constructor(private http: HttpClient) { }


    getPaises() {
        return this.http.get(this.baseUrl + 'all');
    }

    getPaisesByRegion(region:string) {
        if (region === '') {
            return this.http.get(this.baseUrl + 'all');
        }
        return this.http.get(this.baseUrl + this.regionUrl + region);
    }

    getPaisesByString(str:string) {
        if (region === '') {
            return this.http.get(this.baseUrl + 'all');
        }

        return this.http.get(this.baseUrl + this.nameUrl + str);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

    paises: any[] = [];

    baseUrl: string = 'https://restcountries.eu/rest/v2/';
    regionUrl: string = 'region/';
    nameUrl: string = 'name/';

    regions: any[] = [
        {
            id: 0,
            nombre: 'africa'
        },{
            id: 1,
            nombre: 'americas'
        },{
            id: 2,
            nombre: 'asia'
        },{
            id: 3,
            nombre: 'europe'
        },{
            id: 4,
            nombre: 'oceania'
        }
    ];


    constructor(private http: HttpClient) { }

    getPaises(): Observable<any> {
        return this.http.get(this.baseUrl + 'all');
    }

    getPaisesByParam(param: string): Observable<any> {

        if (param === '') {
            return this.http.get(this.baseUrl + 'all');
        }

        let isRegion = false;

        this.regions.forEach(function(element) {
            if (param === element.nombre) {
                isRegion = true;
            }
        });

        if (isRegion) {
            return this.http.get(this.baseUrl + this.regionUrl + param);
        } else {
            return this.http.get(this.baseUrl + this.nameUrl + param);
        }
    }

    getPaisesByRegion(region: string): Observable<any> {
        if (region === '') {
            return this.http.get(this.baseUrl + 'all');
        }
        return this.http.get(this.baseUrl + this.regionUrl + region);
    }

    /*
    getPaisesByString(str:string) {
        if (str != '') {
            return this.http.get(this.baseUrl + 'all');
        } else {
            return this.http.get(this.baseUrl + this.nameUrl + str);
        }


    }
    */
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


// providedIn: root permite no tener que incluirlo en providers (app.module.ts) gracias a las ultimas versiones de angular
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient, ) { }

    accessToken = 'BQA7UnPdMYDLg81QMw7olxXck9IPQ5cV3uzrkNXZpVsANf9BKjf7kZE3LVBb1WoJ8mkQTFO-BZ1OkwZxd0Y';

    getNewReleases() {

        // crear la constante headers para meter el token y el tipo
        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + this.accessToken
        });

        return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=es&limit=20', {headers});
    }

    search(str) {
        // crear la constante headers para meter el token y el tipo
        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + this.accessToken
        });

        return this.http.get('https://api.spotify.com/v1/search?type=album&q=' + str, {headers});
    }
}

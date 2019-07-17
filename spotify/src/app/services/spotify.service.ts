import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";


// providedIn: root permite no tener que incluirlo en providers (app.module.ts) gracias a las ultimas versiones de angular
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) { }

    accessToken = 'BQBwC10lpKxhWZzW6iiffD4n28BnfIQpykCTe0XVX_qkgHjikm6Q3gvuzovXgYh4G7ggdY8XwAG5jBRthDg';

    getQuery(query: string) {
            const url = 'https://api.spotify.com/v1/' + query;

            // crear la constante headers para meter el token y el tipo
            const headers = new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            });

            return this.http.get(url, {headers});
    }

    getNewReleases() {
        return this.getQuery('browse/new-releases?country=es&limit=20')
            .pipe( map(data => data['albums'].items));
    }

    search(str) {
        return this.getQuery('search?type=artist&q=' + str)
            .pipe( map(data => data['artists'].items));
    }

    getArtistById(id) {

        return this.getQuery('artists/' + id)
            .pipe( map(data => data));
    }

    getTopTracksByArtistId(id) {

        return this.getQuery('artists/' + id + '/top-tracks?country=ES')
            .pipe( map(data => data));
    }
}

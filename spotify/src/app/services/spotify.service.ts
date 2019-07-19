import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";


// providedIn: root permite no tener que incluirlo en providers (app.module.ts) gracias a las ultimas versiones de angular
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) { }

    accessToken = 'BQCf0h7NoRTN6ma52IcNE-FZPkSk5DhBDiuWgRLEBqLSaknMvFj4-3n1y6PpUrBhvTOsTeHPb612nAY4iLw';

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

        return this.getQuery('artists/' + id);
    }

    getTopTracksByArtistId(id) {

        return this.getQuery('artists/' + id + '/top-tracks?country=US');
    }

    /* IMPORTANTE: Se usa el PIPE para filtrar y poder elegir que queremos recibir de toda la oinformacion que recibimos en una llamada */

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

    endpoint:string;

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

    constructor(private http: HttpClient) {
        const endpoint = "http://localhost/api/web/app_dev.php/api/v1/";
        this.endpoint = endpoint;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
        console.log(endpoint);
    }

    getUsers(): Observable<any> {
        return this.http.get(this.endpoint + 'usuarios').pipe(
            map(this.extractData),
            catchError(this.handleError<any>('getUsers'))
        );
    }

    getUser(id): Observable<any> {
        console.log(this.endpoint + 'usuario/' + id);
        return this.http.get(this.endpoint + 'usuario/' + id).pipe(
            map(this.extractData),
            catchError(this.handleError<any>('getUser'))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}

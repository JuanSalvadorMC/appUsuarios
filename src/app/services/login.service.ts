import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    private urlApi: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient) { }

  listusers(){
    return this.http.get(`${this.urlApi}/users`).pipe(
        tap( auth => this.authToken=auth ),
        tap ( auth => {localStorage.setItem('idToken',this.authToken.token); localStorage.setItem('mail',this.usuario); })
    );
}

}

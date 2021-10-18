import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private urlApi: string = environment.baseUrl;
    private authToken:any;
    private usuario:string;

    get getUsuario(){
        return this.usuario
    }
    get auth(){
        return this.authToken
    }

    constructor(private http: HttpClient) { }

    login(data){
        this.usuario=data.email;
        if (data.password!='pistol') {
            return of(false);
        }
        return this.http.post(`${this.urlApi}/login`,data).pipe(
            tap( auth => this.authToken=auth ),
            tap ( auth => {localStorage.setItem('idToken',this.authToken.token); localStorage.setItem('mail',this.usuario); })
        );
    }
    logout(){
        this.authToken=undefined;
        localStorage.removeItem('idToken')
        localStorage.removeItem('mail')
    }


    autentificacion():Observable <boolean>{
        if (!localStorage.getItem('idToken')) {
            return of(false)
        }
        this.usuario=localStorage.getItem('mail');
        return of(true);
    }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private urlApi: string = environment.baseUrl;

    constructor( private http: HttpClient) { }

    /* LISTA DE USUARIOS SERVICE */
    listUsers(page?){
        if (page) {
        page=page+1;
        return this.http.get(`${this.urlApi}/users?page=${page}`);
        }
        return this.http.get(`${this.urlApi}/users`);
    }
     /* ACTUALIZAR USUARIO SERVICE */
    updateUser(data){
            return this.http.put(`${this.urlApi}/users/2`,data);
    }
     /* DETALLES DE USUARIO SERVICE */
    infoUser(id){
            return this.http.get(`${this.urlApi}/users/${id}`);
    }
    /* TRAER POSTS DE USUARIO SERVICE */
    postsService(id){
        return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    }

}

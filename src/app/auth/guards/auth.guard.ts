
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route , UrlSegment , CanLoad,  CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {

    constructor (private authService: AuthService, private router:Router){

    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.autentificacion().pipe(
            tap( authOn => {
                if (!authOn) {
                    console.log("Bloqueado por Guard");
                    this.router.navigate(['./auth/login']);
                }
            })
        )
        
  }
  canLoad(
    route: Route,
    state: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.autentificacion().pipe(
            tap( authActive => {
                if (!authActive) {
                    console.log("Bloqueado por Guard");
                    this.router.navigate(['./auth/login']);
                }
            })
        )
  }
  
}


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
                    this.router.navigate(['./auth/login']);
                }
            })
        )
        /* if (this.authService.auth) {
            return true
        }
    return false; */
  }
  canLoad(
    route: Route,
    state: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.autentificacion().pipe(
            tap( authActive => {
                if (!authActive) {
                    this.router.navigate(['./auth/login']);
                }
            })
        )
       /*  if (this.authService.auth) {
            return true;
        }
        
    return false; */
  }
  
}

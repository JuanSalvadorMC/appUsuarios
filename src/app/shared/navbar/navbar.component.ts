import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( 
    private router:Router, 
    private authService:AuthService, 
    ) { }
    
    ngOnInit(): void {
    }

    get getUsuario(){
        return this.authService.getUsuario;
    }
    logout(){
        this.authService.logout();
        this.router.navigate(['./auth/home']);
    }
  

}

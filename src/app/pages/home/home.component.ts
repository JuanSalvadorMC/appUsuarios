import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    
    get auth(){
        return this.authService.auth;  
    }
    get getUsuario(){
        return this.authService.getUsuario;
    }


  constructor(
      private router: Router,
      private authService:AuthService
    ) { }

  ngOnInit(): void {
      this.listaUsuarios();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['./auth'])
  }
  listaUsuarios(){

  }

}

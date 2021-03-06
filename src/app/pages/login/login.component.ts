import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    dataUser:JSON;
    formLogin: FormGroup;
    mostrarUsuario=false;
    errorRequest=false;

  constructor( 
      private usersService:UsersService,
      private router:Router, 
      private authService:AuthService, 
      ) { }

    ngOnInit(): void {
        this.crearFormulario();
    }
    crearFormulario(){
        this.formLogin = new FormGroup ({
        email:    new FormControl ( '', [Validators.required, Validators.email] ),
        password: new FormControl ( '', [Validators.required, Validators.minLength(6)]),
        })
    }
    logout(){
        this.authService.logout();
        this.router.navigate(['./page/home']);
    }
    login() {
            this.dataUser=(this.formLogin.getRawValue());
            this.authService.login (this.dataUser).subscribe(resp  =>{
                console.log(resp);
                if (resp==false) {
                    this.errorRequest=true;
                }
                if (resp!=null) {
                    this.router.navigate(['./page/home']);
                }
                
            },err => {
                console.log('error');
                this.errorRequest=true;
            });
        }

}

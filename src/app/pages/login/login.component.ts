import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    termino:string='sffsfs';

  constructor( private LoginService:LoginService) { }

  ngOnInit(): void {
  }
  buscar(){
      console.log(this.termino);
      this.LoginService.buscarPais(this.termino).subscribe((resp)=>{
          console.log(resp);
          if (resp.status==404) {
              console.log(`Error: ${resp.message}`);
              
          }
          
          
      }, (err)=>{

          console.log('error xd');
          console.info(err);
          
      });
      
  }

}

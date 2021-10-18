import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    ocultarPosts=true;
    usuarios:any;
    detalleUsuario:any;
    pageEvent: PageEvent;
    formEditUser: FormGroup;
    editarUsuario=false;
    posts:any;
    itemsPerPageLabel="quinda";
    

  constructor(
      private router: Router,
      private authService:AuthService,
      private usersService:UsersService,
    ) { }
   
  ngOnInit(): void {
    this.traerUsuarios();
    this.crearFormulario();
  }
  crearFormulario(){
    this.formEditUser = new FormGroup ({
        email: new FormControl({value:''}),
        first_name: new FormControl ( '', [Validators.required]),
        last_name:    new FormControl ( '', [Validators.required] ),
        acercaDe: new FormControl ( '', [Validators.required]),
        job: new FormControl ( {vaue:'Escritor'}),
        age: new FormControl ( '', [Validators.required]),
    })   
  }
  traerUsuarios(page?){
    this.usersService.listUsers(page).subscribe(resp=>{
        this.usuarios=resp;
        if (resp) {
            console.log("Servicio traerUsuarios:",resp);
            
            this.usuarios= this.usuarios.data; 
        }
        });
  }
  obtenerDetalles( id:string){      
      this.usersService.infoUser(id).subscribe(resp=>{
        if (resp) {
            this.detalleUsuario=resp;
            this.detalleUsuario=this.detalleUsuario.data;
            console.log("Servicio obtenerDetalles:",this.detalleUsuario);
            this.formEditUser.get('email').setValue(this.detalleUsuario.email);
            this.formEditUser.get('first_name').setValue(this.detalleUsuario.first_name);
            this.formEditUser.get('last_name').setValue(this.detalleUsuario.last_name);
            this.formEditUser.get('job').setValue(this.detalleUsuario.job="Escritor");
            this.formEditUser.get('acercaDe').setValue(this.detalleUsuario.acercaDe="Creativo, espontaneo, amante de los video juegos");
            this.formEditUser.get('age').setValue(this.detalleUsuario.age="32");
        }
      });
  }
  actualizarUsuario(data?){
    data=this.formEditUser.getRawValue();
    data.avatar=this.detalleUsuario.avatar;
    data.id=this.detalleUsuario.id;
    console.log(data);
        this.usersService.updateUser(data).subscribe(resp =>{
            console.log("Servicio Actualizarusuario:",resp);
            if (resp) {
                this.detalleUsuario=resp;
                this.editarUsuario=!this.editarUsuario;
            }       
        })
  }
  obtenerPosts(idUser){
    this.ocultarPosts=false;
    this.usersService.postsService(idUser).subscribe(resp =>{
        if (resp) {
            this.posts=resp
            console.log("Servicio obtenerPosts:",this.posts);
        }  
    })
  }
  ocultarPost(){
    this.ocultarPosts=true;
  }
  borrarPost(id){
    this.posts=this.posts.filter(function(car) {
            return car.id !== id; 
        });
        console.log(this.posts);
    }
}

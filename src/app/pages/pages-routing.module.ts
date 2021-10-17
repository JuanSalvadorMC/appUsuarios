import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const rutasPages : Routes =[
    {
        path:'',
        children:[
            {
                path:'',component:LoginComponent,
                pathMatch:'full'
            },
            {
                path:'home',component: HomeComponent
            },
            
        ]
    },
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutasPages)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }

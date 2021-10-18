import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const rutasPages : Routes =[
    {
        path:'',
        children:[
            {
                path:'',component:HomeComponent,
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

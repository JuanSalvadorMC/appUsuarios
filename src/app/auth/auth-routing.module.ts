import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';


const routes:Routes=[
    {
        path:'',
        children:[
            {
                path:'',component:LoginComponent,
                pathMatch:'full'
            },
            {
                path:'login',component: LoginComponent
            },
            {
                path:'registro',component: LoginComponent
            },
            {
                path:'**',redirectTo:'auth/login'
            },
        ]
    }
]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AuthRoutingModule { }

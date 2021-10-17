import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const rutasMain: Routes = [
    {
        path:'',
        loadChildren:() => import ('./pages/pages.module').then(m => m.PagesModule)
    },
    {
        path:'auth',
        loadChildren:() => import ('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path:'**',
        redirectTo:'auth/login'
    },
];

@NgModule({
  imports: [
      RouterModule.forRoot(rutasMain)
    ],
  exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }

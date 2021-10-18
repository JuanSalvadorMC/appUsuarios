import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const rutasMain: Routes = [
    {
        path:'page',
        loadChildren:() => import ('./pages/pages.module').then(m => m.PagesModule),
        canLoad:[AuthGuard],
        canActivate:[AuthGuard]
    },
    {
        path:'auth',
        loadChildren:() => import ('./auth/auth.module').then(m => m.AuthModule),
        
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

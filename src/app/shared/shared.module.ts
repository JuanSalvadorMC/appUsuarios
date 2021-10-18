import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@Injectable({
    providedIn: 'root'
  })

@NgModule({
  declarations: [
    NavbarComponent
  ],exports: [
    NavbarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class SharedModule { }

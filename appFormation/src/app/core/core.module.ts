import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { IconsModule } from '../icons/icons.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    PageHomeComponent,
    PageNotFoundComponent,
    PageLoginComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ], exports: [
    NavbarComponent
  ]
})
export class CoreModule { }

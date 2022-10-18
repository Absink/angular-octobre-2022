import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    TableLightComponent,
    BtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ], exports: [
    TableLightComponent,
    BtnComponent
  ]
})
export class SharedModule { }

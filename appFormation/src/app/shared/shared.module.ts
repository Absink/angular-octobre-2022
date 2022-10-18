import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [
    TableLightComponent,
    BtnComponent,
    TotalPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ], exports: [
    TableLightComponent,
    BtnComponent,
    TotalPipe
  ]
})
export class SharedModule { }

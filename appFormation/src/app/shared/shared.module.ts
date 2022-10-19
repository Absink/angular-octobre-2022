import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { ColorDayDirective } from './directives/color-day.directive';
import { UserConnectedDirective } from './directives/user-connected.directive';
import { CardLightComponent } from './components/card-light/card-light.component';



@NgModule({
  declarations: [
    // Components
    TableLightComponent, BtnComponent, CardLightComponent,

    // Pipes
    TotalPipe, DaysPipe,

    // Directives
    ColorStateDirective, ColorDayDirective, UserConnectedDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ], exports: [
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    DaysPipe,
    ColorStateDirective,
    ColorDayDirective,
    UserConnectedDirective,
    CardLightComponent
  ]
})
export class SharedModule { }

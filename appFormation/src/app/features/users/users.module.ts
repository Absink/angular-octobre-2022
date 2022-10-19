import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageSettingsComponent } from './page-settings/page-settings.component';
import { PageListUsersComponent } from './page-list-users/page-list-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    PageSettingsComponent,
    PageListUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class UsersModule { }

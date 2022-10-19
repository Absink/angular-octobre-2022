import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageSettingsComponent } from './page-settings/page-settings.component';
import { PageListUsersComponent } from './page-list-users/page-list-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageAddUserComponent } from './page-add-user/page-add-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageSettingsComponent,
    PageListUsersComponent,
    PageAddUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }

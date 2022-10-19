import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddUserComponent } from './page-add-user/page-add-user.component';
import { PageListUsersComponent } from './page-list-users/page-list-users.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';

const routes: Routes = [
  { path: 'myAccount', component: PageSettingsComponent },
  { path: '', component: PageListUsersComponent },
  { path: 'add', component: PageAddUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListUsersComponent } from './page-list-users/page-list-users.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';

const routes: Routes = [
  { path: 'myAccount', component: PageSettingsComponent },
  { path: '', component: PageListUsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

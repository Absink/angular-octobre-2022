import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSettingsComponent } from './page-settings/page-settings.component';

const routes: Routes = [
  { path: 'myAccount', component: PageSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

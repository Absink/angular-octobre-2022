import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDetailsClientComponent } from './page-details-client/page-details-client.component';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';

const routes: Routes = [
  { path: '', component: PageListClientsComponent },
  { path: ':id', component: PageDetailsClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }

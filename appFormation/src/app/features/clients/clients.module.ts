import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { PageDetailsClientComponent } from './page-details-client/page-details-client.component';


@NgModule({
  declarations: [
    PageListClientsComponent,
    PageDetailsClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }

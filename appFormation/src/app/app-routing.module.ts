import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './core/page-home/page-home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { PageListClientsComponent } from './features/clients/page-list-clients/page-list-clients.component';
import { PageListOrdersComponent } from './features/orders/page-list-orders/page-list-orders.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'orders', component: PageListOrdersComponent },
  { path: 'clients', component: PageListClientsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

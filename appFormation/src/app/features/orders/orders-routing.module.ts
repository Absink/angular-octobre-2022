import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';
import { PageDetailsOrderComponent } from './page-details-order/page-details-order.component';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';

const routes: Routes = [
  { path: '', component: PageListOrdersComponent },
  { path: 'view/:id', component: PageDetailsOrderComponent },
  { path: 'add', component: PageAddOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

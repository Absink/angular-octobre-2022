import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentGuard } from './core/authent.guard';
import { PageHomeComponent } from './core/page-home/page-home.component';
import { PageLoginComponent } from './core/page-login/page-login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: 'home', canActivate:[AuthentGuard], component: PageHomeComponent },
  { path: 'orders', canActivate:[AuthentGuard], loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'clients', canActivate:[AuthentGuard], loadChildren: () => import('./features/clients/clients.module').then(m => m.ClientsModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

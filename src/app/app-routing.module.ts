import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './layouts/login/login.component';
import { UserComponent } from './layouts/user/user.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { OrderComponent } from './layouts/order/order.component';

const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'order', component: OrderComponent },
  {path : '', component : LoginComponent}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { LoginComponent }      from './login/login.component';
import { StatusComponent }      from './status/status.component';

const APPROUTES: Routes = [
    
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'status', component: StatusComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(APPROUTES, { useHash: true, initialNavigation: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

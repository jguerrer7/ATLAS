import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VehicleOverviewComponent } from './components/vehicle-overview/vehicle-overview.component';
import { FleetStatusComponent } from './components/fleet-status/fleet-status.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'fleet/:id', component: FleetStatusComponent },
  { path: 'vehicle/:id', component: VehicleOverviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

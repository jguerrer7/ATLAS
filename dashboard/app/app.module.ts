import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VehicleOverviewComponent } from './components/vehicle-overview/vehicle-overview.component';
import { FleetStatusComponent } from './components/fleet-status/fleet-status.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FleetChartComponent } from './components/child-components/fleet-chart/fleet-chart.component';

import { AppRoutingModule } from './app-routing.module';

import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpModule,
    ChartsModule
    ],

  declarations: [ AppComponent, 
                  NavbarComponent, 
                  SidebarComponent, 
                  DashboardComponent, 
                  VehicleOverviewComponent, 
                  FleetStatusComponent,
                  HeaderComponent,
                  FleetChartComponent],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

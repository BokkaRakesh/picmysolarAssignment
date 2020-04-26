import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

import {SharedModule} from 'src/app/shared/shared.module';

import {
  MatIconModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
} from '@angular/material';
import {CustomMaterialModule} from 'src/app/shared/custom-material.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CustomMaterialModule,
  ],

  providers: [],
})
export class DashboardModule {}

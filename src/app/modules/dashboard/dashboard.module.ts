import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

import { SharedModule } from "src/app/shared/shared.module";
import { SideNavItemComponent } from "./components/side-nav-item/side-nav-item.component";
import { SideNavService } from "./components/side-nav-item/side-nav/side-nav.service";
import {
  MatIconModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule
} from "@angular/material";

@NgModule({
  declarations: [DashboardComponent, SideNavItemComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],

  providers: [SideNavService]
})
export class DashboardModule {}

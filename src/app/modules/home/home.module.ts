import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { CustomMaterialModule } from "src/app/shared/custom-material.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    CustomMaterialModule,
  ],
})
export class HomeModule {}

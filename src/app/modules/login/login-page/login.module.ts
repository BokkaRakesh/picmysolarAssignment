import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./pages/login/login.component";

import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
} from "@angular/material";
import { CustomMaterialModule } from "src/app/shared/custom-material.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, CustomMaterialModule],
})
export class LoginModule {}

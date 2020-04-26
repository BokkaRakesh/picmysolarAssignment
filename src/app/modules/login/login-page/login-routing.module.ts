import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { CustomMaterialModule } from "src/app/shared/custom-material.module";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CustomMaterialModule,
  ],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

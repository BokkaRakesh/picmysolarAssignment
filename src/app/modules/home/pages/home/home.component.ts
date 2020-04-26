import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  globalArray: any[];
  constructor(private router: Router) {}

  ngOnInit() {}

  onClick() {
    this.router.navigate(["login"]);
  }
}

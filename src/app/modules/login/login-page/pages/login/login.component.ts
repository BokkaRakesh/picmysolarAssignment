import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

import { Login } from "./login.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  /* --------------------------------- Fields --------------------------------- */
  loginForm: FormGroup;

  /* ------------------------------- Constructor ------------------------------ */
  globalArray: any;

  // constructor(private _fb: FormBuilder, private _auth: AuthService) {}
  constructor(
    private readonly _fb: FormBuilder,
    private httpService: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /* --------------------------- Life Cycle Methods --------------------------- */

  ngOnInit(): void {
    this.httpService
      .get("../../../../../assets/json/sampleData.json")
      .subscribe(
        (data: any) => {
          this.globalArray = data;
          console.log(
            "HomeComponent -> ngOnInit -> this.globalArray ",
            this.globalArray
          );
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      );
    this.loginForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  /* --------------------------------- Getters -------------------------------- */

  get email(): AbstractControl {
    return this.loginForm.get("email");
  }
  get password(): AbstractControl {
    return this.loginForm.get("password");
  }

  /* ----------------------------- Custom Methods ----------------------------- */
  async login(): Promise<void> {
    let loginCredentials = {
      loginCredentials: this.loginForm.value as Login,
    };
    // const login = this.loginForm.value as Login;
    console.log(
      loginCredentials.loginCredentials.email,
      this.globalArray.loginCredentials.email
    );
    if (
      loginCredentials.loginCredentials.email ==
        this.globalArray.loginCredentials.email &&
      loginCredentials.loginCredentials.password ==
        this.globalArray.loginCredentials.password
    ) {
      alert("login Sucess");
      this.router.navigate(["dashboard"], {
        queryParams: {
          userName: this.globalArray.loginCredentials.userName,
        },
      });
    } else {
      this.openSnackBar("In valid email or password", "Ok");
    }
  }

  /* ------------------------- function ofr snack bar ------------------------- */

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}

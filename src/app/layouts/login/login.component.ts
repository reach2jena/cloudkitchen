import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/User';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { ModalService } from 'src/app/service/modal.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupForm } from 'src/app/model/signupform';
import { NgToastService } from 'ng-angular-popup';
import { SignupResponseVO } from 'src/app/model/signupresponsevo';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
    private dataService: DataserviceService,
    private dialogModelService: ModalService,
    private fb: FormBuilder,
    private toast: NgToastService
  ) {


  }
  user: User = new User();
  ngOnInit(): void {
    this.createSignupFormGroup();
  }
  displayLogin: boolean = true;
  displaySignup: boolean = false;
  iserror: boolean = false;
  errorMessage!: string;
  userName!: string;
  password !: string;
  showSpinner: boolean = false;
  htmlelemnt!: HTMLElement;

  //Singup Form Details 

  signupForm !: FormGroup;
  private signupFormObject: SignupForm = new SignupForm();

  //Navigator Extras for sending data to next component..
  navigationExtras!: NavigationExtras;

  login(): void {
    this.showSpinner = true;
    console.log(this.userName.toString);
    // this.router.navigate(["home"]); DISABLED FOR API TESTING

    // if (this.userName == 'admin' && this.password == 'admin') {
    this.user.userName = this.userName;
    this.user.password = this.password;

    this.dataService.doLogin(this.user).subscribe
      ({
        next: (res) => {
          console.log(res);
          this.showSpinner = false;

          let objToSend: NavigationExtras = {
            state: {
              customer: res
            }
          };


          this.router.navigate(['home'],objToSend);


          this.showSuccess(this.userName);

        },
        error: (err) => {
          console.log("Error Message " + err.toString);
          this.showError(err);
          this.showSpinner = false;
          this.iserror = true;

          this.errorMessage = "Invalid Credentials!";
        },
        complete() {

        }
      });

  } signup(): void {
    this.showSpinner = true;

    this.signupFormObject = this.signupForm.value;
    console.log("Data.." + this.signupFormObject);


    if (this.signupFormObject.pwd !== this.signupFormObject.cpwd) {
      this.showwarning("Password  and Confirm Password are not matching !!");

    }

    this.dataService.doSignup(this.signupFormObject).subscribe
      ({
        next: (res) => {
          this.router.navigate(["login"]);

          this.showSpinner = false;
          console.log("Response from Signup API -->" + res);
          var signupresponse: SignupResponseVO = res;
          console.log("Response from Signup API -->" + signupresponse.customerID);
          this.showSuccess("Successfully Registered with username.." + signupresponse.username);

        },
        error: (err) => {
          this.showSpinner = false;
          this.showError("Registration failed..");
        },
        complete() {

        }
      });

  }
  showSuccess(user: string) {
    this.toast.success({ detail: "SUCCESS", summary: 'Welcome ' + user, duration: 5000 });
    console.log("Login Successfull..");
    window.document.getElementById("close")?.click();

  }
  showwarning(warning: string) {
    this.toast.warning({ detail: "SUCCESS", summary: warning, duration: 5000 });
    console.log("Invalid Data");
  }
  showError(e: any) {

    this.toast.error({ detail: "ERROR", summary: 'Your Error Message+' + e.value, duration: 4000 });
    console.log("Error Occured..");
  }
  openModal() {
    this.displayLogin = false;
    this.displaySignup = true;

  }
  createSignupFormGroup() {
    this.signupForm = this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.required],
      'username': ['', Validators.required],
      'pwd': ['', Validators.required],
      'cpwd': ['', Validators.required],
      'zipcode': ['', Validators.required],
      'phone': ['', Validators.required],
      'checked': ['', Validators.required],
      'deliveryaddress': ['', Validators.required],
      'billingEmailAddress': ['', Validators.required],
    });
  }
}
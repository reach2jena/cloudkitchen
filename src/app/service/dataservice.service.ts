import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignupForm } from '../model/signupform';
import { SignupFormRequestVO } from '../model/signuprequestvo';
import { User } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
private baseurl = environment.BACKENDURL_HOST;
private loginAPIurl = this.baseurl+ "/api/login";
private signupAPIurl = this.baseurl+ "/api/signup";
  constructor(private httpClient:HttpClient) { }

  private requestObject!: SignupFormRequestVO ;
  //For Login
  doLogin(user: User): Observable<any>
  {
    console.log("Logging in for user: "+ user.userName);
    return this.httpClient.post(this.loginAPIurl,user);
  }
//For Signup --
  doSignup(signupForm: SignupForm): Observable<any>
  {
    console.log("Logging in for user: "+ signupForm.username);
    this.requestObject = new SignupFormRequestVO();
    this.requestObject.username= signupForm.username;
    this.requestObject.password= signupForm.pwd;
    this.requestObject.phone= signupForm.phone;
    this.requestObject.billingAddress= signupForm.billingEmailAddress;
    this.requestObject.deliveryAddress= signupForm.deliveryaddress;
    this.requestObject.custFirstName= signupForm.firstname;
    this.requestObject.custLastName= signupForm.lastname;
    this.requestObject.custZipCode= signupForm.zipcode;

    return this.httpClient.post(this.signupAPIurl,this.requestObject );
  }
}

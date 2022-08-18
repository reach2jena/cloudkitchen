import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
private baseurl = environment.BACKENDURL_HOST;
private loginAPIurl = this.baseurl+ "/api/login"
  constructor(private httpClient:HttpClient) { }

  doLogin(user: User): Observable<any>
  {
    console.log("Logging in for user: "+ user.userName);
    return this.httpClient.post(this.loginAPIurl,user);
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  username: string| undefined;
password: string | undefined;
  showSpinner: string | undefined;
 
  login() : void {
    if(this.username == 'admin' && this.password == 'admin')
    {
     this.router.navigate(["home"]);
    }else {
      alert("Invalid credentials");
    }
 
  }
}
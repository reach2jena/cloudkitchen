import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/User';
import { DataserviceService } from 'src/app/service/dataservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private dataService: DataserviceService) { }
  user: User = new User();
  ngOnInit(): void {

  }

  iserror:boolean =false;
  errorMessage!: string;
  userName!: string;
  password !: string;
  showSpinner: string | undefined;

  login(): void {
    console.log(this.userName.toString);
   // if (this.userName == 'admin' && this.password == 'admin') {
      this.user.userName = this.userName;
      this.user.password = this.password;
      this.dataService.doLogin(this.user).subscribe(data => {

        console.log(data);
        this.router.navigate(["home"]);
      }, error =>
      {
        this.iserror=true;
        this.errorMessage="Invalid Credentials!";
      } 
      );

     
  //  } 
    //else {
      //alert("Invalid credentials");
    //}

  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/User';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { ModalService } from 'src/app/service/modal.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, 
    private dataService: DataserviceService,
    private dialogModelService: ModalService) { }
  user: User = new User();
  ngOnInit(): void {

  }
  displayLogin:boolean =true;
  displaySignup:boolean =false;
  iserror:boolean =false;
  errorMessage!: string;
  userName!: string;
  password !: string;
  showSpinner: boolean =false;

  login(): void {
    this.showSpinner=true;
    console.log(this.userName.toString);
    this.router.navigate(["home"]);
    this.showSpinner=false;
   // if (this.userName == 'admin' && this.password == 'admin') {
      this.user.userName = this.userName;
      this.user.password = this.password;
      // this.dataService.doLogin(this.user).subscribe(data => {

      //   console.log(data);
      //   this.showSpinner=false;
      //   this.router.navigate(["home"]);
      // }, error =>
      // {
      //   this.showSpinner=false;
      //   this.iserror=true;
      //   this.errorMessage="Invalid Credentials!";
      // } 
      // );

     
  //  } 
    //else {
      //alert("Invalid credentials");
    //}

  }
  openModal()
  {
    this.displayLogin=false;
    this.displaySignup=true;
    
  }
}
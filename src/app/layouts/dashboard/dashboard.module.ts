import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CustomMaterialModule } from 'src/app/core/custom-module/custom-module.module';
import { NgToastModule } from 'ng-angular-popup';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CustomMaterialModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgToastModule
    
  
  ]
  
})
export class DashboardModule { }

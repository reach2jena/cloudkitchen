import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './core/custom-module/custom-module.module';
import { LoginComponent } from './layouts/login/login.component';
import { UserComponent } from './layouts/user/user.component';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { SearchComponent } from './layouts/search/search.component';
import { DataserviceService } from './service/dataservice.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './layouts/order/order.component';
import { NgToastModule } from 'ng-angular-popup';
import { DesignerComponent } from './designer/designer.component';



@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    UserComponent,
    SearchComponent,
    OrderComponent,
    DesignerComponent
    
    
  ],
  imports: [
    NgToastModule,
    BrowserModule,    
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    CustomMaterialModule,      
    DashboardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule    
  
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

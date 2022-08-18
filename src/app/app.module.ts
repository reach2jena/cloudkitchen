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


@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    UserComponent,
    SearchComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

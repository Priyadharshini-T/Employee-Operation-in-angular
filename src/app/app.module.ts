import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { HttpModule } from '@angular/http';
import { Employee } from './employee';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { NavigateComponent } from './navigate/navigate.component';

const route:Routes=[
  {path:'',component:EmployeeComponent, pathMatch:'full',canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'employee',component:EmployeeComponent ,canActivate:[AuthGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    NavigateComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule],
  providers: [HttpClientModule, EmployeeService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { NgModule } from '@angular/core';
import {adminRoutingModule} from './admin-routing.module'
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginComponent} from './login/login.component'


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    adminRoutingModule,
    HttpClientModule,
    CommonModule,
   
    

  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }

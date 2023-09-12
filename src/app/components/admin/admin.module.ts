import { NgModule } from '@angular/core';
import {adminRoutingModule} from './admin-routing.module'
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginComponent} from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { BusinessComponent } from './business/business.component';
import { ServiceComponent } from './service/service.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { VehicleslistComponent } from './vehicleslist/vehicleslist.component';
import { PaymentsectionComponent } from './paymentsection/paymentsection.component'


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    CustomerComponent,
    BusinessComponent,
    ServiceComponent,
    AdminnavComponent,
    VehicleslistComponent,
    PaymentsectionComponent,


  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    adminRoutingModule,
    HttpClientModule,
    CommonModule
    

  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }

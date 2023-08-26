import { NgModule } from '@angular/core';
import {userRoutingModule} from './user-routing.module'
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { OtppassComponent } from './otppass/otppass.component';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { PurposeComponent } from './purpose/purpose.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GenricComponent } from './genric/genric.component';
import { ProfileComponent } from './profile/profile.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AdsComponent } from './ads/ads.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SearchPipe } from '../../pipes/search.pipe';
import { BusinessListComponent } from './business-list/business-list.component';
import { ServiceListComponent } from './service-list/service-list.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    OtpComponent,
    OtppassComponent,
    HomeComponent,
    ForgetpasswordComponent,
    PurposeComponent,
    NewpasswordComponent,
    NavbarComponent,
    GenricComponent,
    ProfileComponent,
    AddvehicleComponent,
    EditprofileComponent,
    AdsComponent,
    EditVehicleComponent,
    SearchPipe,
    FilterPipe,
    BusinessListComponent,
    ServiceListComponent
    

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    userRoutingModule,
    HttpClientModule,
    CommonModule
  
  ],
  providers: [],
  bootstrap: []

})
export class userModule { }

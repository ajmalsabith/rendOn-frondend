import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PurposeComponent } from './purpose/purpose.component';
import { HomeComponent } from './home/home.component';
import { OtpComponent } from './otp/otp.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { OtppassComponent } from './otppass/otppass.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

import {userguardin,userguardout} from 'src/app/guards/user.guard'
import { SubscriptionComponent } from './subscription/subscription.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { SavedComponent } from './saved/saved.component';



const routes: Routes = [  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'login',component:LoginComponent,canActivate:[userguardin]},
  {path:'register',component:RegisterComponent,canActivate:[userguardin]},
  {path:'purpose',component:PurposeComponent},
  {path:'home',component:HomeComponent,canActivate:[userguardout]},
  {path:'otp',component:OtpComponent},
  {path:'otppass',component:OtppassComponent,canActivate:[userguardin]},
  {path:'forgetpass',component:ForgetpasswordComponent,canActivate:[userguardin]},
  {path:'setpassword',component:NewpasswordComponent,canActivate:[userguardin]},
  {path:'profile',component:ProfileComponent,canActivate:[userguardout]},
  {path:'addvehicle',component:AddvehicleComponent,canActivate:[userguardout]},
  {path:'editvehicle/:id',component:EditVehicleComponent,canActivate:[userguardout]},
  {path:'businesslist',component:BusinessListComponent,canActivate:[userguardout]},
  {path:'servicelist',component:ServiceListComponent,canActivate:[userguardout]},
  {path:'viewprofile/:id',component:ViewprofileComponent,canActivate:[userguardout]},
  {path:'subscription',component:SubscriptionComponent,canActivate:[userguardout]},
  {path:'single-page/:id',component:SinglePageComponent,canActivate:[userguardout]},
  {path:'saved',component:SavedComponent,canActivate:[userguardout]}
  
];  
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userRoutingModule {}

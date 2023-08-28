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
import { userGuard } from 'src/app/guards/user.guard';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

const routes: Routes = [  
    
  {path:'login',component:LoginComponent,canActivate:[userGuard]},
  {path:'register',component:RegisterComponent,canActivate:[userGuard]},
  {path:'purpose',component:PurposeComponent,canActivate:[userGuard]},
  {path:'home',component:HomeComponent,canActivate:[userGuard]},
  {path:'otp',component:OtpComponent,canActivate:[userGuard]},
  {path:'otppass',component:OtppassComponent,canActivate:[userGuard]},
  {path:'forgetpass',component:ForgetpasswordComponent,canActivate:[userGuard]},
  {path:'setpassword',component:NewpasswordComponent,canActivate:[userGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[userGuard]},
  {path:'addvehicle',component:AddvehicleComponent},
  {path:'editvehicle/:id',component:EditVehicleComponent,canActivate:[userGuard]},
  {path:'businesslist',component:BusinessListComponent,canActivate:[userGuard]},
  {path:'servicelist',component:ServiceListComponent,canActivate:[userGuard]},
  {path:'viewprofile/:id',component:ViewprofileComponent,canActivate:[userGuard]},
  
  
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userRoutingModule {}

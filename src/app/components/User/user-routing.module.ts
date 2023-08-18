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

const routes: Routes = [  
    
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'purpose',component:PurposeComponent},
  {path:'home',component:HomeComponent},
  {path:'otp',component:OtpComponent},
  {path:'otppass',component:OtppassComponent},
  {path:'forgetpass',component:ForgetpasswordComponent},
  {path:'setpassword',component:NewpasswordComponent},
  {path:'profile',component:ProfileComponent},
  {path:'addvehicle',component:AddvehicleComponent}

];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userRoutingModule {}

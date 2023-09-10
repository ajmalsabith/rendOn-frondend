import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { BusinessComponent } from './business/business.component';
import { ServiceComponent } from './service/service.component';
import { VehicleslistComponent } from './vehicleslist/vehicleslist.component';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { PaymentsectionComponent } from './paymentsection/paymentsection.component';

const routes: Routes = [

  { path: '', component: LoginComponent,canActivate:[AdminGuard] },
  { path: 'dashboard',component: DashboardComponent,canActivate:[AdminGuard]  },
  { path: 'customer',component: CustomerComponent,canActivate:[AdminGuard] },
  { path: 'business',component: BusinessComponent,canActivate:[AdminGuard] },
  { path: 'service',component: ServiceComponent ,canActivate:[AdminGuard]},
  { path: 'vehiclelist',component: VehicleslistComponent,canActivate:[AdminGuard] },
  { path: 'paymentlist',component: PaymentsectionComponent,canActivate:[AdminGuard] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class adminRoutingModule {}

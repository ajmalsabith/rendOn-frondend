import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',loadChildren:()=>import('./components/User/user.module').then(user=>user.userModule)},
  {path:'admin',loadChildren:()=>import('./components/admin/admin.module').then(admin=>admin.AdminModule)}

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/service/admin/adminservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{
  servicedatas:any
  constructor(private adminservice:AdminserviceService,private toaster:ToastrService){}
  ngOnInit(): void {
    this.adminservice.serviceget().subscribe((res:any)=>{
      this.servicedatas=res.datas
      console.log(this.servicedatas);
      
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }

  veifyadmin(id:string){
    this.adminservice.veifyadmin(id).subscribe((res:any)=>{
      this.toaster.success(res.message)
      this.ngOnInit()
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }

  block(id:string){

    

    if (id) {
      this.adminservice.useractions(id).subscribe((res:any)=>{
        this.toaster.success(`user is ${res.success}`)

        this.ngOnInit()
      },(err)=>{
        this.toaster.error(err.error.message)
      })
    }
  }
}

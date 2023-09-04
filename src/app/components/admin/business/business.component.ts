import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/service/admin/adminservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit{

  businessdata:any
  constructor(private adminservice:AdminserviceService,private toaster:ToastrService){}
  ngOnInit(): void {
    this.adminservice.businessget().subscribe((res:any)=>{
      this.businessdata=res.datas
      console.log(this.businessdata);
      
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

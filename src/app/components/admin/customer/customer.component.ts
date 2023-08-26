import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/service/admin/adminservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  customerdata:any
  actin=''
  constructor(private adminservice:AdminserviceService,private toaster:ToastrService){}
  ngOnInit(): void {
    this.adminservice.customerget().subscribe((res:any)=>{
      this.customerdata=res.datas
      console.log(this.customerdata);
      
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

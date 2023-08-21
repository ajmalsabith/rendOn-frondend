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
  constructor(private adminservice:AdminserviceService,private toaster:ToastrService){}
  ngOnInit(): void {
    this.adminservice.customerget().subscribe((res:any)=>{
      this.customerdata=res.datas
      console.log(this.customerdata);
      
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }
  
}

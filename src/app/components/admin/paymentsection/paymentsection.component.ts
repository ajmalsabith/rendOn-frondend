import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/service/admin/adminservice.service';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-paymentsection',
  templateUrl: './paymentsection.component.html',
  styleUrls: ['./paymentsection.component.css']
})
export class PaymentsectionComponent implements OnInit {

  paydata:any
  constructor(private adminservice:AdminserviceService,private toaster:ToastrService){}
  ngOnInit(): void {
    this.adminservice.getpaymentdata().subscribe((res:any)=>{
      this.paydata=res.data
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }

}

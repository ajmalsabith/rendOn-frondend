import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/service/admin/adminservice.service';

@Component({
  selector: 'app-vehicleslist',
  templateUrl: './vehicleslist.component.html',
  styleUrls: ['./vehicleslist.component.css']
})
export class VehicleslistComponent implements OnInit {


  vehicledata:any
  constructor(private adminservice:AdminserviceService,private toaster:ToastrService){}

  ngOnInit(): void {
    this.adminservice.vehiclesget().subscribe((res:any)=>{
      this.vehicledata=res.datas
      console.log(this.vehicledata);
      
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }

  block(id:string){

    

    if (id) {
      this.adminservice.vehicleaction(id).subscribe((res:any)=>{
        this.toaster.success(`user vehicle is ${res.success}`)

        this.ngOnInit()
      },(err)=>{
        this.toaster.error(err.error.message)
      })
    }
  }
}

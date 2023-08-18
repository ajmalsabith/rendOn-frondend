import { Component, Input, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  userdata:any
  vehicledata:any
  addvehcle:boolean=false
  editvehicle:boolean=false
  datashow:boolean=true

  constructor(private userservice:UserserviceService,private toaster:ToastrService){}
  ngOnInit(): void {
    this.userservice.getprofile().subscribe((res:any)=>{
      this.userdata=res.userdata
      this.vehicledata=res.vehicledata
      
    },(err)=>{
      this.toaster.error(err.message)
    })
  }

  showAddVehicle() {
    this.addvehcle = true;
    this.editvehicle = false;
    this.datashow = false;
  }

  showEditProfile() {
    this.addvehcle = false;
    this.editvehicle = true;
    this.datashow = false;
  }

  updateDatashow(Value:boolean){
    this.datashow=Value
    this.editvehicle=false
    this.addvehcle=false
  }

}

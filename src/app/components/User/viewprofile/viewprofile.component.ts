import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit{

  constructor(private userservice:UserserviceService,private toaster:ToastrService,private route:ActivatedRoute){}
  userdata:any
  vehicledata:any
  id!:string
  sub!:any

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      
   });
    this.userservice.getviewprofile(this.id).subscribe((res:any)=>{
          
      this.userdata=res.userdata      
      console.log(this.userdata);
      this.vehicledata=res.vehicledata
      this.sub=res.sub

      
    },(err)=>{
      this.toaster.error(err.message)
    })
  }

  saveimge(id:string){
    
    this.userservice.saveimg(id).subscribe((res:any)=>{
       this.toaster.success(res.message)
    },(err)=>{
      this.toaster.error(err.error.message)
    })
   }

}

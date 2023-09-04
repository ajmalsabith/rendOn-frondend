import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit{

  constructor(private userservice:UserserviceService,private toaster:ToastrService,private route:ActivatedRoute,private router:Router){}
  userdata:any
  vehicledata:any
  id!:string
  sub!:any
  current!:any

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      
   });
    this.userservice.getviewprofile(this.id).subscribe((res:any)=>{
          
      this.userdata=res.userdata   
      this.current= res.currentuser   
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

   createconnection(id:string){
    this.userservice.getchat(id).subscribe((res:any)=>{
      this.router.navigate(['chat'])
      this.toaster.success(res.message)
    },(err)=>[
      this.toaster.error(err.error.message)
    ])

   }

}

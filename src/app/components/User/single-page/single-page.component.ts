import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { subscribeOn } from 'rxjs';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit{


  id!:string
  vehicledata!:any
  userdata!:any
  count!:number
  curr:any
  constructor(private route:ActivatedRoute,private userservice:UserserviceService,private toaster:ToastrService,private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      
   });

   this.userservice.singlevehicle(this.id).subscribe((res:any)=>{
    this.vehicledata=res.data
    this.userdata=res.userdata
    this.curr= res.currdata
this.count=this.vehicledata.views.length

    
   },(err)=>{
    this.toaster.error(err.error.message)
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



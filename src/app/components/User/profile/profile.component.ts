import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  userdata:any
  vehicledata:any
  sub:any
  addvehcle:boolean=false
  editprofile:boolean=false
  datashow:boolean=true 


  constructor(private userservice:UserserviceService,private toaster:ToastrService,private router:Router){}
 
  ngOnInit(): void {

    this.userservice.getprofile().subscribe((res:any)=>{
     
      console.log('haaaaai');
      
      this.userdata=res.userdata      
      this.sub=res.subdata      
      console.log(this.userdata);
      this.vehicledata=res.vehicledata
      
    },(err)=>{
      this.toaster.error(err.message)
    })
  }

  showAddVehicle() {
    this.addvehcle = true;
    this.editprofile = false;
    this.datashow = false;
  }

  showEditProfile() {
    this.addvehcle = false;
    this.editprofile = true;
    this.datashow = false;
  }

  updateDatashow(Value:boolean){
    this.datashow=Value
    this.editprofile=false
    this.addvehcle=false
  }


  takendsub(){
    Swal.fire({
      icon: 'error',
      title: 'you already Subscription Redeemed!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
  })
  }

  notakensub(){
    Swal.fire({
      icon: 'error',
      title: 'you cant add !',
      text: 'if you want add you should taken subscription',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
  })
  }





  removevehicle(id:string){
    this.userservice.removevehicle(id).subscribe((res:any)=>{
      this.toaster.success(res.message)
      this.ngOnInit()

    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }

 

  logout(){
    localStorage.removeItem('usersecret')
    
    this.router.navigate(['/login'])
  
  }
  
  
}

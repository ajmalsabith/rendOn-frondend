import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare const Razorpay: any;


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
      if (!this.userdata.admin_verify) {
        this.toaster.warning('please complete your profile')
      }
      this.sub=res.subdata      
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

  notverify(){
    this.toaster.warning('and waite until admin verify your profile')
    this.toaster.warning('please complete your profile ')


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

  makechange(id:string){
    this.userservice.makechnge(id).subscribe((res:any)=>{
      this.toaster.success(res.message)
      this.ngOnInit()
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }

  showfast(id:string) {

    const type='showfast'
   const amount=19
    const options = {
      key: 'rzp_test_kxOSBe5h7349QI',
      amount: amount * 100, 
      currency: 'INR',
      name: 'Rent_on',
      description: 'show fasting you vehicle amount',
      image: 'assets/logo-png-removebg-preview (2).png',
      handler: (response: any) => {
        if (response.razorpay_payment_id) {
          const paydata={
            amount:amount,
            type:type,
            paymentId:response.razorpay_payment_id,
            id:id
          }
          console.log(paydata);
          
          this.userservice.showfasterpay(paydata).subscribe((res:any)=>{


            Swal.fire({
              icon: 'success',
              title: 'show faster payment success!',
              text: 'Congratulations! Your showfaster payment has been successfully redeemed.',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
          })
            this.toaster.success(res.message)
            this.router.navigate(['profile'])
            this.toaster.success('Payment successful!');

          },(err)=>{

            this.toaster.error('Payment failed somthing wrong..!')
            this.toaster.error(err.error.message);


          })
        } else {
          this.toaster.error('Payment failed.');
        }
      }
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
 
}


 

  logout(){
    localStorage.removeItem('usersecret')
    
    this.router.navigate(['/login'])
  
  }
  
  
}

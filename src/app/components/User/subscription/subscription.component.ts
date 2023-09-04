import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import Swal from 'sweetalert2';


declare const Razorpay: any;

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {



  selectedSubscription: string = 'monthly';
  
  monthly = 89
  yearly = 1019


  constructor(private formBuilder: FormBuilder,private toaster:ToastrService,private userservice:UserserviceService,private router:Router) { }


  ngOnInit(): void {
    
  }



  submit() {
      const amount = this.selectedSubscription === 'monthly' ? this.monthly : this.yearly;

      
      const options = {
        key: 'rzp_test_kxOSBe5h7349QI',
        amount: amount * 100, // Amount in paise (1 INR = 100 paise)
        currency: 'INR',
        name: 'Rent_on',
        description: 'subscription amount',
        image: 'assets/logo-png-removebg-preview (2).png',
        handler: (response: any) => {
          if (response.razorpay_payment_id) {
            const paydata={
              amount:amount,
              type:this.selectedSubscription,
              paymentId:response.razorpay_payment_id
            }
            console.log(paydata);
            
            this.userservice.subscriptionsend(paydata).subscribe((res:any)=>{


              Swal.fire({
                icon: 'success',
                title: 'Subscription Redeemed!',
                text: 'Congratulations! Your subscription has been successfully redeemed.',
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

  }


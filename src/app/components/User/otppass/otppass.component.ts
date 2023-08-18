import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-otppass',
  templateUrl: './otppass.component.html',
  styleUrls: ['./otppass.component.css']
})
export class OtppassComponent {

  constructor(private userservice:UserserviceService,private formbuilder:FormBuilder,private router:Router){}
  form!:FormGroup
  message=''
    
    ngOnInit(): void {
      
      this.userservice.getuser().subscribe((res)=>{
        this.router.navigate(['home'])
      },(err)=>{
        this.router.navigate(['/login'])
      })
      this.form=this.formbuilder.group({
        otppass:''
      })
    }
  
    submit(){
     
      const otp=this.form.getRawValue()
      if (otp.otppass=='') {
        this.message='please enter otp'
      }else{
        this.userservice.postotp(otp).subscribe((res)=>{
            this.router.navigate(['/setpassword'])
    
        },(err)=>{
           this.message=err.error.message
        })
      }
    }
     
}

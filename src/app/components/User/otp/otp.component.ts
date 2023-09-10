import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Emitters } from 'src/app/emitters/emitter';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit{

  constructor(private userservice:UserserviceService,private formbuilder:FormBuilder,private router:Router,private toaster:ToastrService){}
   form!:FormGroup
   message=''
   is_otp!:boolean
  
  ngOnInit(): void {
    this.form=this.formbuilder.group({
      otp:''
    })
  }

  submit(){
   
    const otp=this.form.getRawValue()
    if (otp.otp=='') {
      this.message='please enter otp'
    }else{
      this.userservice.postotp(otp).subscribe((res:any)=>{

        this.toaster.success(res.message)
          this.router.navigate(['/purpose'])
  
      },(err)=>{
        this.toaster.error(err.error.massage)
         this.message=err.error.message
      })
    }
  }
   

}

import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/service/admin/adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  reativeform!:FormGroup
  message=''
  constructor(private router:Router,private adminservice:AdminserviceService,private toaster:ToastrService){}

  ngOnInit(): void {
    this.reativeform=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)])
    })
    
  }

 
  get email(){
    return this.reativeform.get('email')
  }

  get password(){
    return this.reativeform.get('password')
  }
  submit(){

    const admindata= this.reativeform.getRawValue()

    this.adminservice.adminloginpost(admindata).subscribe((res:any)=>{
      console.log(res);
      const token=res.token

      localStorage.setItem("adminsecret",token)
      
      this.router.navigate(['admin/dashboard'])
    },(err)=>{
      this.toaster.error(err.error.message)
      this.message=err.error.message
    })


  }

}

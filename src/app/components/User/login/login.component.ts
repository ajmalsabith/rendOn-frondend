import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  reativeform!:FormGroup
  message=''
  constructor(private userservice:UserserviceService,private router:Router,private toaster:ToastrService){}

  ngOnInit(): void {
    this.userservice.getuser().subscribe((res)=>{
      this.router.navigate(['home'])
    },(err)=>{
      this.router.navigate(['/login'])
    })
    this.reativeform= new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)])
    })
  }

  submit() {

    const userdata=this.reativeform.getRawValue()


    this.userservice.postlogin(userdata).subscribe((res:any)=>{

      this.toaster.success(res.massage)
      this.router.navigate(['/home'])


    },(err)=>{
      this.toaster.error(err.error.message)
      this.message=err.error.message
    })
  }

  get email(){
    return this.reativeform.get('email')
  }

  get password(){
    return this.reativeform.get('password')
  }

}

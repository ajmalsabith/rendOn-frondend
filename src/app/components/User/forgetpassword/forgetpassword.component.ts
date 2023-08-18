import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitter';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  reativeform!:FormGroup
  message=''
  constructor(private userservice:UserserviceService,private router:Router) {}
  ngOnInit(): void {

    this.reativeform= new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email])
    })
  }

  get email(){
    return this.reativeform.get('email')
  }

  submit(){
     const email = this.reativeform.getRawValue()
     console.log(email);
     this.userservice.postregister(email).subscribe((res)=>{
      this.router.navigate(['/otppass'])
      Emitters.otpemitter.emit(true);

     },(err)=>{
      this.message=err.error.message
     })
     
  }

}

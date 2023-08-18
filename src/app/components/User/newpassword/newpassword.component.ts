import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit{

  reativeform!:FormGroup
  message=''
  constructor(private userservice:UserserviceService,private router:Router){}
  ngOnInit(): void {
    this.reativeform=new FormGroup({
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      cpassword: new FormControl('',[Validators.required, Validators.minLength(8)])
    })
  }

  get password(){
    return this.reativeform.get('password')
  }
  get cpassword(){
    return this.reativeform.get('cpassword')
  }

  submit(){
    const data= this.reativeform.getRawValue()
    if (data.password!==data.cpassword) {
      this.message='please correct enter password'
    }else{
       this.userservice.sendpassword(data).subscribe((res)=>{
        this.router.navigate(['/login'])
       },(err)=>{
        this.message=err.error.message
       })
    }
  }

}

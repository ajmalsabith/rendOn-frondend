import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/service/admin/adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  reativeform!:FormGroup
  message=''
  constructor(private router:Router,adminservice:AdminserviceService){}

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
    console.log('heoloow');
    
  }

}

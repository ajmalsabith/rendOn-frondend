import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { users } from 'src/app/Model/user';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { editprofileload } from 'src/app/states/userStates/user.action';
import {  userProfile } from 'src/app/states/userStates/user.selectors';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit{

  reativeform!:FormGroup
  message=''
  selectedImage1!:File


 
  dateshow?=false
  purpose:any
  
  userdata:any

  constructor(
    private store:Store<{userdata:users}>,
    private router:Router,
    private userservice:UserserviceService,
    private toaster:ToastrService
  ){}

  ngOnInit(): void {
    this.getdata()
    this.store.dispatch(editprofileload())

      this.reativeform= new FormGroup({
        name:new FormControl('',Validators.required),
        phone:new FormControl('',[Validators.required, Validators.pattern(/^\d{10}$/)]),
        place:new FormControl('',[Validators.required]),
        qualification:new FormControl('',[Validators.required]),
        aboutyou:new FormControl('',[Validators.required])
      
      })
    
  }


uploadImage(files: any) {
  this.selectedImage1=<File>files.files[0]
}

@Output() updateDatashow = new EventEmitter<boolean>();

  goToProfilePage() {
    this.updateDatashow.emit(this.dateshow);
  }


submit(){

  const user = this.reativeform.getRawValue()

  const formdata=new FormData()
  formdata.append('name',user.name)
  formdata.append('phone',user.phone)
  formdata.append('place',user.place)
  formdata.append('qualification',user.qualification)
  formdata.append('aboutyou',user.aboutyou)
  this.userservice.edituserdata(formdata).subscribe((res:any)=>{
    
    this.toaster.success(res.message)
    this.dateshow=true
    this.goToProfilePage()
    this.router.navigate(['/profile'])
  },(err)=>{
    this.toaster.error(err.error)
    this.message=err.error.message
  })

  this.ngOnInit()

}
  

getdata(){
  this.store.pipe(select(userProfile)).subscribe((res)=>{
  
   this.userdata=res
   
   console.log(this.userdata);
   
   
  })

 }

get getname(){
  return this.reativeform.get('name')
}

get getphone(){
  return this.reativeform.get('phone')
}

get getqualification(){
  return this.reativeform.get('qualification')
}

get getimage(){
  return this.reativeform.get('image')
}


get getplace(){
  return this.reativeform.get('place')
}


get getaboutyou(){
  return this.reativeform.get('aboutyou')
}



}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  messageshow=false
  chatdata!:any
  curr!:any
  messageform!:FormGroup

  condata!:any
  constructor(private userservice:UserserviceService,private toaster:ToastrService){}

  ngOnInit(): void {

    this.messageform=new FormGroup({
      message:new FormControl('',Validators.required)
    })
    console.log('nothing');
    
    this.userservice.getchatdata().subscribe((res:any)=>{
      this.chatdata=res.data

     this.curr= res.curr
      this.toaster.success('success')
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }

  showmessage(id:string,conId:string){

    const idobj={
      toid:id,
      conId:conId
    }
    console.log(idobj);
    
    this.userservice.getmessages(idobj).subscribe((res:any)=>{
      this.condata=res.condata
      console.log(this.condata);
      
      this.toaster.success('data geted')
    },(err)=>{
      this.toaster.error(err.error.message)
    })
    
    this.messageshow=true
  }

  submit(){
    const messagedata= this.messageform.getRawValue()
    console.log(messagedata);
    
    this.userservice.messagesend(messagedata).subscribe((res)=>{

    })
  }



}

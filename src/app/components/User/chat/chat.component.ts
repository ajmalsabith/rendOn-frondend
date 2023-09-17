import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { Socket } from "ngx-socket-io";

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
  mid!:string
  allmessage!:any
  condata!:any

  searchText=''
  constructor(private userservice:UserserviceService,private toaster:ToastrService,private socket:Socket){}
  @ViewChild('messageForm', { static: false }) messageForm!: NgForm;

  ngOnInit(): void {

    

    this.socket.on("message recieved", (newMessage: any) => {   

      console.log(newMessage);
      if (!this.allmessage) {

        this.allmessage=[]
        
      }
      
      this.allmessage.push(newMessage)

      
    });
  
    
    this.userservice.getchatdata().subscribe((res:any)=>{
      this.chatdata=res.data
  
     this.curr= res.curr
     this.socket.emit('setup',this.curr._id) 
  
      this.toaster.success('success')
    },(err)=>{
      this.toaster.error(err.error.message)
    })

 
    
   
    
   
    this.messageform=new FormGroup({
      message:new FormControl('',Validators.required)
    })

    
    


    
  }

  showmessage(id:string,conId:string){

    const idobj={
      toid:id,
      conId:conId
    }
    
    this.userservice.getmessages(idobj).subscribe((res:any)=>{

      this.condata=res.condata
       this.allmessage=res.allmessage
       this.socket.emit('join',this.condata._id) 
       
      this.toaster.success('data geted')
    },(err)=>{
      this.toaster.error(err.error.message)
    })
    
    this.messageshow=true
  }

  submit(id:string,conId:string){
    const messagedata= this.messageform.getRawValue()
    
    const message={
      conId:conId,
      message:messagedata.message,
      toId:id
    }
    this.userservice.messagesend(message).subscribe((res:any)=>{

        this.socket.emit('chatMessage',res.result,this.curr.purpose)
      this.allmessage.push(res.result)

      this.toaster.success('message sented')
      this.messageForm.resetForm();

    },(err)=>{
      this.toaster.error(err.error.message)
    })


  }



}

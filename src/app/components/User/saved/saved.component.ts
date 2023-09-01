import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit{

  datas!:any

  constructor(private userservice:UserserviceService,private toaster:ToastrService){}

  ngOnInit(): void {
    this.userservice.getsavedData().subscribe((res:any)=>{
      this.datas=res.data
      console.log(this.datas);
      
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }


  removefromsaved(id:string){

    this.userservice.removesaved(id).subscribe((res:any)=>{

      this.toaster.success(res.message)
      this.ngOnInit()

    },(err)=>{
      this.toaster.error(err.error.message)
    })

  }

}

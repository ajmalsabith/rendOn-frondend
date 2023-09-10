import { Component, Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})


export class BusinessListComponent implements OnInit{

  constructor(private userservice:UserserviceService,private toaster:ToastrService){}

  searchText=''
  datas!:any

  ngOnInit(): void {
    this.userservice.getbusinessdata().subscribe((res:any)=>{
      this.datas=res.datas
    },(err)=>{
      this.toaster.error(err.error.message)
    })

    
  }

  serchdata(Value:string){
    this.searchText=Value
  }
}

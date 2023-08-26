import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent  implements OnInit{

  constructor(private userservice:UserserviceService,private toaster:ToastrService){}

  datas!:any
  searchText=''

  ngOnInit(): void {
    this.userservice.getservicesdata().subscribe((res:any)=>{
      this.datas=res.datas
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }

  serchdata(Value:string){
    this.searchText=Value
  }
}

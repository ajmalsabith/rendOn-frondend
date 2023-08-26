import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';


@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit{



  

  reativeform!:FormGroup
  message=''
  id!:string
  selectedImage1!:File
  selectedImage2!:File
  datas!:any

  constructor(private userService:UserserviceService,private router:Router,private toaster:ToastrService,private route: ActivatedRoute){}
  ngOnInit(): void {

    this.route.params.subscribe(params => {
           this.id = params['id'];
           console.log(this.id);
           
        });
      
        this.userService.getvehicledata(this.id).subscribe((res:any)=>{
          this.datas=res.data
          console.log(this.datas);
          
        },(err)=>{
          this.toaster.error(err.error.massage)
        })
      
    
    this.reativeform=new FormGroup({
      name:new FormControl(''),
      rentamount:new FormControl(''),
      place:new FormControl(''),
      type:new FormControl(''),
      proof:new FormControl(''),
      image:new FormControl('')
    })
  }

  submit(){

    console.log(this.reativeform);
    

   
    const product=this.reativeform.getRawValue()

    const formdata= new FormData()

    formdata.append('proof',this.selectedImage1,this.selectedImage1.name)
    formdata.append('image',this.selectedImage2,this.selectedImage2.name)
    formdata.append('name',product.name)
    formdata.append('rentamount',product.rentamount)
    formdata.append('place',product.place)
    formdata.append('type',product.type)
    formdata.append('id',this.id)


    console.log(formdata);
    
    this.userService.editvehicle(formdata).subscribe((res:any)=>{

      this.toaster.success(res.message)
      this.router.navigate(['/profile'])


    },(err)=>{
      this.toaster.error(err.error.message)
      this.message=err.error.message
    })
    
  }

  uploadImage1(files: any) {
    this.selectedImage1=<File>files.files[0]
  }
  uploadImage2(files: any) {
    this.selectedImage2=<File>files.files[0]
  }
  


}

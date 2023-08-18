import { Component ,EventEmitter,OnInit, Output} from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {


  reativeform!:FormGroup
  message=''
  dateshow=false
  selectedImage1!:File
  selectedImage2!:File

  constructor(private userService:UserserviceService,private router:Router,private toaster:ToastrService){}
  ngOnInit(): void {
    this.reativeform=new FormGroup({
      name:new FormControl('',[Validators.required]),
      rentamount:new FormControl('',[Validators.required]),
      place:new FormControl('',[Validators.required]),
      type:new FormControl('',[Validators.required]),
      proof:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required])
    })
  }

  @Output() updateDatashow = new EventEmitter<boolean>();

  goToProfilePage() {
    this.updateDatashow.emit(this.dateshow);
  }

  submit(){

   
    const product=this.reativeform.getRawValue()

    const formdata= new FormData()

    formdata.append('proof',this.selectedImage1,this.selectedImage1.name)
    formdata.append('image',this.selectedImage2,this.selectedImage2.name)
    formdata.append('name',product.name)
    formdata.append('rentamount',product.rentamount)
    formdata.append('place',product.place)
    formdata.append('type',product.type)

    console.log(formdata);
    
    this.userService.postvehicle(formdata).subscribe((res:any)=>{

      this.toaster.success(res.message)
      this.dateshow=true
      this.goToProfilePage()
      this.router.navigate(['/profile'])


    },(err)=>{
      this.toaster.error(err.error.massage)
      this.message=err.error.massage
    })
    
  }

  uploadImage1(files: any) {
    this.selectedImage1=<File>files.files[0]
  }
  uploadImage2(files: any) {
    this.selectedImage2=<File>files.files[0]
  }
  get name(){
    return this.reativeform.get('name')
  }

  get rentamount(){
    return this.reativeform.get('rentamount')
  }

  get place(){
    return this.reativeform.get('place')
  }

  get type(){
    return this.reativeform.get('type')
  }

  get proof(){
    return this.reativeform.get('proof')
  }

  get image(){
    return this.reativeform.get('image')
  }

}


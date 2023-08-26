import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../../../service/userservice/userservice.service';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.css']
})
export class PurposeComponent implements OnInit {
  form!: FormGroup;
  message = '';

  constructor(
    private formbuilder: FormBuilder,
    private userservice:UserserviceService ,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.form = this.formbuilder.group({
      purpose: ''
    });
  }

  radioChanged(event: Event) {
    console.log('log');
    
    const selectedValue = (event.target as HTMLInputElement).value;
    this.form.get('purpose')?.setValue(selectedValue);
    this.submit()
  }

  submit() {
    const data = this.form.getRawValue();
    console.log(data);

    this.userservice.postpurpose(data).subscribe(
      (res) => {
        
        this.router.navigate(['home']);
      },
      (err) => {
        this.message =err.error.message;
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { vehilceldata } from 'src/app/Model/user';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { loadhome } from 'src/app/states/userStates/user.action';
import { loadhomedata } from 'src/app/states/userStates/user.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  vehicledatass!:vehilceldata

  constructor(
    private store:Store<{vehicledatas:vehilceldata[]}>
   
    ){}

  ngOnInit(): void {
    this.store.dispatch(loadhome())
  }
  vehicledata$ = this.store.pipe(select(loadhomedata))
}

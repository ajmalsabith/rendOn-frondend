import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/service/admin/adminservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customer:any
  customerblock:any
  business:any
  businessblock:any
  service:any
  serviceblock:any
  vehicles:any
  vehiclesblock:any
  vehiclesrunning:any
  vehiclesactive:any
  subcribe:any
  showfast:any
  chatconctions:any
  
  constructor(private adminservice:AdminserviceService,private toaster:ToastrService){}
  ngOnInit(): void {




    this.adminservice.getdashboard().subscribe((res:any)=>{

      this.customer=res.customer
      this.customerblock=res.customerblock
      this.business=res.business
      this.businessblock=res.businessblock
      this.service=res.service
      this.serviceblock=res.serviceblock
      this.vehicles=res.vehicles
      this.vehiclesblock=res.vehiclesblock
      this.vehiclesrunning=res.vehiclesrunning
      this.vehiclesactive=res.vehiclesactive
      this.subcribe=res.subcribe
      this.showfast=res.showfast
      this.chatconctions=res.chatconctions

      console.log(this.service);
      
      var mychart = new Chart("myChart", {
        
        type: 'bar',
        data: {
          labels: ['customer','business','service'],
          datasets: [{
            label: 'Analysis',
            data: [res.customer,this.business,this.service],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)', // Color for 'customer'
              'rgba(54, 162, 235, 0.2)', // Color for 'business'
              'rgba(255, 206, 86, 0.2)'  // Color for 'service'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)', // Border color for 'customer'
              'rgba(54, 162, 235, 1)', // Border color for 'business'
              'rgba(255, 206, 86, 1)'  // Border color for 'service'
            ],
            borderWidth: 3
          }]
        },
        options: {

        }
      });
      
      this.toaster.success('data geted')
    },(err)=>{
      this.toaster.error(err.error.message)
    })



   
  }

}

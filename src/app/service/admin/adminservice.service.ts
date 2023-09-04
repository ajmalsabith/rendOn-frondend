import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  url='http://localhost:5000'
  constructor(private http:HttpClient) { }


  adminloginpost(data:any){
    return this.http.post(`${this.url}/api/admin/login`,{data})
  }

  customerget(){
    return this.http.get(`${this.url}/api/admin/customer`)
  }

  businessget(){
    return this.http.get(`${this.url}/api/admin/business`)
  }

  serviceget(){
    return this.http.get(`${this.url}/api/admin/service`)
  }

  vehiclesget(){
    return this.http.get(`${this.url}/api/admin/vehiclelist`)
  }

  useractions(id:string){
    return this.http.post(`${this.url}/api/admin/actions`,{id:id})
  }
  vehicleaction(id:string){
    return this.http.post(`${this.url}/api/admin/vehicleactions`,{id:id})
  }

  veifyadmin(id:string){
    return this.http.post(`${this.url}/api/admin/verification`,{id:id})
  }
}

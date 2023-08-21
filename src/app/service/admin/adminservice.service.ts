import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  url='http://localhost:5000'
  constructor(private http:HttpClient) { }

   headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('adminsecret')}`
  });


  adminloginpost(data:any){
    const headers=this.headers
    return this.http.post(`${this.url}/api/admin/login`,{data},{headers})
  }

  customerget(){
    const headers=this.headers
    return this.http.get(`${this.url}/api/admin/customer`,{headers})
  }

  businessget(){
    const headers=this.headers
    return this.http.get(`${this.url}/api/admin/business`,{headers})
  }

  serviceget(){
    const headers=this.headers
    return this.http.get(`${this.url}/api/admin/service`,{headers})
  }
}

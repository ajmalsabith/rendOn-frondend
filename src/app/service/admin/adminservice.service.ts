import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  url='http://localhost:5000'
  constructor(private http:HttpClient) { }

  adminloginpost(data:any){
    return this.http.post(`${this.url}/api/admin/login`,{data},{withCredentials:true})
  }
}

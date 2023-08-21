import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpClient) { }
  url='http://localhost:5000'
  postregister(user:any):Observable<any> {
    return this.http.post(`${this.url}/api/register`,{user},{withCredentials:true})
  }
  postpurpose(data:any):Observable<any> {
    return this.http.post(`${this.url}/api/purpose`,{data},{withCredentials:true})
  }

  getuser(){
    return this.http.get(`${this.url}/api/user`,{withCredentials:true})
  }
  postotp(otp:any){
    return this.http.post(`${this.url}/api/otp`,{otp},{withCredentials:true})
  }

  postlogin(data:any){
    return this.http.post(`${this.url}/api/login`,{data},{withCredentials:true})
  }

  sendpassword(data:any){
    return this.http.post(`${this.url}/api/setpassword`,{data},{withCredentials:true})
  }

  postvehicle(data:any){
    return this.http.post(`${this.url}/api/vehicleAdd`,data,{withCredentials:true})
  }

  getprofile(){
    return this.http.get(`${this.url}/api/profile`,{withCredentials:true})
  }


  loadeditprofile(){
    return this.http.get(`${this.url}/api/editprofile`,{withCredentials:true})
  }

  edituserdata(data:any){
    return this.http.post(`${this.url}/api/editprofile`,data,{withCredentials:true})
  }
  logoutpost(){
    return this.http.post(`${this.url}/api/logout`,{},{withCredentials:true})
  }

  loadhome(){
    return this.http.get(`${this.url}/api/home`,{withCredentials:true})
  }
}


import { createReducer, on } from "@ngrx/store";
import {users, vehilceldata} from "../../Model/user";
import { state } from '@angular/animations';
import { editprofilesuccess, loadhomesuccess } from "./user.action";

export const initialStateOfUser:users= {
    _id: '',
    name: '',
    email: '',
    phone: 0,
    password: '',
    purpose: '',
    connections: 0,
    is_verified: true,
    __v: '',
    image: '',
    is_admin:false
}
export const initialStateOfvehicles:vehilceldata[]=[]


const _editProfileReducer = createReducer(
    initialStateOfUser,
    on(editprofilesuccess,(state,{userdata})=>{
        return userdata
    })
)

export function profileReducer(state:any,action:any){
    return _editProfileReducer(state,action)
}


const _loadhomepage =createReducer(
    initialStateOfvehicles,
    on(loadhomesuccess,(state,{vehicledatas})=>{
        console.log(vehicledatas);
        
        return vehicledatas
    })
)

export function homereducer(state:any,action:any){
    return _loadhomepage(state,action)
}



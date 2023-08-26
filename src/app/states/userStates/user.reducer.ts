
import { createReducer, on } from "@ngrx/store";
import {users, vehicleModel} from "../../Model/user";
import { state } from '@angular/animations';
import { editprofilesuccess, loadhome, loadhomefailure, loadhomesuccess } from "./user.action";
import { vehicleState } from "./state";

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
    is_admin:false,
    post:0,
    is_block:false,
    rating:0,
    qualification:'',
    place:'',
    aboutyou:''
}


const _editProfileReducer = createReducer(
    initialStateOfUser,
    on(editprofilesuccess,(state,{userdata})=>{
        return userdata
    })
)

export function profileReducer(state:any,action:any){
    return _editProfileReducer(state,action)
}

export const initialStateOfvehicles:vehicleModel[]=[]



export const initialState: vehicleState = {
    vehicledata: [],
    loading: false,
    loaded: false,
    error: null,
  };

  export const vehicleReducer = createReducer(
    initialState,
    on(loadhome,(state)=>({
        ...state,
        loading:true
    })),

    on(loadhomesuccess, (state, { vehicledata }) => ({
        ...state,
        loading: false,
        loaded: true,
        vehicledata,
      })),

    on(loadhomefailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      }))

  )


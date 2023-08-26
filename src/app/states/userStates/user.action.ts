
import { createAction,props } from '@ngrx/store';
import {users, vehicleModel} from '../../Model/user'

export const editprofileload= createAction('[userprofile] editprofile')
export const editprofilesuccess= createAction('[userprofile] success',props<{userdata:users}>())

export const loadhome= createAction('[loadhome] load')
export const loadhomesuccess= createAction('[loadhomesuccess] success',props<{vehicledata: vehicleModel[]}>())
export const loadhomefailure=createAction("loadhomefailure",props<{error:any}>())
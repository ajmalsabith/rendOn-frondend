
import { createAction,props } from '@ngrx/store';
import {users, vehilceldata} from '../../Model/user'

export const editprofileload= createAction('[userprofile] editprofile')
export const editprofilesuccess= createAction('[userprofile] success',props<{userdata:users}>())

export const loadhome= createAction('[loadhome] load')
export const loadhomesuccess= createAction('[loadhomesuccess] success',props<{vehicledatas: vehilceldata[]}>())
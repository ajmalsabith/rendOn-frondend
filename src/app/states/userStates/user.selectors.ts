import { createSelector } from '@ngrx/store';
import { users,vehilceldata } from '../../Model/user'
import {apphome, appprofile} from './state'

export const profileRootSelector = (state:appprofile)=>state.userdata;
export const userProfile = createSelector(
    profileRootSelector,
    (userdata:users)=>{        
        return userdata
    }
)

export const loadhomerootselecter=(state:apphome)=>state.vehicledatas;

export const loadhomedata= createSelector(
    loadhomerootselecter,
    (vehicledatas:vehilceldata[])=>{
        
        return [...vehicledatas]
    }
)

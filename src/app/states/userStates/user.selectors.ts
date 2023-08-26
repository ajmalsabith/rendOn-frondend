import { createFeatureSelector, createSelector } from '@ngrx/store';
import { users,vehicleModel } from '../../Model/user'
import {apphome, appprofile, vehicleState} from './state'

export const profileRootSelector = (state:appprofile)=>state.userdata;
export const userProfile = createSelector(
    profileRootSelector,
    (userdata:users)=>{
                
        return userdata
    }
)


export const selectvehicleState = createFeatureSelector<vehicleState>('vehilceldata');

export const selectvehicles=createSelector(selectvehicleState,state=>state.vehicledata)
export const selectloading=createSelector(selectvehicleState,state=>state.loading)
export const selectloaded=createSelector(selectvehicleState,state=>state.loaded)
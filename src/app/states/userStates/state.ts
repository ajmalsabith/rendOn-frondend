import {users, vehicleModel} from '../../Model/user'

export interface appprofile{
    userdata:users
}


export interface apphome{
    vehicledata:vehicleModel[]
}

export interface vehicleState {
    vehicledata: ReadonlyArray<vehicleModel>;
    loading: boolean;
    loaded: boolean;
    error: any;
}

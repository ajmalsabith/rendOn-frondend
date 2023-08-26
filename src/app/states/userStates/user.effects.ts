
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { editprofileload,editprofilesuccess,loadhome,loadhomesuccess,loadhomefailure  } from "./user.action";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { UserserviceService } from "src/app/service/userservice/userservice.service";
import {users,vehicleModel} from '../../Model/user'


@Injectable()

export class userEffects{

    constructor(private actions$:Actions,private userservice:UserserviceService){}

    loadprofiledata$= createEffect(()=>
        this.actions$.pipe(
            ofType(editprofileload),
            switchMap(()=>{
                return this.userservice.loadeditprofile()
                .pipe(map((data)=>editprofilesuccess({userdata:data as users})))
            })
        )
    )


    loaduser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(loadhome),
            mergeMap(()=>
            this.userservice.loadhome().pipe(
                map(data=>(loadhomesuccess({vehicledata:data as vehicleModel[]}))),
                catchError((error)=>of(loadhomefailure({error})))
            ))
            
        )
    })
}


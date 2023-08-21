
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { editprofileload,editprofilesuccess,loadhome,loadhomesuccess  } from "./user.action";
import { map, switchMap } from "rxjs";
import { UserserviceService } from "src/app/service/userservice/userservice.service";
import {users,vehilceldata} from '../../Model/user'


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


    loadhome$= createEffect(()=>
         this.actions$.pipe(
            ofType(loadhome),
            switchMap(()=>{
                return this.userservice.loadhome()
                .pipe(map((data)=>loadhomesuccess({vehicledatas:data as vehilceldata[] })))
            })
         )
    )
}


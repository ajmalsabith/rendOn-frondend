import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { profileReducer, vehicleReducer } from './states/userStates/user.reducer';
import { userEffects } from './states/userStates/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProfessionalInterceptor } from './interceptor/interceptor.interceptor';
import { BrowserModule } from '@angular/platform-browser';

import { SocketIoModule } from 'ngx-socket-io';
import { CountPipe } from './pipes/count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CountPipe

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({userdata:profileReducer,vehilceldata:vehicleReducer}),
    EffectsModule.forRoot([userEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    SocketIoModule.forRoot({ url: 'http://localhost:5000' }),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProfessionalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

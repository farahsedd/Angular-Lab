import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {userReducer} from "./store/user.reducers";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    StoreModule.forRoot({user:userReducer},{}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),

    FormsModule,
  ]
})
export class AuthModule { }

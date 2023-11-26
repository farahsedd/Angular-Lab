import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowWordComponent } from './rainbow-word/rainbow-word.component';
import { RainbowDirective } from './rainbow-word/directives/rainbow.directive';
import { CvComponent } from './cv-management/cv/cv.component';
import { ListComponent } from './cv-management/list/list.component';
import { ItemComponent } from './cv-management/item/item.component';
import { CardComponent } from './cv-management/card/card.component';
import { LoginComponent } from './login/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { LogoutComponent } from './login/logout/logout.component';
import { StoreModule, provideStore } from '@ngrx/store';
import { userReducer } from './login/store/user.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {NgOptimizedImage} from "@angular/common";
import { CvTechComponent } from './cv-management/cv-tech/cv-tech.component';
import { SelectedComponent } from './cv-management/selected/selected.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { MasterDetailsCvComponent } from './cv-management/master-details-cv/master-details-cv.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './cv-management/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniWordComponent,
    RainbowWordComponent,
    RainbowDirective,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    LoginComponent,
    LogoutComponent,
    CvTechComponent,
    SelectedComponent,
    MasterDetailsCvComponent,
    NavbarComponent,
    DetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({user:userReducer},{}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    NgOptimizedImage,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

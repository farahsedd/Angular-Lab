import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowWordComponent } from './rainbow-word/rainbow-word.component';
import { RainbowDirective } from './rainbow-word/directives/rainbow.directive';
import { HttpClientModule } from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import {PaginatedListComponent} from './product/paginated-list/paginated-list.component';
import {ProductItemComponent} from './product/product-item/product-item.component';
import {ProductPageComponent} from './product/product-page/product-page.component';
import { MergeComponent } from './merge/merge.component';
import {CvModule} from "./cv/cv.module";
import {AuthModule} from "./auth/auth.module";
import { AddCvComponent } from './cv-management/add-cv/add-cv.component';
import {loginInterceptorProvider} from "./interceptors/login.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MiniWordComponent,
    RainbowWordComponent,
    RainbowDirective,
    NavbarComponent,
    MergeComponent,
    PaginatedListComponent,
    ProductItemComponent,
    ProductPageComponent,
    AddCvComponent
  ],
  imports: [
    AuthModule,
    CvModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    ReactiveFormsModule
  ],
  providers: [loginInterceptorProvider],
  bootstrap: [AppComponent],

})
export class AppModule { }

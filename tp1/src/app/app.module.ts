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
import {NgOptimizedImage} from "@angular/common";
import { CvTechComponent } from './cv-management/cv-tech/cv-tech.component';
import { SelectedComponent } from './cv-management/selected/selected.component';

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
    CvTechComponent,
    SelectedComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

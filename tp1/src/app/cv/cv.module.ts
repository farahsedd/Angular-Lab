import { NgModule } from '@angular/core';
import {CvRoutingModule} from "./cv-routing.module";
import {SelectedComponent} from "./selected/selected.component";
import {DetailsComponent} from "./details/details.component";
import {CvTechComponent} from "./cv-tech/cv-tech.component";
import {CvComponent} from "./cv/cv.component";
import {CardComponent} from "./card/card.component";
import {ListComponent} from "./list/list.component";
import {MasterDetailsCvComponent} from "./master-details-cv/master-details-cv.component";
import {ItemComponent} from "./item/item.component";
import { ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";




@NgModule({
  declarations: [
    DetailsComponent,
    CvTechComponent,
    SelectedComponent,
    MasterDetailsCvComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
  ],
  imports: [
    CvRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class CvModule { }

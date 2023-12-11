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
import {CommonModule} from "@angular/common";
import { AuthGuardService } from '../guards/auth.guard';




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
    CommonModule,
    CvRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    AuthGuardService
  ]
})
export class CvModule { }

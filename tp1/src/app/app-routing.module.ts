import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MiniWordComponent} from "./mini-word/mini-word.component";
import {RainbowWordComponent} from "./rainbow-word/rainbow-word.component";
import {ListComponent} from "./cv-management/list/list.component";
import {CvTechComponent} from "./cv-management/cv-tech/cv-tech.component";

const routes: Routes = [
  { path: '', redirectTo: '/mini-word', pathMatch: 'full' },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'rainbow-word', component: RainbowWordComponent },
  { path: 'cv-tech', component:  CvTechComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { MasterDetailsCvComponent } from './master-details-cv/master-details-cv.component';
import { DetailsComponent } from './details/details.component';
import { detailsResolver } from './resolvers/details-resolver.resolver';
import { cvResolver } from './resolvers/cv-resolver.resolver';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {CvTechComponent} from "./cv-tech/cv-tech.component";
import {CvComponent} from "./cv/cv.component";
import {AddCvComponent} from "./add-cv/add-cv.component";
import {cvGuard} from "./guards/cv.guard";



const routes: Routes = [
  { path: '', redirectTo: '/cv-tech', pathMatch: 'full' },
  { path: 'cv', component: ListComponent },
  { path: 'cv-tech', component: CvTechComponent },
  { path: 'cv/add', component: AddCvComponent ,
    canDeactivate: [cvGuard],
  },
  {path:'cv/update/:id',component:AddCvComponent,
    canDeactivate: [cvGuard],
  },
  {
    path: 'cv/list',
    component: MasterDetailsCvComponent,
    children: [
      {
        path: ':id',
        component: DetailsComponent,
        resolve: { cv: detailsResolver },
      },
    ],
  },
  {
    path: 'cv/:id',
    component: CvComponent,
    resolve: { cv: cvResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}

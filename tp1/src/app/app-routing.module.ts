import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MiniWordComponent} from "./mini-word/mini-word.component";
import {RainbowWordComponent} from "./rainbow-word/rainbow-word.component";
import {ListComponent} from "./cv-management/list/list.component";
import {LoginComponent} from './login/login/login.component';
import {LogoutComponent} from './login/logout/logout.component';
import {CvTechComponent} from "./cv-management/cv-tech/cv-tech.component";
import {CvComponent} from "./cv-management/cv/cv.component";
import {PaginatedListComponent} from "./product/paginated-list/paginated-list.component";
import {ProductPageComponent} from "./product/product-page/product-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/mini-word', pathMatch: 'full' },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'rainbow-word', component: RainbowWordComponent },
  { path: 'cv', component:  ListComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'logout', component:  LogoutComponent },
  { path: 'cv-tech', component:  CvTechComponent },
  { path: 'cv/:id', component: CvComponent },
  { path: 'product-list', component:  PaginatedListComponent },
  { path: 'product/:id', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

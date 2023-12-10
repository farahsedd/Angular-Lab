
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MiniWordComponent} from "./mini-word/mini-word.component";
import {RainbowWordComponent} from "./rainbow-word/rainbow-word.component";
import {PaginatedListComponent} from "./product/paginated-list/paginated-list.component";
import {ProductPageComponent} from "./product/product-page/product-page.component";
import {MergeComponent} from "./merge/merge.component";

const routes: Routes = [
  { path: '', redirectTo: '/mini-word', pathMatch: 'full' },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'rainbow-word', component: RainbowWordComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'product-list', component:  PaginatedListComponent },
  { path: 'product/:id', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

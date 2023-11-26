import {Component} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-paginated-list',
  templateUrl: './paginated-list.component.html',
  styleUrls: ['./paginated-list.component.css'],
  providers: [ProductService]
})
export class PaginatedListComponent {

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore() {
    this.productService.getProducts().subscribe()
  }
}

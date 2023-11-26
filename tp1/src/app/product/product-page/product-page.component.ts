import {Component} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../Product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  constructor(private productService: ProductService,private route :ActivatedRoute) {
  }

  product = {} as Product;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
    })
  }
}

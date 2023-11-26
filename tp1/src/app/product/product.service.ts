import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, of, tap} from 'rxjs';
import {Product} from "./Product";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private limit: number = 12;
  currentPage: number = 1;
  private productsSubject = new BehaviorSubject<Product[]>([]);
  total : number = 0;
  private completed: boolean = false;

  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getProducts(): Observable<{ limit: string, products: Product[], skip: string, total: string }> {
    if (this.completed) {
      this.toastr.error("No more products to load")
      return of();
    }
    const skip = (this.currentPage - 1) * this.limit;
    const url = `https://dummyjson.com/products?limit=${this.limit}&skip=${skip}`;
    return this.http.get<{ limit: string, products: Product[], skip: string, total: string }>(url)
      .pipe(
        tap(response => {
          this.total = parseInt(response.total);
          const currentProducts = this.productsSubject.getValue();
          const newProducts = response.products;
          if (newProducts.length<this.limit) {
            this.completed = true;
          }
          this.productsSubject.next([...currentProducts,...newProducts]);
          this.currentPage++;
      }));
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get('https://dummyjson.com/products/' + id).pipe(
      map((obj) => obj as Product )
    )
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Product} from "../common/product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = "http://localhost:8080/api/products";

  constructor(private http: HttpClient) {
  }

  getProductsList(currentCategoryId:number): Observable<Product[]> {
   const url: string = `${this.baseUrl}/search/findByCategoryId?id=${currentCategoryId}`;
    return this.http.get<GetResponse>(url).pipe(map(response => response._embedded.products))
  }
}

export interface GetResponse {
  _embedded: {
    products: Product [];
  }
}

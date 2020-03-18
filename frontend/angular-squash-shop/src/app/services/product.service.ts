import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Product} from "../common/product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = "http://localhost:8080/api/products";

  constructor(private http: HttpClient) {
  }

  getProductsList(): Observable<Product[]> {
    return this.http.get<GetResponse>(this.url).pipe(map(response => response._embedded.products))
  }
}

export interface GetResponse {
  _embedded: {
    products: Product [];
  }
}

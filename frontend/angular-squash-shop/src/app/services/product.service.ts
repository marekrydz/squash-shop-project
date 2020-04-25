import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Product} from "../common/product";
import {map} from "rxjs/operators";
import {ProductCategory} from "../common/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseProductUrl: string = "http://localhost:8080/api/products";
  private baseCategoryUrl: string = "http://localhost:8080/api/categories";

  constructor(private http: HttpClient) {
  }

  getProductsPageable(currentCategoryId: number, pageNumber: number, pageSize: number): Observable<GetResponseProduct> {
    const url: string = `${this.baseProductUrl}/search/findByCategoryId?id=${currentCategoryId}&page=${pageNumber}&size=${pageSize}`;
    return this.http.get<GetResponseProduct>(url);
  }

  getProductCategoryList(): Observable<ProductCategory[]> {
    return this.http.get<GetResponseProductCategories>(this.baseCategoryUrl)
      .pipe(map(response => response._embedded.productCategories))
  }

  getSearchedProductsPageable(name: string, page: number, pageSize: number): Observable<GetResponseProduct> {
    const url: string = `${this.baseProductUrl}/search/findProductByNameContains?name=${name}&page=${page}&size=${pageSize}`;
    return this.http.get<GetResponseProduct>(url);
  }
}

export interface GetResponseProduct {
  _embedded: {
    products: Product [];
  }
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

export interface GetResponseProductCategories {
  _embedded: {
    productCategories: ProductCategory [];
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from "../../common/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  currentCategoryId: number;
  category: string;
  name: string;


  constructor(private productService: ProductService, public activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(() => {
      this.handleProducts()
    });
  }

  handleProducts() {
    let hasCategoryId: boolean = this.activateRoute.snapshot.paramMap.has('id');
    let hasProductName: boolean = this.activateRoute.snapshot.paramMap.has('name');

    if (hasProductName) {
      this.name = this.activateRoute.snapshot.paramMap.get('name');
      this.getSearchedProducts(this.name);
    } else if (hasCategoryId) {
      this.currentCategoryId = +this.activateRoute.snapshot.paramMap.get('id');
      this.getProducts(this.currentCategoryId)
    } else {
      this.getProducts(1);
    }
  }

  getSearchedProducts(name: string) {
    this.productService.getSearchedProductsList(name).subscribe(data => this.products = data)
  }

  getProducts(categoryId: number) {
    this.productService.getProductsList(categoryId).subscribe(data => this.products = data);
  }
}

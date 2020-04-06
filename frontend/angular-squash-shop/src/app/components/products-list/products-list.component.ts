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


  constructor(private productService: ProductService, public activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(() => {
      this.getProducts()
    });
  }

  getProducts() {
    let hasCategoryId: boolean;

    hasCategoryId = this.activateRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.activateRoute.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

    this.getCategory(this.currentCategoryId);

    this.productService.getProductsList(this.currentCategoryId).subscribe(data => this.products = data);
  }

  getCategory(category:number) {
    if (category === 1) {
      this.category = "rackets"
    } else if (category === 2) {
      this.category = "shoes"
    } else {
      this.category = "balls"
    }
  }
}

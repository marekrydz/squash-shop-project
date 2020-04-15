import { Component, OnInit } from '@angular/core';
import {ProductCategory} from "../../common/product-category";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {

  productCategories:ProductCategory [];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProductCategories()
  }

  private getProductCategories() {
    this.productService.getProductCategoryList().subscribe(data=>{
      console.log(JSON.stringify(data));
      this.productCategories=data;
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => this.getProductDetails())
  }

  private getProductDetails() {
    let hasProductId: boolean = this.activatedRoute.snapshot.paramMap.has('id');
    let productId: number;

    if (hasProductId) {
      productId = +this.activatedRoute.snapshot.paramMap.get('id');
    } else {
      console.log("zobaczymy");
    }

    this.productService.getProduct(productId).subscribe(data => console.log(this.product = data))
  }
}

import {Component, OnInit} from '@angular/core';
import {CartItemService} from "../../services/cart-item.service";

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  totalPrice = 0.0;
  itemQuantity = 0;

  constructor(private cartItemService: CartItemService) {
  }

  ngOnInit() {
    this.updateCartStatus()
  }

  updateCartStatus() {
    this.cartItemService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartItemService.itemQuantity.subscribe(data => this.itemQuantity = data);
  }
}

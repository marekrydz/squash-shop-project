import {Component, OnInit} from '@angular/core';
import {CartItem} from "../../common/cart-item";
import {CartItemService} from "../../services/cart-item.service";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  itemsInCart: CartItem[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0.0;

  constructor(private cartItemService: CartItemService) {
  }

  ngOnInit() {
    this.listCartItems();
  }

  private listCartItems() {
    this.itemsInCart = this.cartItemService.itemsInCart;
    console.log("Item in cart " + this.cartItemService.itemsInCart);

    this.cartItemService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartItemService.itemQuantity.subscribe(data => this.totalQuantity = data);
    this.cartItemService.computeCartTotals(this.itemsInCart);
  }

  private raiseItemQuantity(item: CartItem) {
    this.cartItemService.raiseItemQuantity(item);
    this.cartItemService.computeCartTotals(this.itemsInCart);
  }

  private reduceItemQuantity(item: CartItem) {
    this.cartItemService.reduceItemQuantity(item);
    this.cartItemService.computeCartTotals(this.itemsInCart);
  }

  private remove(cartItem: CartItem) {
    this.cartItemService.remove(cartItem);
    this.cartItemService.computeCartTotals(this.itemsInCart);
  }
}

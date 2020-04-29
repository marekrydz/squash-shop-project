import {Injectable} from '@angular/core';
import {CartItem} from "../common/cart-item";
import {Product} from "../common/product";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  itemsInCart: CartItem[] = [];
  itemQuantity: Subject<number> = new Subject();
  totalPrice: Subject<number> = new Subject();
  tempQuantity: number = 0;
  tempTotalPrice: number = 0.0;


  constructor() {
  }


  addToCart(product: Product) {
    let item: CartItem = new CartItem(product);

    //Check if cart is empty
    if (this.itemsInCart.length != 0) {
      //check if item exists in cart,
      if (this.itemsInCart.find(tempItem => tempItem.id == item.id) != undefined) {
        item.quantity++;
      } else {
        this.itemsInCart.push(item);
      }
    } else {
      this.itemsInCart.push(item);
    }

    //Calculate current cart values
    this.tempQuantity++;
    this.tempTotalPrice += item.unitPrice;


    this.itemQuantity.next(this.tempQuantity);
    this.totalPrice.next(this.tempTotalPrice);

    console.log(`Products in cart +${this.tempQuantity} and total price: ${this.tempTotalPrice}`);
  }
}

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

  constructor() {
  }


  addToCart(product: Product) {
    let item: CartItem = new CartItem(product);

    //Check if cart is empty
    if (this.itemsInCart.length != 0) {
      //check if item exists in cart, if exist get item index
      let index: number = this.itemsInCart.findIndex(tempItem => tempItem.id == item.id);

      if (index != -1) {
        this.itemsInCart[index].quantity++;
      } else {
        this.itemsInCart.push(item);
      }

    } else {
      this.itemsInCart.push(item);
    }

    //Calculate totals price and quantity
    this.computeCartTotals(this.itemsInCart)
  }

  computeCartTotals(items: CartItem[]) {
    let tempQuantity: number = 0;
    let tempTotalPrice: number = 0.0;

    for (let item of items) {
      tempQuantity += item.quantity;
      tempTotalPrice += item.unitPrice * item.quantity;
    }

    this.itemQuantity.next(tempQuantity);
    this.totalPrice.next(tempTotalPrice);
    console.log(`Products in cart +${tempQuantity} and total price: ${tempTotalPrice}`);
  }

  raiseItemQuantity(item: CartItem) {
    item.quantity++;
  }

  reduceItemQuantity(item: CartItem) {
    // If quantity is 1 and user reduce, remove product from cart item list
    if (item.quantity <= 1) {
      let index = this.itemsInCart.indexOf(item);
      this.itemsInCart.splice(index, 1)
    }
    item.quantity--;
  }

  remove(item: CartItem) {
    console.log("name: " + item.name + " id:" + item.id);
    console.log("Items in cart ");
    for (let item of this.itemsInCart) {
      console.log(item.name)
    }
    let index = this.itemsInCart.indexOf(item);
    if (index != -1) {
      this.itemsInCart.splice(index, 1)
    } else {
      console.log("Unknown index of product")
    }

  }
}

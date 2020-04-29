import {Product} from "./product";

export class CartItem {
  id: number;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;

  quantity: number;

  constructor(private product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.unitPrice = product.unitPrice;
    this.imageUrl = product.imageUrl;

    this.quantity = 1;
  }
}

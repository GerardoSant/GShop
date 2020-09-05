import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems : CartItem[] = [];

  totalPrice : Subject<number> = new Subject<number>();
  totalQuantity : Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(cartItem : CartItem){
      let alreadyExistsInCart : boolean = false;
      let existingCartItem: CartItem = undefined;

      if (this.cartItems.length>0){
        for (let tempCartItem of this.cartItems){
          if (tempCartItem.id == cartItem.id){
            alreadyExistsInCart=true;
            existingCartItem = tempCartItem;
            break;
          }
        }
      }

      if (alreadyExistsInCart){
        existingCartItem.quantity++;
      } else{
        this.cartItems.push(cartItem);
      }

      this.computeCartTotals();
  }
  computeCartTotals() {
    let totalPriceValue : number = 0;
    let totalQuantityValue : number = 0;

    for (let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity*(currentCartItem.unitPrice);
      totalQuantityValue += currentCartItem.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  logCartData(){
    for (let cartItem of this.cartItems) console.log(cartItem.name+  " || " +cartItem.quantity);
  }

  updateQuantity(cartItem: CartItem, value: number){
    for (let tempCartItem of this.cartItems){
      if (tempCartItem.id == cartItem.id){
        tempCartItem.quantity = value;
        this.computeCartTotals();
        break;
      }
    }
  }

  removeCartItem(cartItem: CartItem) {
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id == cartItem.id);
    if (itemIndex > -1){
      this.cartItems.splice(itemIndex,1);
      this.computeCartTotals();
    }

  }

}

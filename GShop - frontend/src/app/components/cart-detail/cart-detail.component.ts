import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  cartItems : CartItem[] = [];
  totalPrice : number = 0;
  totalQuantity: number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails(){
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      data=> this.totalPrice= data
    )

    this.cartService.totalQuantity.subscribe(
      data=> this.totalQuantity= data
    )

    this.cartService.computeCartTotals();
  }

  updateQuantity(cartItem: CartItem, value: number){
    this.cartService.updateQuantity(cartItem,+value);
  }

  removeCartItem(cartItem: CartItem){
    this.cartService.removeCartItem(cartItem);
  }

}

import { Component } from '@angular/core';
import { CartService } from '../../Shared/services/cart/cart.service';
import { Cart } from '../../cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cartInfo :Cart={} as Cart
  constructor(private _cartService: CartService) {}

ngOnInit() {
  this.getCartInfo();
}

getCartInfo() {
  this._cartService.getCartInfo().subscribe({
    next: (res) => {
      console.log(res);
      this.cartInfo = res
    }
  });
}
removeItem(id:string){
this._cartService.DeleteProduct(id).subscribe({
  next: (res) => {
    console.log(res);
    this.cartInfo = res
  }

});
}
}


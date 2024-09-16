import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private headers={   token: localStorage.getItem("token")||"" }
  constructor(private _httpClient: HttpClient) { }

  addProductToCart(productId: string): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
      { productId },
      {
        headers: this.headers
      }
    );
  }  
  getCartInfo(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
      {
        headers: this.headers
      }
    );
  }  
  DeleteProduct(id: string): Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers: this.headers
      }
    );
  }  
}

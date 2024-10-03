import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('token') : ''}`
  });

  constructor(private _httpClient: HttpClient) {}

  addProductToCart(productId: string): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart', { productId }, { headers: this.headers })
      .pipe(
        catchError((error) => {
          console.error('Error adding product to cart:', error);
          return throwError(error);
        })
      );
  }

  getCartInfo(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart', { headers: this.headers })
      .pipe(
        catchError((error) => {
          console.error('Error fetching cart info:', error);
          return throwError(error);
        })
      );
  }

  DeleteProduct(id: string): Observable<any> {
    return this._httpClient.delete(`https://commerce.route-misr.com/api/v1/cart/${id}`, { headers: this.headers })
      .pipe(
        catchError((error) => {
          console.error('Error deleting product from cart:', error);
          return throwError(error);
        })
      );
  }
}

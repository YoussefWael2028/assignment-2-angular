import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth, signIn } from '../../../auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) {}

  signUp(data: Auth): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data);
  }

  signIn(data: signIn): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', data);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated: boolean;
  readonly httpOptions = {
    withCredentials: true
  };


  constructor(private http: HttpClient) {
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  login(username: string) {
    const payload = { username: username };
    this.http.post('http://localhost:3333/api/login', payload, this.httpOptions).subscribe()
  }
}

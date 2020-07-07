import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<any>(null);
  private localUser: any;
  constructor(http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token') || null;
  }
}

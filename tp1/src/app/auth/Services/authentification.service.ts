import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  http = inject(HttpClient);
  router = inject(Router);

  private authURL = 'https://apilb.tridevs.net/api/Users/login';

  private userSubject: BehaviorSubject<User | null>;
  user$: Observable<User | null>;
  isAuthenticated$: Observable<boolean>;

  constructor() {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user$ = this.userSubject.asObservable();
    this.isAuthenticated$ = this.userSubject.pipe(map((res) => res != null));
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<User>(this.authURL, {
        email,
        password,
      })
      .pipe(
        tap((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store, createSelector, select } from '@ngrx/store';
import { authActions } from '../store/user.actions';
import { AppState, appStore } from '../store/user.store';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private authURL = 'https://apilb.tridevs.net/api/Users/login';
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  isAuthenticated$: Observable<boolean>;

  constructor(private http: HttpClient,private router: Router,private store: Store) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
    // this.isAuthenticated$ = this.store.pipe(select((state)=>!!state["auth"].user));
    this.isAuthenticated$ = this.store.pipe(select((state)=>!!state));
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
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          this.store.dispatch(authActions.login({id:user?.id??"",email:email}));
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.store.dispatch(authActions.logout());
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  // load(){
  //   let data = JSON.parse(localStorage.getItem('user')??"");
  //   var user = Object.assign(new User,data)
  //   this.store.dispatch(authActions.load(user))
  // }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from "rxjs";
import {AuthentificationService} from "./auth/Services/authentification.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp1';
  isLoggedIn$ : Observable<boolean>
  constructor(private authentificationService: AuthentificationService,private store: Store) {
    this.isLoggedIn$ = this.authentificationService.isAuthenticated$;

  }

  // ngOnInit() {
  //   // Dispatch the action to load the user state on application startup
  //   this.store.dispatch(authActions.load());
  // }
}

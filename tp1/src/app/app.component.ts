import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from './login/store/user.actions';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { initialUserState } from './login/store/user.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp1';
  constructor(private store: Store) {}

  // ngOnInit() {
  //   // Dispatch the action to load the user state on application startup
  //   this.store.dispatch(authActions.load());
  // }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


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

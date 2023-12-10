import { Component, inject } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  authService = inject(AuthentificationService);

  isAuthenticated$: Observable<boolean>;

  constructor() {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  logout() {
    this.authService.logout();
  }
}

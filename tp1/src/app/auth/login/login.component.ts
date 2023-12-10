import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../Services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authService = inject(AuthentificationService);
  router = inject(Router);

  email: string = '';
  password: string = '';

  constructor() {}

  onSubmit(loginForm: NgForm) {
    this.email = loginForm.value.email;
    this.password = loginForm.value.password;

    this.authService
      .login(this.email, this.password);
    this.router.navigate(['/logout']);
  }
}

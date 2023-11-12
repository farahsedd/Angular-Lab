import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { AuthentificationService } from '../Services/authentification.service';
import { Router } from '@angular/router';
import { authActions } from '../store/user.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';


  constructor(private http: HttpClient,private router: Router,private authService: AuthentificationService,private store: Store) {}

  onSubmit(loginForm: NgForm) {
    this.email = loginForm.value.email;
    this.password = loginForm.value.password;

    this.authService.login(this.email,this.password)
    .pipe(first())
    .subscribe({
      next:()=>{
        this.router.navigate(['/logout']);
      },
      error: error => {
        alert(error.message)
    } 
    })

  }

  // ngOnInit() {
  //   this.authService.load()
  // }
}

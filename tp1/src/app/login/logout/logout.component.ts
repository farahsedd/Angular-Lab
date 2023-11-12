
import { Component } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { appStore } from '../store/user.store';
import { Observable } from 'rxjs/internal/Observable';
import { authActions } from '../store/user.actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  isAuthenticated$: Observable<boolean>;

  constructor(private http: HttpClient,private router: Router,private authService: AuthentificationService,private store: Store) {

  this.isAuthenticated$ = this.store.pipe(select((state)=>!!appStore.user));
  console.log(this.isAuthenticated$)

  }

  //  ngOnInit() {
  //   this.authService.load()
  // }
  logout(){
    this.authService.logout()
  }
}

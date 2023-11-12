
import { Component } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, appStore } from '../store/user.store';
import { Observable } from 'rxjs/internal/Observable';
import { authActions } from '../store/user.actions';
import { map } from 'rxjs';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent {
  isAuthenticated$: Observable<boolean>;

  
  constructor(private http: HttpClient,private router: Router,private authService: AuthentificationService,private store: Store) {
// hethi 8alta !!!!!!!!!!!!!!!!!!!!!
  this.isAuthenticated$ = this.store.pipe(map((state)=>!!appStore.user));
  console.log(appStore.user+"   ")
  console.log(this.isAuthenticated$)

  }

  //  ngOnInit() {
  //   this.authService.load()
  // }
  logout(){
    this.authService.logout()
  }
}

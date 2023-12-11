import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { List } from 'immutable';
import { User } from "../users.service";

export const fibonnaci = (n: number): number => {
  if (n==1 || n==0) {
    return 1;
  }
  return fibonnaci(n-1) + fibonnaci(n-2);
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input() usersCluster: string = '';
  @Input() users: List<User> = List([]);
  fibo(n: number): number {
    const fib = fibonnaci(n);
    return fib;
  }
}

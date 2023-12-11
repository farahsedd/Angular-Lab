import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { NgZone } from '@angular/core';
import { Component } from '@angular/core';
import { List } from 'immutable';
import { UsersService } from '../users.service';
import { User } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() users: List<User> = List([]);

  constructor(private userService: UsersService) {
  }
  addUser(newUser: string) {
    this.users = this.userService.addUser(this.users, newUser);
  }
  @Input() usersCluster: string = '';
}

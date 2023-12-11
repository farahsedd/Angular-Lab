import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user-input',
  templateUrl: './add-user-input.component.html',
  styleUrls: ['./add-user-input.component.css']
})
export class AddUserInputComponent {
  constructor(private userService: UsersService) {
  }
  @Output() add = new EventEmitter<string>();
  userFullName: string = '';
  addUser() {
    this.add.emit(this.userFullName);
    this.userFullName = '';
  }
}

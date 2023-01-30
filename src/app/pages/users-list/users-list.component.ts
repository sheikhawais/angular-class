import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import {MatButtonModule} from '@angular/material/button';
import { UsersService } from 'src/app/modules/users/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  addUser: boolean = false;
  userToBeEdited: any;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]') || [];
    this.usersService.users = this.users;
  }

  saveUser(user: any) {
    this.users.push(user);
    this.addUser = false;
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  editUser(user: User) {
    this.addUser = true;
    this.userToBeEdited = user;
  }

}

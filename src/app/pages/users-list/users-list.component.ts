import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  addUser: boolean = false;
  userToBeEdited: any;

  constructor() { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]') || [];
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

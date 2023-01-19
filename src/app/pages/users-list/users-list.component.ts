import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [
    { name: 'Awais', age: 30, email: 'sh.awais14@gmail.com' },
    { name: 'Youssef', age: 27, email: 'youssef.yehia152@gmail.com' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    console.log(this.usersService.users);
  }

}

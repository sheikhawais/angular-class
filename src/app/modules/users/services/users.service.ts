import { Injectable } from '@angular/core';
import { User } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[];
  
  constructor() { }

}

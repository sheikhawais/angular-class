import { Component } from '@angular/core';
import { User } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Buggy';
  today = new Date();

  constructor() { 
    console.log('constructor');
  }
  
  ngOnInit() {
    console.log('Ng on init');
  }

}

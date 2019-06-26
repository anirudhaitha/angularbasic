import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  userName = "";

  // Here login is @Output which has an event emitted from login compoent and it is calling a local method called onLogin which is setting the user name in header component.
  
  onLogin(user: string) {
    this.userName = user;
  }

}

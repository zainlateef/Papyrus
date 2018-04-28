import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  
  show_menu : boolean;

  constructor() { }

  ngOnInit() {
    this.show_menu=false;
  }

  toggleMenu()
  {
    this.show_menu=!this.show_menu;
  }


}

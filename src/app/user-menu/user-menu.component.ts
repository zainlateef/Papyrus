import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  toggleMenu()
  {
    $("ul").toggleClass("close");
  }


}

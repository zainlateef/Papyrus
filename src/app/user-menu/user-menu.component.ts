import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  toggleMenu()
  {
    $("#menu").toggleClass("close");
  }


}

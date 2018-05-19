import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  
  constructor() { }

  closed : boolean;
  ngOnInit() {
  }

  toggleMenu()
  {
    // console.log("toggling class menu")
    $("#menu").toggleClass("close");
  }

  onClickedOutside(e: Event)
  {
    // console.log("clicked outside of menu");
    $("#menu").addClass("close");
  }

}

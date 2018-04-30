import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  toggle_searchbar()
  {
    $("#searchbar").toggleClass("close");
  }

  onClickedOutside(e: Event)
  {
    console.log("clicked outside of it");
    $("#searchbar").addClass("close");
  }

}

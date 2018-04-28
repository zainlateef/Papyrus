import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  show_searchbar : boolean;
  constructor() { }

  ngOnInit() {
    this.show_searchbar=false;
  }

  toggle_searchbar()
  {
    this.show_searchbar=!this.show_searchbar;
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit,OnDestroy {

  
  show_searchbar : boolean;

  constructor() { }

  ngOnInit() {
    this.show_searchbar=false;
  }
  ngOnDestroy() {
    
  }

  toggle_searchbar($event)
  {
    
    this.show_searchbar=!this.show_searchbar;
  }

}

import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild("nav__list") menu : ElementRef;
  @ViewChild("burger") burger : ElementRef;

  constructor(private dragulaService: DragulaService) {
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
  }

  ngOnInit() {
    
  }

  openMenu() {
    console.log("here");
    this.burger.nativeElement.classList.toggle('burger--active');
    this.menu.nativeElement.classList.toggle('nav__list--active');
  }

  private onDrop(args) {
    let [e, el] = args;
    console.log("dropped"+JSON.stringify(args));
    // TODO: test whether drag and drop persists automatically 
    // persists, or do I have to somehow parse the dom for the ordering
    // do something
  }

}
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild("nav__list") menu : ElementRef;
  @ViewChild("burger") burger : ElementRef;

  constructor() { }

  ngOnInit() {
    
  }

  openMenu() {
    console.log("here");
    this.burger.nativeElement.classList.toggle('burger--active');
    this.menu.nativeElement.classList.toggle('nav__list--active');
  }

}
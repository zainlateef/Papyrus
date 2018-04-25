import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild("nav_list") menu : ElementRef;
  @ViewChild("burger") burger : ElementRef;
  doc = $(document);
  panel = $('.panel');
  vh = $(window).height();


  constructor() { }

  ngOnInit() {
    this.panel.eq(0).find('.panel__content').addClass('panel__content--active');
  }

  openMenu() {
    alert("hi");
    this.burger.nativeElement.classList.toggle('burger--active');
    this.menu.nativeElement.classList.toggle('nav__list--active');
  }

  @HostListener('window:scroll')
  @HostListener('window:load')
  scrollFx() {
    var ds = this.doc.scrollTop();
    var of = this.vh / 4;
    
    // if the panel is in the viewport, reveal the content, if not, hide it.
    for (var i = 0; i < this.panel.length; i++) {
      if (this.panel.eq(i).offset().top < ds+of) {
      this.panel
        .eq(i)
        .find('.panel__content')
        .addClass('panel__content--active');
      } else {
        this.panel
          .eq(i)
          .find('.panel__content')
          .removeClass('panel__content--active')
      }
    }
  }
}
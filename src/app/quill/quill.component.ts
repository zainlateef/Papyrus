import { Component, OnInit } from '@angular/core';
declare var Quill:any;
@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.css']
})
export class QuillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var quill = new Quill('#editor', {
      theme: 'snow'
    });
  }

}

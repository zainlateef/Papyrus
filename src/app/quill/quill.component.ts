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
    var toolbarOptions = [
      [{ 'size': ['small', false, 'large'] },
      { 'color': [] }, { 'background': [] }, 
      'bold', 'italic', 'underline',
      'code-block','formula', 'image',               // custom button values
      {'list': 'ordered'}, { 'list': 'bullet' },
      { 'align': [] }],                                     // remove formatting button
    ];    
    var options = {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions
      },
      placeholder: 'Random generated message similar to the toolbar'
     }
    var quill = new Quill('#editor', options);
  }

}

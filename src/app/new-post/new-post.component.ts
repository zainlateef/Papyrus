import { Component, OnInit } from '@angular/core';
declare var Quill:any;
@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    var toolbarOptions = [
      { 'size': ['small', false, 'large'] },
      { 'color': [] }, { 'background': [] }, 
      'bold', 'italic', 'underline',
      'image',              
      {'list': 'ordered'}, { 'list': 'bullet' },
      { 'align': [] },
      'publish'                            
    ];    
    var options = {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions
      },
      placeholder: 'Random generated message similar to the toolbar'
     }
    var quill = new Quill('#new-post', options);
  }

}

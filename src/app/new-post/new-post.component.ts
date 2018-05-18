import { Component, OnInit } from '@angular/core';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module';

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
    Quill.register('modules/imageDrop', ImageDrop);
    Quill.register('modules/imageResize', ImageResize);

    var toolbarOptions = [
      { 'size': ['small', false, 'large'] },
      { 'color': [] }, { 'background': [] }, 
      'bold', 'italic', 'underline',
      'video',          
      {'list': 'ordered'}, { 'list': 'bullet' },
      { 'align': [] },
      'publish'                            
    ];    

    var options = {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions,
        imageDrop: true,
        imageResize: { parchment : Quill.import('parchment')}
      },
      bounds: '#new-post',
      placeholder: 'Random generated message similar to the toolbar'
     }

    var quill = new Quill('#new-post', options);
  }

}

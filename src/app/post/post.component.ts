import { Component, OnInit } from '@angular/core';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module';
import MagicUrl from 'quill-magic-url';

declare var Quill:any;

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  constructor() { }

  quill : any;

  ngOnInit() 
  {
    Quill.register('modules/imageDrop', ImageDrop);
    Quill.register('modules/imageResize', ImageResize);
    Quill.register('modules/magicUrl', MagicUrl);

    var toolbarOptions = [
      { 'size': ['small', false, 'large','huge'] },
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
        imageResize: { parchment : Quill.import('parchment')},
        magicUrl: true
      },
      bounds: '#post',
      placeholder: 'Random generated message similar to the toolbar'
     }

    this.quill = new Quill('#post', options);

    //toggle this when the correct user clicks on it
    this.quill.enable(false);

  }

}

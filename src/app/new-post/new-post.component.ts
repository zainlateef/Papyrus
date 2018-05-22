import { Component, OnInit } from '@angular/core';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module';
import MagicUrl from 'quill-magic-url';

declare var Quill:any;

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

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
      'video', 'link',  
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
      bounds: '#new-post',
      placeholder: 'Random generated message similar to the toolbar'
     }

    this.quill = new Quill('#new-post', options);
    this.embed_media();
  }
  
  embed_media()
  {
    this.quill.on('text-change', function(delta, oldDelta, source) {
      if (source == 'api') 
      {
        console.log("An API call triggered this change.");
      } 
      else if (source == 'user') 
      {
        console.log("A user action triggered this change.");
        var pasted_text=delta.ops[1].insert;
        
      }
    });
  }

}

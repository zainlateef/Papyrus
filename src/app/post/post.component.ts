import { Component, OnInit, Input } from '@angular/core';
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
  @Input('post_id') post_id : any;
  quill : any;

  ngOnInit() 
  {
    Quill.register('modules/imageDrop', ImageDrop);
    Quill.register('modules/imageResize', ImageResize);
    Quill.register('modules/magicUrl', MagicUrl);
    console.log(this.post_id);
    //toggle this when the correct user clicks on it
    // this.quill.enable(false);

  }

  initialize_editor()
  {
    console.log("double clicked in "+this.post_id)
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

    this.quill = new Quill('#'+this.post_id, options);

    //to destroy, take the innerhtml out of the editor, 
    //destroy the wrapper instance, recreate the wrapper 
    //and the div and reinsert the text into the div.
    //in the live version the innerhtml will be sent to the server and 
    //recieved by the div. how do we differentiate wrapper instances?
  }



}

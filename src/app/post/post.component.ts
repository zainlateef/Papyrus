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
  toolbarOptions : any;
  options : any;
  show_editor : boolean;

  ngOnInit() 
  {
     this.quill_setup();
     this.show_editor=false;
  }

  toggle_editor()
  {
    console.log("double clicked in "+this.post_id)
    this.show_editor=!this.show_editor;
    if(this.show_editor)
    {
      this.quill = new Quill('#'+this.post_id, this.options);
    }
    else
    {
      //teardown
    }
  }

  initialize_editor()
  {
    this.quill = new Quill('#'+this.post_id, this.options);
    console.log("inner html"+this.quill.root.innerHTML);
  }

  quill_setup(){
    Quill.register('modules/imageDrop', ImageDrop);
    Quill.register('modules/imageResize', ImageResize);
    Quill.register('modules/magicUrl', MagicUrl);
    this.toolbarOptions = [
      { 'size': ['small', false, 'large','huge'] },
      { 'color': [] }, { 'background': [] }, 
      'bold', 'italic', 'underline',
      'video',          
      {'list': 'ordered'}, { 'list': 'bullet' },
      { 'align': [] },
      'publish'                            
    ];    

    this.options = {
      theme: 'snow',
      modules: {
        toolbar: this.toolbarOptions,
        imageDrop: true,
        imageResize: { parchment : Quill.import('parchment')},
        magicUrl: true
      },
      bounds: '#'+this.post_id,
      placeholder: 'Random generated message similar to the toolbar'
     }
  }



}

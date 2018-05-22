import { Component, OnInit } from '@angular/core';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module';
import MagicUrl from 'quill-magic-url';
declare var $:any;
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
        var pasted_text=delta.ops[1].insert;
        console.log(pasted_text)
        var soundcloud_regex=/^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
        if(pasted_text.match(soundcloud_regex) && pasted_text.match(soundcloud_regex)[2])
        {
          console.log("soundcloud link detected");
          var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://soundcloud.com/oembed",
            "method": "POST",
            "headers": {},
            "data": {
              "format": "json",
              "url": pasted_text
            }
          }
          
          $.ajax(settings).done(function (response) {
            console.log("this is the response:"+JSON.stringify(response));
          });
        }
    });
  }

}

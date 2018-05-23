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

  static quill : any;

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

    NewPostComponent.quill = new Quill('#new-post', options);
    this.embed_media();
  }
  
  embed_media()
  {
    NewPostComponent.quill.on('text-change', function(delta, oldDelta, source) {
        console.log(JSON.stringify(delta));
        var index=delta.ops[0].retain;
        if(!index)
        {
          var pasted_text=delta.ops[0].insert;
          index=0;
        }
        else
        var pasted_text=delta.ops[1].insert;

        var soundcloud_regex=/^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
        if(pasted_text.match(soundcloud_regex) && pasted_text.match(soundcloud_regex)[2])
        {
          NewPostComponent.insert_soundcloud(pasted_text,index);
        }
    });
  }

  static insert_soundcloud(pasted_text: String, index : number) {

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
      // NewPostComponent.quill.insertText(pasted_text.length+index,"Fart",'bold');
      var iframe=response.html;
      var url=iframe.substring(iframe.lastIndexOf('src="')+5,iframe.lastIndexOf('\"><'));
      console.log("URL:"+url);
      NewPostComponent.quill.insertEmbed(pasted_text.length+index,'video',url);
    });
  }

}

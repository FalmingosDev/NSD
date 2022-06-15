import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  imagePath:File;
  message:string;
  url:any='assets/images/defaul-profile-image.png';
  selectedFile:File;

  constructor() { 
    $(document).ready(function(){
      $("#edit-click").click(function(){
          alert('1')
      $('#edit-one').hide();
      $('#edit-two').show();
      });
    });

    
  }

  ngOnInit(): void {
    $(".upload-button").on('click', function() {
      $(".file-upload").click();
    });
  }
  onFileChanged(event) {
    const files = event.target.files;   
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
      
    }
    this.selectedFile=<File>event.target.files[0];

  }
}

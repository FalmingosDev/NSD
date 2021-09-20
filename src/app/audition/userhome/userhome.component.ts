import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  user_id:string;
  user_name:string;
  user_field:string;
  message:string;
  imagePath:File;
  // selectedFile=new FormControl();
  selectedFile:File;
  file_data:any='';
  success_img_upload:any;
  
  
  url:any="assets/images/defaul-profile-image.png";

  constructor(private dataservice:ApiService,private router:Router) { }

  ngOnInit(): void {
    console.log("hello from user home");

   

    let local_email=localStorage.getItem('token');
    this.dataservice.userprofile(local_email).subscribe((response) => {
     this.user_id=response.data.id;
     this.user_name=response.data.name;
     this.user_field=response.data.apply_name;
     if(response.data.picture!=null){
       this.url="http://localhost/NSD/image/userprofile_img/"+response.data.picture;
     }
     this.dataservice.sendData(response.data);
     });
     $(".upload-button").on('click', function() {
      $(".file-upload").click();
     });
  }
  
  onFileChanged(event){
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
   this.success_img_upload=this.dataservice.uploadUserImage(this.selectedFile);

  }

 




}

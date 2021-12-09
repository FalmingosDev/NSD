import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


import * as $ from 'jquery';

@Component({
  selector: 'app-joinascreator',
  templateUrl: './joinascreator.component.html',
  styleUrls: ['./joinascreator.component.css']
})
export class JoinascreatorComponent implements OnInit {

  
  local_email:string="";

  crtForm: FormGroup;
  message:string;
  imagePath:File;
  url:any='assets/images/defaul-profile-image.png';
  selectedFile:File;

 


  
  constructor(private dataService: ApiService, private applyService: ApiService, private router: Router)
  { }

  ngOnInit(): void {
    
    const email = localStorage.getItem('token');
    this.local_email=email;

    this.crtForm = new FormGroup({
      creator_img:new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.minLength(1), Validators.email]),
      creator_user_name: new FormControl('', Validators.required),
      creator_dob: new FormControl('', Validators.required),
      creator_topic: new FormControl('', Validators.required),
      creator_desc: new FormControl('', Validators.required),
      creator_profile_pic: new FormControl('',Validators.required),
      });

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

  get creator_img() { return this.crtForm.get('creator_img') }
  get creator_user_name() { return this.crtForm.get('creator_user_name') }
  get creator_topic() { return this.crtForm.get('creator_topic') }
  get creator_desc() { return this.crtForm.get('creator_desc') }
  get email() { return this.crtForm.get('email') }
  get creator_dob() { return this.crtForm.get('creator_dob') }
  get creator_profile_pic() { return this.crtForm.get('creator_profile_pic') }



  creatordata(crtForm) {
    var action_type = 'submit';
    if(this.creator_img.status == 'INVALID'){
      alert('Image field is required');
    }
    else if (this.creator_user_name.status == 'INVALID') {
      alert('Name field is required');
      $('#creator_user_name').focus();
    }
    else if (this.creator_dob.status == 'INVALID') {
      alert('Date of Birth field is required');
      $('#creator_dob').focus();
    }
    else if (this.creator_topic.status == 'INVALID') {
      alert('Topic field is required');
      $('#creator_topic').focus();
    }
    else if (this.creator_desc.status == 'INVALID') {
      alert('Please give the reason');
      $('#creator_desc').focus();
    }
    else{
      this.dataService.postCreatorForm(crtForm.creator_user_name,crtForm.email,crtForm.creator_dob, crtForm.creator_topic, crtForm.creator_desc, this.selectedFile);
      this.router.navigate(['/']);
    }

  }






}

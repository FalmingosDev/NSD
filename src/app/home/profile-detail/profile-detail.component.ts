import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

import { AlertService } from 'ngx-alerts';
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

  pflForm: FormGroup;
  local_email:string=localStorage.getItem('token');
  id:string;
  result:any=[];
  name: string;
  email: string;
  phone: any=[];
  password: any=[];

  constructor(private activeRoute:ActivatedRoute, private dataService: ApiService,private router:Router,private alertService: AlertService) { 
    $(document).ready(function(){
      $("#edit-click").click(function(){
      $('#edit-one').hide();
      $('#edit-two').show();
      });
    });

    
  }

  ngOnInit(): void {

    this.pflForm = new FormGroup({

      // email: new FormControl('', [Validators.required, Validators.minLength(1), Validators.email]),
      user_name: new FormControl('', Validators.required),
      profile_pic: new FormControl('',Validators.required),
      });

    $(".upload-button").on('click', function() {
      $(".file-upload").click();
    });


    this.dataService.profileData(this.local_email).subscribe((res) => {
      if(res.data){
        this.result=res.data;
        this.name=res.data.name;
        this.email=res.data.email;
        this.phone=res.data.phone;
        this.password=res.data.password;

      }
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


  get user_name() { return this.pflForm.get('user_name') }
  get profile_pic() { return this.pflForm.get('profile_pic') }



  pfldata(pflForm) {
    // console.log(this.profile_pic.value);
    // console.log(this.selectedFile);

    // if (this.profile_pic.status == 'INVALID') {
    //   alert('Please upload profile picture');
    //   $('#profile_pic').focus();
    // }
    // else if (this.user_name.status == 'INVALID') {
    //   alert('Name field is required');
    //   $('#user_name').focus();
    // }
    // else{

      this.dataService.updatePflForm(pflForm.user_name,this.selectedFile).subscribe((res) => {
        if (res.status){
          this.alertService.success(res.msg);
          setTimeout(() => {
            this.router.navigate(['/profile']);
          }, 2000);
        }
        else {
          this.alertService.danger(res.msg);
        }
      });
    // }

  }


}

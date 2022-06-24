import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

import { AlertService } from 'ngx-alerts';
import * as $ from 'jquery';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  env = environment;

  imagePath:File;
  message:string;
  url:any='assets/images/defaul-profile-image.png';
  imgFile:File;

  pflForm: FormGroup;
  phnChangeForm: FormGroup;
  local_email:string=localStorage.getItem('token');
  id:string;
  result:any=[];
  name: string;
  email: string;
  phone: any=[];
  password: any=[];

  profile_img : string;
  profile_pic_base : string = this.env.appUrl+'profile_pic/';
  profile_pic_url : string;

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
        profile_pic: new FormControl(''),
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
        
        this.profile_img = res.data.profile_pic;
        this.profile_pic_url = this.profile_pic_base+res.data.profile_pic;
        /*if(this.profile_img){
          this.url = this.profile_pic_url;
        }
        else{
          this.url = 'assets/images/defaul-profile-image.png';
        }*/
      }
     });

    this.phnChangeForm = new FormGroup({
      // new_phone : new FormControl('',(Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"))),
      new_phone : new FormControl('',(Validators.required, Validators.pattern("^([1-9][0-9]*|0)$"))),      
      otp : new FormControl('', Validators.required),
  
    })
  }
  

  pfldata(pflForm) {
      console.log(pflForm.user_name);
      this.dataService.updatePflForm(pflForm.user_name).subscribe((res) => {
        if(res.status){
          this.alertService.success(res.msg);
          setTimeout(() => {
            this.router.navigate(['/profile']);
          }, 2000);
        }
        else{
          this.alertService.danger(res.msg);
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

    this.imgFile=<File>event.target.files[0];
    console.log(this.imgFile);

  }

  showphn() {     
    this.dataService.otpGenerate(this.local_email).subscribe((res)=>{
      if (res.status){
        this.alertService.success(res.msg);
        setTimeout(() => {
          this.router.navigate(['/edit_phone']);
        }, 2000);
      }
       else {
        this.alertService.danger("Try again");
      }
    });
       
   } 

  phoneUpdate(phnChangeForm) {
    if (this.new_phone.status == 'INVALID') {
      this.alertService.warning('Please Enter Valid Phone');
      $('#new_phone').focus();
    }
    else if (this.otp.status == 'INVALID') {
      this.alertService.warning('Please Enter OTP');
      $('#otp').focus();
    }
    else{
      this.dataService.chngphnForm(this.local_email,phnChangeForm.new_phone,phnChangeForm.otp).subscribe((res)=>{
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
    }
  }


  
  get user_name() { return this.pflForm.get('user_name') }
  get profile_pic() { return this.pflForm.get('profile_pic') }
  get new_phone() { return this.phnChangeForm.get('new_phone')}
  get otp(){ return this.phnChangeForm.get('otp')}

}

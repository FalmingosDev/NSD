import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

import { AlertService } from 'ngx-alerts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  env = environment;

  local_email:string | null=localStorage.getItem('token');
  id:string | undefined;
  result:any=[];
  name: string | undefined;
  email: string | undefined;
  phone: any=[];
  password: any=[];
  total_point: any=[];
  referrer_point: any=[];
  active_date: any=[];
  reward_point: any=[];
  profile_pic : string;
  profile_pic_base : string = this.env.appUrl+'profile_pic/';
  profile_pic_url : string;



  pwChangeForm: FormGroup | undefined;
  phnChangeForm: FormGroup | undefined;
  // show:boolean=true;
  walletData: any;

  transform_date: any;
  // old_password: any;
  // new_password: any;
  
  constructor(private activeRoute:ActivatedRoute, private dataService: ApiService,private route:Router,private alertService: AlertService,private datePipe: DatePipe) {}
  
  ngOnInit(): void {
    
    this.checkProfile()
    this.dataService.profileData(this.local_email).subscribe((res) => {
      if(res.data){
        this.result=res.data;
        this.name=res.data.name;
        this.email=res.data.email;
        this.phone=res.data.phone;
        this.password=res.data.password;
        this.total_point=res.data.total_point;
        this.referrer_point=res.data.referrer_point;
        this.reward_point=res.data.reward_point;
        this.active_date=res.data.active_date;

        this.transform_date =this.datePipe.transform(this.active_date,'dd.MM.yyyy');
        this.profile_pic = res.data.profile_pic;
        this.profile_pic_url = this.profile_pic_base+res.data.profile_pic;
      }
     });


     this.pwChangeForm = new FormGroup({
      old_password : new FormControl('', Validators.required),
      new_password : new FormControl('', Validators.required),
  
    })

    this.phnChangeForm = new FormGroup({
      new_phone : new FormControl('',(Validators.required, Validators.pattern("^([1-9][0-9]*|0)$"))),      
      otp : new FormControl('', Validators.required),
  
    })
  }

  get old_password() { return this.pwChangeForm.get('old_password') as FormControl; }
  get new_password() { return this.pwChangeForm.get('new_password') as FormControl; }
  get new_phone() { return this.phnChangeForm.get('new_phone') as FormControl;}
  get otp(){ return this.phnChangeForm.get('otp') as FormControl;}
 
  passwordUpdate(pwChangeForm) {

    if (this.old_password.status == 'INVALID') {
      this.alertService.warning('Please Enter Old Password');
      $('#old_password').focus();
    }
    else if (this.new_password.status == 'INVALID') {
      this.alertService.warning('Please Enter New Password');
      $('#new_password').focus();
    }
    else{
      this.dataService.chngpwdForm(this.local_email,pwChangeForm.old_password,pwChangeForm.new_password).subscribe((res: { status: any; msg: string | { html: string; }; })=>{
        if (res.status){
          this.alertService.success(res.msg);
        }
        else {
          this.alertService.danger(res.msg);
        }
      });
    }
    
  }

  // phoneUpdate(phnChangeForm: { new_phone: any; otp: any; }) {
  //   if (this.new_phone.status == 'INVALID') {
  //     this.alertService.warning('Please Enter Valid Phone');
  //     $('#new_phone').focus();
  //   }
  //   else if (this.otp.status == 'INVALID') {
  //     this.alertService.warning('Please Enter OTP');
  //     $('#otp').focus();
  //   }
  //   else{
  //     this.dataService.chngphnForm(this.local_email,phnChangeForm.new_phone,phnChangeForm.otp).subscribe((res: { status: any; msg: string | { html: string; }; })=>{
  //       if (res.status){
  //         this.alertService.success(res.msg);
  //       }
  //       else {
  //         this.alertService.danger(res.msg);
  //       }
  //     });
  //   }
  // }

  // showphn() { 
  //   this.pwChangeForm.value.old_password='';
  //   this.pwChangeForm.value.new_password='';
  //   (<HTMLFormElement>document.getElementById('old_password'))['value'] = '';
  //   (<HTMLFormElement>document.getElementById('new_password'))['value'] = '';
    
  //   this.dataService.otpGenerate(this.local_email).subscribe((res: { status: any; msg: string | { html: string; }; })=>{
  //     if (res.status){
  //       this.alertService.success(res.msg);
  //     }
  //     //  else {
  //     //   alert(res.msg);
  //     // }
  //   });

  //   document.getElementById("id1").style.display="block";
  //   document.getElementById("id2").style.display="none";

    
  //  } 
   
  //  showpwd_v1() {
  //   this.phnChangeForm.value.new_phone='';
  //   this.phnChangeForm.value.otp='';
  //   (<HTMLFormElement>document.getElementById('new_phone'))['value'] = '';
  //   (<HTMLFormElement>document.getElementById('otp'))['value'] = '';

  //   document.getElementById("id1").style.display="none";
  //   document.getElementById("id2").style.display="block";
  //  } 
   
   showpwd() {
    this.phnChangeForm.value.new_phone='';
    this.phnChangeForm.value.otp='';
    (<HTMLFormElement>document.getElementById('new_phone')).value = '';
    (<HTMLFormElement>document.getElementById('otp')).value = '';

    document.getElementById("id1").style.display="none";
    document.getElementById("id2").style.display="block";
   }  


  logout() {
    this.dataService.deleteToken();
    window.location.href = '';
  }

  checkProfile(){
    if(localStorage.getItem('token')){
      this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
            this.route.navigate(['/profile']);        
      });
    }
    else{
      this.alertService.warning('You need to Log in first!');
      this.route.navigate(['/login']);   
    }
  }



}

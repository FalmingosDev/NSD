import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

import { AlertService } from 'ngx-alerts';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editphone',
  templateUrl: './editphone.component.html',
  styleUrls: ['./editphone.component.css']
})
export class EditphoneComponent implements OnInit {
  
  phnChangeForm: FormGroup;
  env = environment;
  phone:string;
  local_email:string=localStorage.getItem('token');

  constructor(private activeRoute:ActivatedRoute, private dataService: ApiService,private router:Router,private alertService: AlertService) { }


  ngOnInit(): void {
    this.phone= this.activeRoute.snapshot.params['phone']; 
    this.dataService.otpGenerate(this.local_email).subscribe((res)=>{
      if (res.status){
        this.alertService.success(res.msg);
      }
       else {
        this.alertService.danger("Try again");
      }
    });

    this.phnChangeForm = new FormGroup({
      // new_phone : new FormControl('',(Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"))),
      new_phone : new FormControl('',(Validators.required, Validators.pattern("^([1-9][0-9]*|0)$"))),      
      otp : new FormControl('', Validators.required),
  
    })
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

  get new_phone() { return this.phnChangeForm.get('new_phone')}
  get otp(){ return this.phnChangeForm.get('otp')}
}

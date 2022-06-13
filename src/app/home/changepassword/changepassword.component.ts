import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  pwChangeForm: FormGroup | undefined;
  local_email:string=localStorage.getItem('token');

  constructor(private activeRoute:ActivatedRoute, private dataService: ApiService,private route:Router,private alertService: AlertService) { }

  ngOnInit(): void {
    this.pwChangeForm = new FormGroup({

      old_password : new FormControl('', Validators.required),
      new_password : new FormControl('', Validators.required),
      cnf_password : new FormControl('', Validators.required),
  
    })
  }

  get old_password() { return this.pwChangeForm.get('old_password') as FormControl; }
  get new_password() { return this.pwChangeForm.get('new_password') as FormControl; }
  get cnf_password() { return this.pwChangeForm.get('cnf_password') as FormControl; }


  passwordUpdate(pwChangeForm: { old_password: any; new_password: any; }) {

    if (this.old_password.status == 'INVALID') {
      this.alertService.warning('Please Enter Old Password');
      $('#old_password').focus();
    }
    else if (this.new_password.status == 'INVALID') {
      this.alertService.warning('Please Enter New Password');
      $('#new_password').focus();
    }
    // else if (this.cnf_password.status == 'INVALID') {
    //   this.alertService.warning('Please Enter Confirm Password');
    //   $('#cnf_password').focus();
    // }
    else if (this.cnf_password !== this.new_password) {
      this.alertService.warning('New Password and Confirm Password must be same');
      $('#cnf_password').focus();
      // $('#new_password').focus();
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
}

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

  constructor(private activeRoute:ActivatedRoute, private dataService: ApiService,private router:Router,private alertService: AlertService) { }

  ngOnInit(): void {
    this.pwChangeForm = new FormGroup({

      old_password : new FormControl('', Validators.required),
      new_password : new FormControl('', Validators.required),
      cnf_password : new FormControl('', Validators.required),

      // old_password : new FormControl('',(Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))),
      // new_password : new FormControl('',(Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))),
      // cnf_password : new FormControl('',(Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))),
  
    })
  }

  get old_password() { return this.pwChangeForm.get('old_password')}
  get new_password() { return this.pwChangeForm.get('new_password')}
  get cnf_password() { return this.pwChangeForm.get('cnf_password')}


  passwordUpdate(pwChangeForm) {

    if (this.old_password.status == 'INVALID') {
      this.alertService.warning('Please Enter Old Password');
      $('#old_password').focus();
    }
    else if (this.new_password.status == 'INVALID') {
      this.alertService.warning('Please Enter New Password');
      $('#new_password').focus();
    }
    else if (this.cnf_password.status == 'INVALID') {
      this.alertService.warning('Please Enter Confirm Password');
      $('#cnf_password').focus();
    }
    else if (this.old_password.value == this.new_password.value) {
      this.alertService.warning('Old Password and New Password cannot be same');
      $('#new_password').focus();
    }
    else if (this.new_password.value != this.cnf_password.value) {
      this.alertService.warning('New Password and Confirm Password must be same');
      $('#cnf_password').focus();
    }
    else{
      this.dataService.chngpwdForm(this.local_email,pwChangeForm.old_password,pwChangeForm.new_password).subscribe((res: { status: any; msg: string | { html: string; }; })=>{
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
}

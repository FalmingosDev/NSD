import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  angForm: FormGroup;
  countryValues: string[] = [];
  region: any[] = [];
  


  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router, private alertService: AlertService) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      countryList: ['', Validators.required],
      // ISD_code: ['', Validators.required],
      phone : ['',[Validators.required, Validators.pattern("^([1-9][0-9]*|0)$")]],
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCountryList();
  }

  onCountryChange(e){
    // this.countryValues.push(e.target.value);
    // console.log(this.countryValues); 

    // console.log(this.country); 
    // var action_type = 'ISD_code';
    // this.dataService.getISD(action_type).subscribe((result) => {
    // this.ISD_code = result.data;
    // // console.log(this.ISD_code);
    // });
    // return this.ISD_code;
  }

  getCountryList() { 
    var action_type = 'countryList';
    this.dataService.getCountryList(action_type).subscribe((result) => {
    this.region = result.data;
    console.log(this.region);
    });
    return this.region;
  }

  postdata(angForm1) 
  {
    var action_type = 'signup';
    // console.log(action_type);
    if (this.name.status == 'INVALID') {
      this.alertService.warning('Please Enter Your Name');
      $('#name').focus();
    }
    else if (this.country.status == 'INVALID') {
      this.alertService.warning('Please Select Your Region');
      $('#countryList').focus();
    }
    else if (this.phone.status == 'INVALID') { 
      this.alertService.warning('Please Enter Valid Phone Number');
      $('#phone').focus();
    }
   else if (this.email.status == 'INVALID') {
    this.alertService.warning('Please Enter Your Email Address');
      $('#email').focus();
    }
    else if (this.password.status == 'INVALID') {
      this.alertService.warning('Please Enter Your Password');
      $('#password').focus();
    }
    else{
      this.dataService.userregistration(action_type,angForm1.value.name,angForm1.value.countryList,angForm1.value.phone,angForm1.value.email,angForm1.value.password)
      .pipe(first())
      .subscribe(
      data => {`--`
        console.log(data);
        if (data.status == 'success'){
          this.alertService.success(data.msg);
          this.router.navigate(['/login']);
        } else {
          this.alertService.danger(data.msg);
        }
        // this.router.navigate(['/login']); 
      },
  
      error => {
      });
    }
    
  }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
  get phone() { return this.angForm.get('phone'); }
  get country() { return this.angForm.get('countryList');}
  // get ISD() { return this.angForm.get('ISD_code');}


}


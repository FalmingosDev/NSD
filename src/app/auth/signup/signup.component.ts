import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  angForm: FormGroup;
  countryValues: string[] = [];
  region: string[] = [];


  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      countryList: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCountryList();
  }

  onCountryChange(e){
  //   this.countryValues.push(e.target.value);
  //  console.log(this.countryValues); 
  }

  getCountryList() { 
    var action_type = 'countryList';
    this.dataService.getCountryList(action_type).subscribe((result) => {
    this.region = result.data;
    // console.log(this.region);
    });
    return this.region;
  }

  postdata(angForm1) 
  {
    // console.warn(angForm1.value);
    var action_type = 'signup';
    // console.log(action_type);
    if (this.name.status == 'INVALID') {
      alert('Please Enter Your Name');
      $('#name').focus();
    }
    else if (this.phone.status == 'INVALID') { 
      alert('Please Enter Your Phone Number');
      $('#phone').focus();
    }
   else if (this.email.status == 'INVALID') {
      alert('Please Enter Your Email Address');
      $('#email').focus();
    }
    else if (this.country.status == 'INVALID') {
      alert('Please Select Your Region');
      $('#countryList').focus();
    }
    else if (this.password.status == 'INVALID') {
      alert('Please Enter Your Password');
      $('#password').focus();
    }
    else{
      this.dataService.userregistration(action_type,angForm1.value.name,angForm1.value.phone,angForm1.value.email,angForm1.value.countryList,angForm1.value.password)
      .pipe(first())
      .subscribe(
      data => {
        console.log(data);
        if (data.status == 'success'){
          alert(data.msg);
          this.router.navigate(['/login']);
        } else {
          alert(data.msg);
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

}


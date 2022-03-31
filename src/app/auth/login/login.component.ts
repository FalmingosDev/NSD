import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;

  public lat;
  public lng;
  ipAddress: any;
  http: any;

  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router, private alertService: AlertService) {
      this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCurrentLocation();  
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      
    });
    }
    else {
      this.alertService.warning("Geolocation is not supported by this browser.");
    }
  }

  postdata(angForm1) { //alert(angForm1.value.mobile); //deb
    
    if (this.email.status == 'INVALID') {
      this.alertService.warning('Please Enter Your Email Address');
      $('#email').focus();
    }
    else if (this.password.status == 'INVALID') {
      this.alertService.warning('Please Enter Your Password');
      $('#password').focus();
    }
    else {
      localStorage.setItem('lat', this.lat);
      localStorage.setItem('lng', this.lng);
      this.dataService.userlogin(angForm1.value.email, angForm1.value.password,this.lat,this.lng)
        .pipe(first())
        .subscribe(
          data => {
            //alert(JSON.stringify(data));
            //alert(data[0].name);
            /* if(data[0].newo_user_id > 0){
               const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/'; 
               this.router.navigate([redirect]);
             }
             else{
               const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/pricing'; 
               this.router.navigate([redirect]);
             }*/
            //---
            // if(data===null){
            //   alert("User name or password is incorrect");
            //   return;
            // }
            // if(data.newo_user_id >0){
            //   this.router.navigate(['/']);
            // }else if(data.newo_user_id == 0){
            //   this.router.navigate(['/pricing']);
            // }else{
            //   alert("User name or password is incorrect");
            // }
            if (data.status) {
              if (data.result) {
                
                localStorage.setItem('token', data.result.email);
                localStorage.setItem('country_code', data.result.country);
                localStorage.setItem('subscription_end_date', data.result.subscription);
                localStorage.removeItem('lat');
                localStorage.removeItem('lng');

                // if(data.result.newo_user_id>0){
                //   this.router.navigate(['/']);
                // }
                // else{
                //   this.router.navigate(['/newoclan']);
                // }
                this.router.navigate(['/']);

              }else {
                this.alertService.danger("User name or password is incorrect");
              }
            } else {
              this.alertService.danger("Please Try again later");
            }
          },
          // error => {
          //   alert("User name or password is incorrect")
          // }
        );
    }
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }


}

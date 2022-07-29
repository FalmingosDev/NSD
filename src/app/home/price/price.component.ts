import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  angForm: FormGroup;
  code: any;
  id: any;
  referrerid: any;
  countryCode:string;

  constructor(private fb: FormBuilder,private dataService: ApiService,private route:Router,private alertService: AlertService) {
    this.angForm = this.fb.group({
      code: ['']
    });
   }

  ngOnInit(): void {
    this.countryCode = localStorage.getItem('country_code');
  }

  codeverification()
  {
    this.code=(<HTMLInputElement>document.getElementById("code")).value;
    
      if(this.code){
        // (<HTMLFormElement>document.getElementById('active_btn')).disabled  = true;
        this.dataService.verifycoupon(this.code).subscribe((result)=>{
          if(result.status){
            (<HTMLFormElement>document.getElementById('active_btn')).disabled  = true;
            this.alertService.success("Coupon Code applied");
            this.dataService.couponsubscription().subscribe((result)=>{
              if(result.status){
                setTimeout(() => {
                  this.route.navigate(['/payment_success']);
              }, 2000);
              }
              else{
                this.alertService.danger("Subscription Failed! Try Again");
              }
            });
            }
            else{
              this.dataService.verifycode(this.code).subscribe((res)=>{
              if(res.success){
                  this.id=res.id;
                  this.alertService.success("Referral Code applied");
                  setTimeout(() => {
                    if(localStorage.getItem('country_code') != 'IN'){
                      this.route.navigate(['/payment/3/4999/INR/'+this.id+'']);
                    }
                    else{
                      this.route.navigate(['/payment/3/1999/INR/'+this.id+'']);
                    }
                }, 2000);
                }
                else{
                  this.alertService.danger("Invalid Coupon or Referral");
                  setTimeout(() => {
                    this.code = (<HTMLInputElement>document.getElementById("code")).value="";
                  }, 800);                  
                }
              });              
            }
          });       
      }
    else{
      if(localStorage.getItem('country_code') != 'IN'){
        this.route.navigate(['/payment/3/4999/INR/0']);
      }
      else{
        this.route.navigate(['/payment/3/1999/INR/0']);
      }
    }
  }

  

}

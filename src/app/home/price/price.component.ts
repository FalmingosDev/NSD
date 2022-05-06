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

  constructor(private fb: FormBuilder,private dataService: ApiService,private route:Router,private alertService: AlertService) {
    this.angForm = this.fb.group({
      code: ['']
    });
   }

  ngOnInit(): void {

  }

  codeverification()
  {
    this.code=(<HTMLInputElement>document.getElementById("code")).value;
      if(this.code){
        this.dataService.verifycoupon(this.code).subscribe((result)=>{
          if(result.status){
            this.alertService.success("Coupon Code applied"); 
            }
            else{
              this.dataService.verifycode(this.code).subscribe((res)=>{
              if(res.success){
                  this.id=res.id;
                  this.alertService.success("Referral Code applied");
                  setTimeout(() => {
                    this.route.navigate(['/payment/3/1999/INR/'+this.id+'']);
                }, 800);
      
                }
                else{
                  this.alertService.danger("Invalid Coupon");
                  setTimeout(() => {
                    this.code = (<HTMLInputElement>document.getElementById("code")).value="";
                  }, 800);                  
                }
              });              
            }
          });       
      }
    else{
      this.route.navigate(['/payment/3/1999/INR/0']);
    }
  }

  // codeverification()
  // {
  //   this.code=(<HTMLInputElement>document.getElementById("code")).value;
  //   if(this.code){
  //     this.dataService.verifycode(this.code).subscribe((res)=>{
  //       if(res.success){
  //           this.id=res.id;
  //           this.alertService.success("Referral Code applied");
  //           setTimeout(() => {
  //             this.route.navigate(['/payment/3/1999/INR/'+this.id+'']);
  //           }, 2000);
  //         }
  //         else{
  //           this.alertService.danger("Invalid Coupon");
  //           setTimeout(() => {
  //             this.code = (<HTMLInputElement>document.getElementById("code")).value="";
  //           }, 800);               
  //         }
  //     });
  //   } 
  //   else{
  //     this.route.navigate(['/payment/3/1999/INR/0']);
  //   }

  // }

  

}

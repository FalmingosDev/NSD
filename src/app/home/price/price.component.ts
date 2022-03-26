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

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router,private alertService: AlertService) {
    this.angForm = this.fb.group({
      // email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      // mobile: ['', Validators.required],
      // password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  postdata(angform1)
  {
    this.dataService.payment_ott(angform1).subscribe((result)=>{
	  //alert(JSON.stringify(result));
      if(result.id==1){
        this.dataService.ott_sso_register(result.username).subscribe((result)=>{
          this.alertService.success('Your Subscription Successfully Completed!');
        });
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/';
        this.router.navigate([redirect]);
      }
      else if(result.id==2 || result.id==3){
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/subcription/'+result.username;
        this.router.navigate([redirect]);
      } 
      else{
        this.alertService.danger('Sorry! Your Subscription Failed!');
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/';
        this.router.navigate([redirect]);
      }
    })
  }

}

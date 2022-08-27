import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.css']
})
export class RedeemComponent implements OnInit {
  redeemForm: FormGroup;

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router, private alertService: AlertService) { }

  ngOnInit(): void {
    this.redeemForm = new FormGroup({
      wallet : new FormControl('', Validators.required),
      metamask : new FormControl('', Validators.required),
      trust_wallet : new FormControl('', Validators.required),
    })
  }


  redeem(redeemForm) {    
    console.log(redeemForm.wallet);
    console.log(redeemForm.metamask);
    console.log(redeemForm.trust_wallet);

    this.dataService.redeemCoin(redeemForm.wallet,redeemForm.metamask,redeemForm.trust_wallet).subscribe((res) => {
      if(res.status){
        this.alertService.success(res.msg);
        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 2000);
      }
      else{
        this.alertService.danger(res.msg);
      }
    });   
    
  }

  get wallet() { return this.redeemForm.get('wallet'); }
  get metamask() { return this.redeemForm.get('metamask'); }
  get trust_wallet() { return this.redeemForm.get('trust_wallet'); }

}

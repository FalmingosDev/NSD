import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-rechargepayment',
  templateUrl: './rechargepayment.component.html',
  styleUrls: ['./rechargepayment.component.css']
})
export class RechargepaymentComponent implements OnInit {

  cc_url:any;
  sanitizer:any;

  constructor(private route:ActivatedRoute,private dataService: ApiService,sanitizer: DomSanitizer) {
    this.sanitizer=sanitizer;
   }

  ngOnInit(): void {
    const recharge_id=this.route.snapshot.params['recharge_id'];
    const amount=this.route.snapshot.params['recharge_price'];
    const currency=this.route.snapshot.params['curr'];
    const recharge_coins=this.route.snapshot.params['recharge_coins'];
    const email=localStorage.getItem("token");

    const objUserData = {recharge_id,amount,currency,recharge_coins,email}
    this.dataService.handelRechargeCreateEncryption(objUserData).subscribe((res)=>{
      this.cc_url=this.getSafeUrl(res.url);
    });
  }
  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}

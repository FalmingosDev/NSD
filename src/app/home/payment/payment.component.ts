import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  pay_url:any;

  sanitizer:any;
  // cc_frame:boolean=false;
  constructor(private route:ActivatedRoute,private dataService: ApiService,sanitizer: DomSanitizer,) { 
    this.sanitizer=sanitizer;
  }
 
  ngOnInit(): void {
    // this.createEncryption();
    const section=this.route.snapshot.params['sec'];
    const amount=this.route.snapshot.params['amt'];
    const currency=this.route.snapshot.params['curr'];
    const referrer=this.route.snapshot.params['referrer'];
    const email=localStorage.getItem("token");
    // console.log(section);
    // console.log(amount);
    // console.log(currency);
    // console.log(email);
    
  
    
    const objUserData = {section,amount,currency,referrer,email}

    //id,name,email,mobile

    if(localStorage.getItem('country_code') == 'IN'){
      this.dataService.BDSubscription(objUserData).subscribe((res)=>{
        this.pay_url=this.getSafeUrl(res.payurl);
        console.log(this.pay_url);
        console.log(res.payurl);
      });
    }
    else{
      this.dataService.handelCreateEncryption(objUserData).subscribe((res)=>{
        this.pay_url=this.getSafeUrl(res.url);
        // console.log(res.url);
        // console.log(this.cc_url);
      });
    }
  }
   createEncryption(){
    // const section=this.route.snapshot.params['sec'];
    // const amount=this.route.snapshot.params['amt'];
    // const currency=this.route.snapshot.params['curr'];
    // const email=localStorage.getItem("token");
  
    
    // const objUserData = {section,amount,currency,email}
    // //id,name,email,mobile
    // this.dataService.handelCreateEncryption(objUserData).subscribe((res)=>{
    //   console.log(res.url);
    //   this.cc_url=this.getSafeUrl(res.url);
    // });
  }
  //sanitize url--------
    getSafeUrl(url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }
  //end sanitize url--------

}

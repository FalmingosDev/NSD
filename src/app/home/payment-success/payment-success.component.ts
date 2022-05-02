import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute,Router } from '@angular/router';

import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  local_email:string=localStorage.getItem('token');


  constructor(private dataService: ApiService,private route:Router,private alertService: AlertService) { }

  ngOnInit(): void {

    this.dataService.referralGenerate(this.local_email).subscribe((res)=>{
    //   if (res.status){
    //     this.alertService.success(res.msg);
    //   }
    //   //  else {
    //   //   alert(res.msg);
    //   // }
    });
    console.log("...........")
    this.dataService.paymentResponse().subscribe(data=> {
      console.log(data.encResp)
  });
  }

}

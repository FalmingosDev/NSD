import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-multiplexcheckout',
  templateUrl: './multiplexcheckout.component.html',
  styleUrls: ['./multiplexcheckout.component.css']
})
export class MultiplexcheckoutComponent implements OnInit {
env=environment;

  constructor( private route:ActivatedRoute, private router:Router  ,private api:ApiService, private alertService: AlertService) { }
  collection:any=[];
   coin: any;
  ngOnInit(): void {
   var d= this.route.snapshot.params['multiplex_id']
    this.api.multiplexCheckout(d).subscribe((result)=>
    {
      this.collection=result.multiplex_details;
      // console.log(result);
      this.coin=result.users_walet_coin
      console.log("coin is ",this.coin)
    })

  }

  multiplexCheckout(multiplex_id,price,coin){
    this.router.navigate(['/multiplex_payment/'+multiplex_id+'/'+price+'/INR/'+coin+'']);
    /*this.api.verifycode().subscribe((res)=>{
      if(res.success){
          this.alertService.success("Referral Code applied");
        }
        else{
          this.alertService.danger("Invalid Coupon or Referral");
        }
      }); */
  }


  

}







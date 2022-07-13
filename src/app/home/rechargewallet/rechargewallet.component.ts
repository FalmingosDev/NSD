import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-rechargewallet',
  templateUrl: './rechargewallet.component.html',
  styleUrls: ['./rechargewallet.component.css']
})
export class RechargewalletComponent implements OnInit {

  env=environment;
  rechargelist:any=[]

  constructor(private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.rechglt();
  }
  rechglt(){   
    this.dataService.rechagewallet().subscribe((result) => {
      this.rechargelist = result.recharge_wallet_list;
    });
  }

  rechargePayment(recharge_id,recharge_coins,recharge_price){
    this.route.navigate(['/rechargepayment/'+recharge_id+'/'+recharge_price+'/INR/'+recharge_coins+'']);
  }

}

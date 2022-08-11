import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.css']
})
export class SpinWheelComponent implements OnInit {

  sanitizer:any;
  env=environment;
  // primaryUrl:string="https://newoapp.app/SPIN/?prize=";
  // primaryUrl:string="https://newoapp.app/SPIN/?";
  primaryUrl:string=this.env.spinUrl;


  // OOPS! MAY BE NEXT TIME
  // primaryUrl_1:string="https://newoapp.app/SPIN/?prize=b29wczE";
  // // MOTOR CYCLE
  // primaryUrl_2:string="https://newoapp.app/SPIN/?prize=bW90b3JjeWNsZQ";
  // // 10K NEWOCOIN
  // primaryUrl_3:string="https://newoapp.app/SPIN/?prize=bmV3b2NvaW4";
  // // 10 THOUSANDS
  // primaryUrl_4:string="https://newoapp.app/SPIN/?prize=dGhvdXNhbmRz";
  //  // MOBILE
  //  primaryUrl_5:string="https://newoapp.app/SPIN/?prize=bW9iaWxl";
  //  // OOPS! MAY BE NEXT TIME
  //  primaryUrl_6:string="https://newoapp.app/SPIN/?prize=b29wczI";
  //  // CAR
  //  primaryUrl_7:string="https://newoapp.app/SPIN/?prize=Y2Fy";
  //  // BANGKOK 3N-4D
  //  primaryUrl_8:string="https://newoapp.app/SPIN/?prize=YmFuZ2tvaw";
  // // ONE LAKH
  // primaryUrl_9:string="https://newoapp.app/SPIN/?prize=bGFraA";

  baseGameUrl:string;
  prize:any;
  transaction:any;
  final_url:string;
  user_email: any;
  constructor(sanitizer: DomSanitizer,private activatedRoute:ActivatedRoute,private dataService: ApiService,private router:Router) { 
    this.sanitizer=sanitizer;
  }

  ngOnInit(): void {

    this.prize=this.activatedRoute.snapshot.params['prize'];
    this.transaction=this.activatedRoute.snapshot.params['transaction_id'];
    this.user_email=localStorage.getItem('token');
    // this.final_url=this.getSafeUrl(this.primaryUrl+this.prize);
    this.final_url=this.getSafeUrl(this.primaryUrl+'user_email='+this.user_email+'&transaction_id='+this.transaction+'&prize='+this.prize);
    console.log(this.final_url);
  }
  //sanitize url--------
  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  
}

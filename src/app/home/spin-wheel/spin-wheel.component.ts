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

  primaryUrl:string="https://newoapp.app/SPIN/?prize=";

  // OOPS! MAY BE NEXT TIME
  primaryUrl_1:string="https://newoapp.app/SPIN/?prize=b29wczE";
  // MOTOR CYCLE
  primaryUrl_2:string="https://newoapp.app/SPIN/?prize=bW90b3JjeWNsZQ";
  // 10K NEWOCOIN
  primaryUrl_3:string="https://newoapp.app/SPIN/?prize=bmV3b2NvaW4";
  // 10 THOUSANDS
  primaryUrl_4:string="https://newoapp.app/SPIN/?prize=dGhvdXNhbmRz";
   // MOBILE
   primaryUrl_5:string="https://newoapp.app/SPIN/?prize=bW9iaWxl";
   // OOPS! MAY BE NEXT TIME
   primaryUrl_6:string="https://newoapp.app/SPIN/?prize=b29wczI";
   // CAR
   primaryUrl_7:string="https://newoapp.app/SPIN/?prize=Y2Fy";
   // BANGKOK 3N-4D
   primaryUrl_8:string="https://newoapp.app/SPIN/?prize=YmFuZ2tvaw";
  // ONE LAKH
  primaryUrl_9:string="https://newoapp.app/SPIN/?prize=bGFraA";

  baseGameUrl:string;
  prize:any;
  transaction:any;
  final_url:string;

  constructor(sanitizer: DomSanitizer,private activatedRoute:ActivatedRoute,private dataService: ApiService,private router:Router) { 
    this.sanitizer=sanitizer;
  }

  ngOnInit(): void {

    this.prize=this.activatedRoute.snapshot.params['prize'];
    this.transaction=this.activatedRoute.snapshot.params['transection_id'];
    this.final_url=this.getSafeUrl(this.primaryUrl+this.transaction+this.prize);
    console.log(this.final_url);
    // this.generateUrl();
    // this.final_url=this.getSafeUrl(this.primaryUrl_1);
    // this.final_url=this.getSafeUrl(this.primaryUrl_2);
    // this.final_url=this.getSafeUrl(this.primaryUrl_3);
    // this.final_url=this.getSafeUrl(this.primaryUrl_4);
    // this.final_url=this.getSafeUrl(this.primaryUrl_5);
    // this.final_url=this.getSafeUrl(this.primaryUrl_6);
    // this.final_url=this.getSafeUrl(this.primaryUrl_7);
    // this.final_url=this.getSafeUrl(this.primaryUrl_8);
    // this.final_url=this.getSafeUrl(this.primaryUrl_9);
  }
  //sanitize url--------
  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  // generateUrl(){
  //   // this.data=this.router.snapshot.params['data'];
  //   this.prize=this.activatedRoute.snapshot.params['prize'];
  //   // this.final_url=this.primaryUrl_1+this.data;
  //   // return this.baseGameUrl;
  // }
  

  // game(){
  //   this.prize=this.activatedRoute.snapshot.params['prize'];
  //   // this.game_id = localStorage.setItem('gameId', this.gameId);
  //   this.dataService.getGameUrl(this.gameId).subscribe((result) =>{
  //     this.spinUrl=this.primaryUrl_1+this.prize;
  //     // this.final_url=this.getSafeUrl(this.gameUrl);
  //     this.final_url=this.sanitizer.bypassSecurityTrustResourceUrl(this.spinUrl);
  //   });
  // }
}

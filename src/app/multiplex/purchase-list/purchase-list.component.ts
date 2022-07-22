import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';  

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription;
  curDate:any;
 dateNow = new Date();





 

 public dDay = new Date('Jul 18 2022 16:13:00');
  //alert()
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference!: number;
  public secondsToDday!: number;
  public minutesToDday!: number;
  public hoursToDday!: number;
  public daysToDday!: number;

  
  private getTimeDifference () {
    // alert(this.dDay);
    // alert(this.dateNow);
      this.timeDifference = this.dDay.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

private allocateTimeUnits (timeDifference: any) {
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}





  purchaselist: any;
  env = environment;
  recomendedWishListRemove: any;
  recomendedWishList: any;second:any;
  // subscription: any;
  constructor(private api: ApiService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

    this.subscription = interval(1000)
      .subscribe((x: any) => { this.getTimeDifference(); });
     this.curDate = new Date();

     var time = new Date();
    // alert(time);


    
    this.second=time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric',second:'numeric', hour12: false },

);  
const [hours, minutes, seconds] = this.second.split(':');
const totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
console.log("total second ",totalSeconds);
var s=totalSeconds;
//alert(s)

    //this.getTime(getTime);
    this.purchaseList();
  }
  purchaseList() {
    this.api.multiplexPurchaseList().subscribe((result) => {
      this.purchaselist = result.purchase_list;
      console.log("list is:", this.purchaselist);
      // alert(result.purchase_list);
      
     // console.log(this.curDate);
    })

  }
  removeWishList(multiplex_id) {
    this.api.removeMultiplexWishlist(multiplex_id).subscribe((result) => {
      this.recomendedWishListRemove = result;
      this.purchaseList();
    })
  }

  addWishList(multiplex_id) {

    this.api.addMultiplexWishlist(multiplex_id).subscribe((result) => {
      this.recomendedWishList = result;
      this.purchaseList();
    })

  }
  
   

}


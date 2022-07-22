import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription;

 dateNow = new Date();

 
 
  public dDay = new Date('Jul 15 2022 13:13:00');
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

  ngOnInit() {
     this.subscription = interval(1000)
         .subscribe((x: any) => { this.getTimeDifference(); });
  }

 ngOnDestroy() {
    this.subscription.unsubscribe();
 }


}

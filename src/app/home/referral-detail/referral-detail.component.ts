import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-referral-detail',
  templateUrl: './referral-detail.component.html',
  styleUrls: ['./referral-detail.component.css']
})
export class ReferralDetailComponent implements OnInit {

  collection:any=[];
  item:any;
  referralCodeId:any;
  total:number;
  itemLength:number;

  constructor(private dataService: ApiService,private route:Router,private alertService: AlertService) { }

  ngOnInit(): void {
    this.getListDetails();
  }

  getListDetails(){
    this.dataService.getReferralList().subscribe((result)=>{
      this.collection=result;
      this.item=this.collection.referralList;
      this.referralCodeId=this.collection.referralCode;

      this.itemLength = this.item.length;

      //this.referPoint=this.collection.referralList;
      //  console.warn(this.item);
      //console.log(this.referralCodeId);
      
      
       this.total= this.item.reduce(function (s, record) {    
        return s + (record.referrer_point*1);    
     }, 0);    
    //  console.log(this.total);
      
    })
  }

}



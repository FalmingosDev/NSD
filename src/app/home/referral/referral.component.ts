import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {

  collection:any=[];
  item:any;
  referralCodeId:any;
  total:number;

  constructor(private dataService: ApiService,private route:Router,private alertService: AlertService) { }

  ngOnInit(): void {

    this.checkProfile();
    this.getListDetails();
  }
  copyToClipboard(element){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert('Copied to clipboard');
    // this.alertService.success('Copied to clipboard');
  }

  getListDetails(){
    this.dataService.getReferralList().subscribe((result)=>{
      this.collection=result;
      this.item=this.collection.referralList;
      this.referralCodeId=this.collection.referralCode;
      //this.referPoint=this.collection.referralList;
      //  console.warn(this.item);
      //console.log(this.referralCodeId);
      
      
       this.total= this.item.reduce(function (s, record) {    
        return s + (record.referrer_point*1);    
     }, 0);    
    //  console.log(this.total);
      
    })
  }

  checkProfile(){
    if(localStorage.getItem('token')){
      this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
            this.route.navigate(['/referral']);  
            // console.log(localStorage.getItem('token'));      
      });
    }
    else{
      this.alertService.warning('You need to Log in first!');
      this.route.navigate(['/login']);   
    }
  }

}

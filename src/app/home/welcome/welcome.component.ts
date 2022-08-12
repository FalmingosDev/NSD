import { Component, OnInit } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import * as $ from 'jquery';
import { PlyrComponent, PlyrModule } from 'ngx-plyr';
import { environment } from '../../../environments/environment';
import { DatePipe } from '@angular/common';

import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  env=environment;
  
  latestPosterData: any=[];

  public lat: any;
  public lng: any;
  public myDate: any;
  public transform_date: any;
  modal: any;

  country:any;
  isSubscribe:boolean=false;
  isNotSubscribe:boolean=false;

  prize: any;
  transaction_id: any;
  msg: any;
  price: any;
  // isBD:boolean;
  // isNotBD:boolean;
  email: any;

  customOptionsforNew: OwlOptions  = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  customOptionsforcelibraty: OwlOptions  = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };

  customOptionsfordrmowl: OwlOptions  = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };

  customOptionsforinside: OwlOptions  = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 10,
    autoplay:true,
    navSpeed: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
        stagePadding: 50
      },
      400: {
        items: 2,
        stagePadding: 30
      },
      740: {
        items: 2,
        stagePadding: 30
      },
      940: {
        items: 2,
        stagePadding: 30 
      }
    },
    nav: false
  };
 

  constructor(private router:Router,private dataService: ApiService,private datePipe: DatePipe,private alertService: AlertService) { 
 

    if(localStorage.getItem('token')){
      this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
          if(res.cnt ==1){
            this.isSubscribe = true;
            this.isNotSubscribe = false;
          }
          else{
            this.isSubscribe = false;
            this.isNotSubscribe = true;
          }
      });
    } 
    else{
      this.isSubscribe = false;
      this.isNotSubscribe = true;
    }
      
  }
  

  ngOnInit(): void {
    
    this.myDate = new Date();
    this.transform_date =this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.email = localStorage.getItem('token');

    if(localStorage.getItem('token')){ 
    this.dataService.activeDateUpdate(this.transform_date).subscribe((result) => {});
    }
   
    this.getCurrentLocation();
    this.homePosterLatest();
    this.leadBonusModal();  
    
    this.spinPrice();
  }

  homePosterLatest(){   
    this.dataService.homeLatestPoster().subscribe((result) => {
      this.latestPosterData = result;
      // console.log(this.latestPosterData);
    });
  }


  getCurrentLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
        this.dataService.getcountry(this.lat,this.lng).subscribe((result) => {      
          this.country = result.countryCode;
          localStorage.setItem('current_country', this.country);
        });   
      });
    }
    else {
      alert("Geolocation is not supported by this browser");
    }
  }

  checkAuth(value='newoclan'){
    if(localStorage.getItem('token')){
      this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
        if(value=='newoclan'){
          if(res.cnt ==1){
            this.router.navigate(['/newoclan']);
          }
          else{
            this.router.navigate(['/about_newoclan']);
          }
        }
        else if(value=='ott'){
          if(res.cnt ==1){
            this.router.navigate(['/otthome']);
          }
          else{
            this.router.navigate(['/about_newoclan']);
          }
        }
        else if(value=='stars'){
          if(res.cnt ==1){
            this.router.navigate(['/stars']);
          }
          else{
            this.router.navigate(['/about_newoclan']);
          }
        } 
        else if(value=='hash'){
          if(res.cnt ==1){
            this.router.navigate(['/hashtag']);
          }
          else{
            this.router.navigate(['/about_newoclan']);
          }
        } 
        else if(value=='game'){
          if(res.cnt ==1){
            this.router.navigate(['/game']);
          }
          else{
            this.router.navigate(['/about_newoclan']);
          }
        }
        else if(value=='multiplex'){
          if(res.cnt ==1){
            this.router.navigate(['/multiplexhome']);
          }
          else{
            this.router.navigate(['/about_newoclan']);
          }
        } 
        else if(value=='profile'){
          this.router.navigate(['/profile']);
        }
                 
      });
    }
    else{ 
      this.router.navigate(['/about_newoclan']);         
    }
  }

  getPassedData(){
    let jonty_video=<HTMLVideoElement>document.getElementById('vid1');
    let dev_video=<HTMLVideoElement>document.getElementById('vid2');
    let sunil_video=<HTMLVideoElement>document.getElementById('vid3');
    let lara_video=<HTMLVideoElement>document.getElementById('vid4');
    jonty_video.pause();
    dev_video.pause();
    sunil_video.pause();
    lara_video.pause();
  }

  leadBonusModal(){
    if(localStorage.getItem('lead_bonus') == '0'){
       document.getElementById('btn-modal').click();
    }
  }

  leadBonusModalApply(){
    let lead_coupon = (<HTMLInputElement>document.getElementById('lead_coupon')).value;
    this.dataService.activateLeadBonus(lead_coupon).subscribe((result)=>{
      if(result.status){
        document.getElementById("lead_coupon").style.display='none'; 
        document.getElementById("leadcoupon_failed").style.display='none'; 
        document.getElementById("leadcoupon_success").style.display='block'; 
        localStorage.setItem('lead_bonus', '1');
        setTimeout(function(){$("#getLeadModal .close").click()},1000);
        this.router.navigate(['/']);
      }
      else{
        //alert(result.message);
        // document.getElementById("lead_coupon").style.display='none'; 
        (<HTMLInputElement>document.getElementById('leadcoupon_failed')).innerHTML = result.message;
        document.getElementById("leadcoupon_failed").style.display='block'; 
        //this.router.navigate(['/']);
      }
      
    })
  }

  spinPrice(){  
    $("#insuff_balance").hide();
    $("#recharge_btn").hide(); 
    $("#subscribe_btn").hide();
    $("#notSubscribed").hide(); 
    $("#notLogin").hide(); 
    $("#login_btn").hide();   
    this.dataService.priceToSpin().subscribe((result)=>{ 
      this.price=result.use_coin;
    })
  }

  payForSpin(){
    if(localStorage.getItem('token')){
      this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
        if(res.cnt ==1){
          this.dataService.spinPayment().subscribe((result)=>{ 
          (<HTMLFormElement>document.getElementById('active_btn')).disabled  = true;
            if(result.success==true){    
              this.prize=result.prize;
              this.transaction_id=result.transaction_id;
              $("#close_modal").click();
              this.router.navigate(['/spin_wheel/'+this.prize+'/'+this.transaction_id]);
            }
            else{
              this.msg=result.error;
              $("#insuff_balance").show();
              $("#recharge_btn").show(); 
              $("#balance").hide();
              $("#active_btn").hide();
            }
          })
        }
        else{
          $("#balance").hide();
          $("#active_btn").hide();
          $("#notSubscribed").show(); 
          $("#subscribe_btn").show(); 
        }
      })
    }
    else{
      $("#balance").hide();
      $("#active_btn").hide();
      $("#notSubscribed").hide(); 
      $("#subscribe_btn").hide(); 
      $("#recharge_btn").hide(); 
      $("#notLogin").show(); 
      $("#login_btn").show();
    }  
  }

  notSubscribed(){
    $("#close_modal").click();
    this.router.navigate(['/pricing']);
  }

  notLogin(){
    $("#close_modal").click();
    this.router.navigate(['/login']);
  }
  noBalance(){
    $("#close_modal").click();
    this.router.navigate(['/rechargewallet']);
  }
}

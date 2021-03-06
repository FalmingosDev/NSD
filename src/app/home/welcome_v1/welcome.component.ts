import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';
import { PlyrComponent, PlyrModule } from 'ngx-plyr';
import { AlertService } from 'ngx-alerts';
 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] 
})

export class WelcomeComponent implements OnInit {  
  bannerBaseUrl:string='/assets/images/';
  bannerArr:any=["exchange-banner.jpg","clan-banner.jpg","multiplex-banner.jpg","newsdesk-banner.jpg","newostreet-banner.jpg","nft-banner.jpg"]; 
  assetsUrl:string = '/assets';

  public lat;
  public lng;

  country:any;
  isSubscribe:boolean;
  isNotSubscribe:boolean;

  isBD:boolean;
  isNotBD:boolean;

  customOptions: OwlOptions  = {
    items: 1,
    loop: false,
    margin: 10,
    startPosition: 1,
    mouseDrag: true,
    touchDrag: true,
    autoplay:false,
    navText: ['<', '>'],
    stagePadding:600,
    responsive: {
      0: {
       items: 1,
       stagePadding:30
     },
      480: {
       items: 1,
       stagePadding:30
     },
      940: {
       items: 1,
       stagePadding:10
     }
    },
   nav: false
   
  };
  activeSlides: SlidesOutputData;
  slidesStore: any[];

  // getPassedData(data: SlidesOutputData) {
  

  
  customOptionsforNew: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: [],
    dots:false,
    navSpeed:10,
    responsive: {
      0: {
       items: 2
     },
      480: {
       items: 2
     },
      940: {
       items: 2
     }
    },
   nav: false
  };

  customOptionsforbanner: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: [],
    dots:false,
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 1
     },
      940: {
       items: 1
     }
    },
  };


  constructor(private router:Router,private dataService: ApiService,private alertService: AlertService) { 
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
    this.getCurrentLocation();
  }

  getCurrentLocation(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
        this.dataService.getcountry(this.lat,this.lng).subscribe((result) => {      
          this.country = result.countryCode;
          localStorage.setItem('current_country', this.country);
          
          //BD or not boolean Condition
          // if(result.countryCode=='BD'){
          //   this.isBD = true;
          //   this.isNotBD = false;
          // }
          // else if(result.countryCode==''){
          //   this.isBD = false;
          //   this.isNotBD = true;
          // }
          // else{
          //   this.isBD = false;
          //   this.isNotBD = true;
          // }

          //////////////////////
          // if(localStorage.getItem('current_country')){
          //   this.dataService.currentCountry(localStorage.getItem('current_country')).subscribe((res)=>{
          //       if(res==BD){
          //         this.isBD = true;
          //         this.isNotBD = false;
          //       }
          //       else{
          //         this.isBD = false;
          //         this.isNotBD = true;
          //       }
          //   });
          // } 
          // else{
          //   this.isBD = false;
          //   this.isNotBD = true;
          // }
          ///////////////////////////
        });   
      });
    }
    else {
      this.alertService.warning("Geolocation is not supported by this browser");
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
        }else if(value=='profile'){
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






}

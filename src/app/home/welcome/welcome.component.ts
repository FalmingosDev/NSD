import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';
// import  as owl-carousel from 'owl-carousel';
import { PlyrComponent, PlyrModule } from 'ngx-plyr';
 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] 
})
export class WelcomeComponent implements OnInit {  
  bannerBaseUrl:string='http://3.0.255.31/NS/assets/images/';
  bannerArr:any=["exchange-banner.jpg","clan-banner.jpg","multiplex-banner.jpg","newsdesk-banner.jpg","newostreet-banner.jpg","nft-banner.jpg"]; 
  assetsUrl:string = 'http://3.0.255.31/NS/assets';

 

 


  customOptions: OwlOptions  = {
    items: 1,
    loop: false,
    margin: 10,
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
       items: 3
     },
      480: {
       items: 3
     },
      940: {
       items: 3
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





  constructor(private router:Router,private dataService: ApiService) { }

  ngOnInit(): void {}
  checkAuth(value='newoclan'){
    if(localStorage.getItem('token')){
      this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
        if(value=='newoclan'){
          if(res.cnt ==1){
            this.router.navigate(['/newoclan']);
          }else{
            this.router.navigate(['/pricing']);
          }
        }else if(value=='profile'){
            this.router.navigate(['/profile']);
        } 
        
      });
    }
    else{
      // alert('You need to log in first!');
      this.router.navigate(['/about_newoclan']);   
    }
  }
  getPassedData(data: any) {  //in transition event
    let jonty_video=<HTMLVideoElement>document.getElementById('vid1');
    let sunil_video=<HTMLVideoElement>document.getElementById('vid2');
    let lara_video=<HTMLVideoElement>document.getElementById('vid3');
    jonty_video.pause();
    sunil_video.pause();
    lara_video.pause();
    }






}

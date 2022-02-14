import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';
// import  as owl-carousel from 'owl-carousel';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] 
})
export class WelcomeComponent implements OnInit {
  window:any
  vidArr:any=["http://3.0.255.31/NS/assets/video/johnty-rodes.mp4","http://3.0.255.31/NS/assets/video/lara-dutta.mp4","http://3.0.255.31/NS/assets/video/sunil-grover.mp4"];
  assetsUrl:string = 'http://3.0.255.31/NS/assets';
  customOptions: OwlOptions  = {
    items: 1,
    loop: false,
    margin: 10,
    autoplay:false,
    navText: ['<', '>'],
    
    // touchDrag: true,
    // responsiveClass: true,
    // navText: [],
    // dots:false,
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
   nav: false
   
  };
  customOptionsforNew: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: [],
    dots:false,
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





  constructor(private router:Router,private dataService: ApiService) { }

  ngOnInit(): void {
  }
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
      alert('You need to log in first!');
      this.router.navigate(['/login']);   
    }
  }


// playSlider(){
//   console.log("playSlider")
//     // this.window.trigger('play.owl.autoplay')
// }

// // Pause slider when video play
//  pauseSlider(){
//   console.log("pauseSlider")
  
//     // this.window.trigger('stop.owl.autoplay')
// }
pauseSlider(){
  console.log("pauseSlider")
}
playSlider(){
  console.log("playSlider")
}
   
 /*owl = $("#video-home-owl").owlCarousel({
  items: 1,
  loop: true,
  nav:true,  
  dots:false,
  margin: 10,
  //autoplayHoverPause: true, 
  lazyLoad: true,
  // dots: true,
  onTranslate: function () {
      $('.owl-item').find('video').each(function () {
          this.pause();
      });
  }
});

// Play slider when video pause
 playSlider(){
  window.owl.trigger('play.owl.autoplay')
}

// Pause slider when video play
 pauseSlider(){
  window.owl.trigger('stop.owl.autoplay')
}*/



}

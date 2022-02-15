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
  window:any
  vidArr:any=["http://3.0.255.31/NS/assets/video/johnty-rodes.mp4","http://3.0.255.31/NS/assets/video/lara-dutta.mp4","http://3.0.255.31/NS/assets/video/sunil-grover.mp4"];
  assetsUrl:string = 'http://3.0.255.31/NS/assets';
  vid: HTMLMediaElement;
 /*playerSettings:any = {
    controls: ['play-large'],
    fullscreen: { enabled: false },
    resetOnEnd: true,
    hideControls: true,
    clickToPlay: true,
    keyboard: false,
  }*/
 
// or get it from plyrInit event
  //players: PlyrModule;
  @ViewChild(PlyrComponent)
  plyr: PlyrComponent;
 
// or get it from plyrInit event
  // player: Plyr;
  // videoSources: Plyr.Source[] = [
  //   {
  //     src: 'http://3.0.255.31/NS/assets/video/johnty-rodes.mp4',
  //     provider: 'youtube',
  //   },
  //   {
  //     src: 'http://3.0.255.31/NS/assets/video/sunil-grover.mp4',
  //     provider: 'youtube',
  //   },
  //   {
  //     src: 'http://3.0.255.31/NS/assets/video/lara-dutta.mp4',
  //     provider: 'youtube',
  //   },
  // ];

  customOptions: OwlOptions  = {
    items: 1,
    loop: false,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    autoplay:false,
    navText: ['<', '>'],
    stagePadding:600,
    
    // touchDrag: true,
    // responsiveClass: true,
    // navText: [],
    // dots:false,
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

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
    console.log(this.activeSlides.slides[0].id);
    // console.log(document.getElementsByClassName('active'));
    // console.log(document.getElementsByClassName('owl-slide-1'));
    // video.pause();
    // this.vid=document.getElementsByClassName('ng-star-inserted');
     //vid.pause();
  }

  
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

  ngOnInit(): void {
   /* this.players = PlyrModule.setup('.js-player', this.playerSettings);

this.players.forEach(function (instance, index) {
  instance.on('play', function () {
      this.players.forEach(function (instance1, index1) {
          if (instance != instance1) {
              instance1.pause();
          }
      });
  });
});*/
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

//plyr----
played(event: Plyr.PlyrEvent) {
  console.log('played', event);
}
 
// play(): void {
//   this.player.play(); // or this.plyr.player.play()
// }
// //plyr----

// playedVideo(e){
//   console.log(e);
// }

printClass(e){
 console.log(e)
 const a=document.getElementsByClassName('owl-item');
 console.log(a);
}





}

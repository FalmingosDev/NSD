import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-otthome',
  templateUrl: './otthome.component.html',
  styleUrls: ['./otthome.component.css']
})
export class OtthomeComponent implements OnInit {

  env=environment;

  bannerOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    dots:true,
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

  resumeOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    dots:false,
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

  shortsOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    dots:false,
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


  bannerData:any =[];
  shortsData:any =[];
  videoId:any =[];
  musicData:any =[];


  constructor(private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.ottBanner();
    this.ottShorts();
    this.ottMusic();
  }

  ottBanner(){   
    this.dataService.ottBannerList().subscribe((result) => {
      this.bannerData = result
    });
  }

  ottShorts(){   
    this.dataService.ottShortsList().subscribe((result) => {
      this.shortsData = result
    });
  }

  ottMusic(){   
    this.dataService.ottMusicList().subscribe((result) => {
      this.musicData = result
    });
  }

  videoDetail(event,id){
    event.preventDefault();
    this.route.navigate(["/ottvideodetail/"+id]);
  }
  

}

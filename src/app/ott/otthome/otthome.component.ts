import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
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
  CNEData:any =[];
  wmdData: any=[];
  quickyData: any=[];
  latestData: any=[];
  pauseData: any=[];



  constructor(private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.ottBanner();
    this.ottLatest();
    this.ottQuicky();
    this.ottShorts();
    this.ottCNE();
    this.ottWmd();
    this.ottResume();
  }

  ottBanner(){   
    this.dataService.ottBannerList().subscribe((result) => {
      this.bannerData = result;
    });
  }

  ottLatest(){   
    this.dataService.ottLatestList().subscribe((result) => {
      this.latestData = result;
    });
  }

  ottQuicky(){   
    this.dataService.ottQuickyList().subscribe((result) => {
      this.quickyData = result;
    });
  }

  ottShorts(){   
    this.dataService.ottShortsList().subscribe((result) => {
      this.shortsData = result;
    });
  }

  ottCNE(){   
    this.dataService.ottCNEList().subscribe((result) => {
      this.CNEData = result;
    });
  }

  ottWmd(){   
    this.dataService.ottWmdList().subscribe((result) => {
      this.wmdData = result;
    });
  }

  ottResume(){   
    this.dataService.resumeList().subscribe((result) => {
      this.pauseData = result.resumeListData;
    });
  }

  videoDetail(event,id){
    event.preventDefault();
    this.route.navigate(["/ottvideodetail/"+id]);
  }

  episodeDetail(event,epId){
    event.preventDefault();
    this.route.navigate(["/ottvideotype/"+epId]);
  }
  

}

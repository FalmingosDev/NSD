import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from '../../../environments/environment';
import { AlertService } from 'ngx-alerts';




@Component({
  selector: 'app-ottvideodetail',
  templateUrl: './ottvideodetail.component.html',
  styleUrls: ['./ottvideodetail.component.css']
})
export class OttvideodetailComponent implements OnInit  {
  // private videoPlayer: ElementRef;
  isFavorite: boolean = false;
  env=environment;
  ottVideoData: any;
  id: string;
  video_link: string;
  video_name: string;
  video_starring: string;
  video_type: string;
  video_genere: string;
  final_video_url: string ;
  videoId: string ;
  videoCategory: string ;
  video_thumb: string;
  thumb: string;
  renderer: any;
  currentTime: any;
  ottVideoTimeData: any;
  video_synopsis: any;
  video_aud: any;
  

  constructor(private dataService: ApiService,private route:Router,private activatedRoute: ActivatedRoute, private alertService: AlertService) {}

  ngOnInit(): void {
    this.ottDetail();
  }

  ngOnDestroy() { 
    this.setPauseTimeBack();
  } 

  setPauseTime(data) {
    this.id= this.activatedRoute.snapshot.params['id']; 
    this.currentTime = data.target.currentTime;
    this.dataService.watchTime(this.id,this.currentTime,).subscribe((result) =>{});
  }

  setPauseTimeBack(){
    const vid = <HTMLVideoElement>(document.getElementById('vidId'));
    this.currentTime=vid.currentTime;
    this.id= this.activatedRoute.snapshot.params['id'];
    this.dataService.watchTime(this.id,this.currentTime,).subscribe((result) =>{});
  }

  ottDetail(){     
    this.id= this.activatedRoute.snapshot.params['id']; 
    this.dataService.ottVideoDetail(this.id).subscribe((result) => {
      this.ottVideoData = result.video_detail;
      this.ottVideoTimeData = result.play_time;
      this.videoId = this.id;
      this.videoCategory = this.ottVideoData[0].category;
      this.video_link = this.ottVideoData[0].media;
      this.video_name = this.ottVideoData[0].name;
      this.video_starring = this.ottVideoData[0].stars;
      this.video_type = this.ottVideoData[0].type_name;
      this.video_genere = this.ottVideoData[0].genere_name;
      this.video_synopsis = this.ottVideoData[0].synopsis;
      this.video_aud = this.ottVideoData[0].certification;
      this.video_thumb = this.ottVideoData[0].thumb;      
      this.thumb=this.env.AWS_OTT_THUMB_URL+this.video_thumb;
      this.final_video_url = this.env.AWS_OTT_VIDEO_URL+this.video_link;
      const video = <HTMLVideoElement>(document.querySelector('#vidId'));
      video.poster=this.thumb;
      video.src = this.final_video_url;
      video.currentTime = this.ottVideoTimeData;
      video.addEventListener('ended',function() {
        if(this.played.end(0) - this.played.start(0) === this.duration) {
          document.getElementById('played').click();
        }else {
          document.getElementById('skip').click();
        }
      })
    });    
  }

  PlayedAll(){
    this.addToWallet(this.videoId,this.videoCategory, 1, localStorage.getItem('token'))
  }

  addToWallet(vId,category, action, userEmail) {
    this.dataService.walletAdd(vId, category, action, userEmail).subscribe((result) => {
      if (result[0].status) {
        this.alertService.success("Congratulation! You have earned "+result[0].coin+" NEWO coin");
      }
      else{
        this.alertService.warning("Coin already added in your wallet for this video");
      }
    });
  }

  Skipped(){
    this.alertService.danger("Some parts were skipped");
  }

  fullScreen(){
    console.log('hiii');
    this.isFavorite = true;
    //this.renderer.addClass('rotate')
    // console.log(screen.orientation.type);
    // console.log(screen.orientation.angle);    
    //screen.orientation.addEventListener("click", function() {
    //document.documentElement.requestFullScreen();
    //screen.orientation.unlock();
    //screen.orientation.lock("landscape-primary");
    //});
    //console.log(screen.orientation.type);
  }

}


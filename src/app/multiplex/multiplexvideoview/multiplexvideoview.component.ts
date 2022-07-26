import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-multiplexvideoview',
  templateUrl: './multiplexvideoview.component.html',
  styleUrls: ['./multiplexvideoview.component.css']
})
export class MultiplexvideoviewComponent implements OnInit {
  videoplay: any;
  env=environment;
  sanitizer: any;
  vidUrl: any;
  vidPoster: any;
  constructor(private api:ApiService,private route:Router,private router:ActivatedRoute,sanitizer: DomSanitizer,) { 
    this.sanitizer=sanitizer;
  
  }

  ngOnInit(): void {
    this.multiplexVideoPlay()
  }

  // multiplexVideoPlay(multiplex_id)
  // {
  //   this.api.multiplexVideoPlay().subscribe((result)=>{
  //     this.videoplay=result.multiplex_details;
  //     console.log(this.videoplay);
  //   })

  multiplexVideoPlay(){
    var d= this.router.snapshot.params['multiplex_id'];
    //  alert('Ashoke');
    // alert(d);
    this.api.multiplexVideoPlay(d).subscribe((result)=>
    {
      this.vidUrl = this.env.multiplex_video_url+result.multiplex_details.media;
      // this.vidUrl = "http://d1ejsqmvjt3i0n.cloudfront.net/M1657882710.mp4";

      this.vidPoster = this.env.multiplex_poster_url+result.multiplex_details.image;
      this.videoplay=result.multiplex_details;

      const videoMultiplex = <HTMLVideoElement>(document.querySelector('#multiplexVid'));
      // videoMultiplex.poster=this.vidPoster;
      videoMultiplex.src = this.vidUrl;
      // videoMultiplex.currentTime = this.ottVideoTimeData;
      
      
    })
  }
  }



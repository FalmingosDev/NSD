import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-ottvideodetail',
  templateUrl: './ottvideodetail.component.html',
  styleUrls: ['./ottvideodetail.component.css']
})
export class OttvideodetailComponent implements OnInit {

  // public slug: string;
  // file_url: string;
  // title: string;
  // addedby: string;
  // name: string;
  // genre: string;
  // total_video: string;
  // type: string[];
  // result:any=[];
  // videoType:any="";
  // video_link:any ;

  env=environment;
  ottVideoData: any;
  id: string;
  video_link: string;
  video_name: string;
  video_type: string;
  video_genere: string;

  //final_video_url: string;
  //final_video_url: SafeUrl; 
  public final_video_url: string ;

  sanitizer:any;




  vid: any;

  constructor(domSanitizer: DomSanitizer, private dataService: ApiService,private route:Router,private activatedRoute: ActivatedRoute) {
    this.sanitizer=domSanitizer;
   }

  ngOnInit(): void {

    this.ottDetail();

    // const slug= this.activatedRoute.snapshot.params['slug'];

    // this.dataService.fetchVideoData(slug).subscribe((res)=>{
    // this.result=res.data;
    // this.video_link='<video autoplay width="100%" height="100%" controls="" id="vidId"><source src="'+res.data.video_files.file_url+'" type="video/mp4" ><source src="'+res.data.video_files.file_url+'" type="video/ogg" ></video>';
    // document.getElementById('vid_div').innerHTML=this.video_link;
    // this.slug = res.data.slug; 
    // this.file_url=res.data.video_files.file_url;
    // this.title=res.data.watch_videos.title;
    // this.name=res.data.addedby.name;
    // this.genre=res.data.genre.name;
    // this.type=res.data.vedeo_type[0].video_type;
    // this.total_video=res.data.total_video_files;
    // this.addedby=res.data.watch_videos.addedby;
    // // console.log(this.addedby);
      
    //   for(let i=0;i<res.data.vedeo_type.length;i++)
    //   {
    //     this.videoType+='<a href="#">'+res.data.vedeo_type[i].video_type+'</a> ';
    //   }
    //   document.getElementById('vid_tag').innerHTML=this.videoType;

    // })
  
  }
  
  ottDetail(){ 
    this.id= this.activatedRoute.snapshot.params['id']; 
    this.dataService.ottVideoDetail(this.id).subscribe((result) => {
      this.ottVideoData = result;

      //console.log(this.ottVideoData);

      this.video_link = this.ottVideoData[0].media;
      this.video_name = this.ottVideoData[0].name;
      this.video_type = this.ottVideoData[0].type_name;
      this.video_genere = this.ottVideoData[0].genere_name;
      //this.final_video_url = this.getSafeUrl(this.env.AWS_VIDEO_URL+this.video_link);
      this.final_video_url = this.env.AWS_VIDEO_URL+this.video_link;
      const video = <HTMLVideoElement>(document.querySelector('#vidId'));
      video.src = this.final_video_url;

      //console.log(this.final_video_url);
      //console.log(this.video_link);
    });    
  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  getVideoData(){
    //console.log(document.getElementById("vidId"));
    this.vid = document.getElementById("vidId");
    this.vid.addEventListener('ended',function(){
      alert("hii");
  });
  videoEnded(){
    alert('video ended');
  }
    
}

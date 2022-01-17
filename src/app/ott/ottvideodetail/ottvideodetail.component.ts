import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-ottvideodetail',
  templateUrl: './ottvideodetail.component.html',
  styleUrls: ['./ottvideodetail.component.css']
})
export class OttvideodetailComponent implements OnInit {

  public slug: string;
  file_url: string;
  title: string;
  addedby: string;
  name: string;
  genre: string;
  total_video: string;
  type: string[];
  result:any=[];
  videoType:any="";
  video_link:any ;


  constructor(private dataService: ApiService,private route:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const slug= this.activatedRoute.snapshot.params['slug'];

    this.dataService.fetchVideoData(slug).subscribe((res)=>{
      this.result=res.data;
      this.video_link='<video width="100%" height="100%" controls=""><source src="'+res.data.video_files.file_url+'" type="video/mp4" ><source src="'+res.data.video_files.file_url+'" type="video/ogg" ></video>';
      document.getElementById('vid_div').innerHTML=this.video_link;
      this.slug = res.data.slug; 
      this.file_url=res.data.video_files.file_url;
      this.title=res.data.watch_videos.title;
      this.name=res.data.addedby.name;
      this.genre=res.data.genre.name;
      this.type=res.data.vedeo_type[0].video_type;
      this.total_video=res.data.total_video_files;


      this.addedby=res.data.watch_videos.addedby;
      
      for(let i=0;i<res.data.vedeo_type.length;i++)
      {
        this.videoType+='<a href="#">'+res.data.vedeo_type[i].video_type+'</a> ';
      }
      document.getElementById('vid_tag').innerHTML=this.videoType;

    })
  }
}

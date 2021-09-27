import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-creatorcontentdetails',
  templateUrl: './creatorcontentdetails.component.html',
  styleUrls: ['./creatorcontentdetails.component.css']
})
export class CreatorcontentdetailsComponent implements OnInit {
  video_id:string;
  result:any;
  video_link:string;
  baseURL: string ='http://3.0.255.31/NS/video/ceator_video/';
  date: string;
  constructor(private activeRoute:ActivatedRoute, private dataService: ApiService) { }

  ngOnInit(): void {

    this.video_id=this.activeRoute.snapshot.params['video_id'];
    // console.log(this.video_id);
    this.dataService.creatorContentDetail(this.video_id).subscribe((res)=>{
      this.result=res.data;
      // console.log(this.result);
      this.video_link=this.baseURL+res.data.creator_video;
      this.date = res.data.upload_datetime;
      // console.log(this.video_link);
    });
    
  }
 

}

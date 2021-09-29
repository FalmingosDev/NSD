import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-creatorcontentdetails',
  templateUrl: './creatorcontentdetails.component.html',
  styleUrls: ['./creatorcontentdetails.component.css']
})
export class CreatorcontentdetailsComponent implements OnInit {
  id:string;
  result:any;
  video_link:string;
  baseURL: string ='http://3.0.255.31/NS/video/ceator_video/';
  date: string;
  video_desc: string;
  video_main: string;
  constructor(private activeRoute:ActivatedRoute, private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {

    this.id=this.activeRoute.snapshot.params['id'];
    // console.log(this.video_id);
    this.dataService.creatorContentDetail(this.id).subscribe((res)=>{
      this.result=res.data;
      // console.log(this.result);
      this.video_link=this.baseURL+res.data.creator_video;
      this.video_main=res.data.creator_video;
      this.date = res.data.upload_datetime;
      this.video_desc = res.data.video_desc;
      // console.log(this.video_link);
    });
    
  }
  editData(e){
    e.preventDefault();
    const id=this.activeRoute.snapshot.params['id'];
    this.route.navigate(['/creatorcontentedit/'+id]);
  }
 

}

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
  result:any=[];
  video_link:any ;
  baseURL: any ='http://3.0.255.31/NS/video/ceator_video/';
  date: string;
  video_desc: string;
  video_main: string = '';
  video_only: string;
  vid : any;

  final_url:string;
  
  constructor(private activeRoute:ActivatedRoute, private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {
    
    this.id=this.activeRoute.snapshot.params['id'];
     this.dataService.creatorContentDetail(this.id).subscribe((res)=>{
      this.result=res.data;
      //console.log(this.result);
      this.final_url = this.baseURL+res.data.creator_video
      this.video_link='<video width="100%" height="100%" controls="true" id="main_vid"><source src="'+this.final_url+'" type="video/mp4" ></video>';
      document.getElementById('vid_div').innerHTML=this.video_link;
      this.video_main=res.data.creator_video;
      this.date = res.data.upload_datetime;
      this.video_desc = res.data.video_desc; 
             
    });

  }
  
  editData(e){
    e.preventDefault();
    const id=this.activeRoute.snapshot.params['id'];
    this.route.navigate(['/creatorcontentedit/'+id]);
  }

 

}

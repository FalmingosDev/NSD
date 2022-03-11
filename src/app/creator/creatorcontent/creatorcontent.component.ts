import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-creatorcontent',
  templateUrl: './creatorcontent.component.html',
  styleUrls: ['./creatorcontent.component.css']
})
export class CreatorcontentComponent implements OnInit {

  list: string[] = [];
  // baseURL: string ='http://3.0.255.31/NS/video/ceator_video/';
  baseURL: string ='video/ceator_video/';


  constructor(private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {

    this.creatorList();
  }



  creatorList() { 
    var action_type = 'creatorList';
    return this.dataService.creatorList(action_type).subscribe((result) => {
      this.list = result.data;
      console.log(this.list);
      });
      return this.list;
    
  }

  viewMore(e,video_id){
    e.preventDefault();
    console.log("video_id "+video_id);
    this.route.navigate(["/creatorcontentdetails/"+video_id]);
  }

}

import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-neworatinglist',
  templateUrl: './neworatinglist.component.html',
  styleUrls: ['./neworatinglist.component.css']
})
export class NeworatinglistComponent implements OnInit {
  creatots_details:any[];
  base_file_url:string="http://3.0.255.31/NS/video/creator_thumb/";

  constructor(private dataService:ApiService,private route:Router) { }

  ngOnInit(): void {
    this.dataService.fetchCreatorsDetails().subscribe((res)=>{
      this.creatots_details=res.data;
    });
  }
  onWatchNow(id:any){
   const video_code=id;
   this.route.navigate(["/ratingdetail/"+video_code]);
  }

}

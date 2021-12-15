import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userpreview',
  templateUrl: './userpreview.component.html',
  styleUrls: ['./userpreview.component.css']
})

export class UserpreviewComponent implements OnInit{
  user_data:any;
  fileSrc:string="";
  user_pic:string="../assets/images/user-home-img.jpg";
  base_file_root:string="http://3.0.255.31/NS/uploads/";
  // base_file_root:string="http://newostreet.flamingostech.com/uploads/";


  commenter_type:string;
  commenter_name:string;
  commenter_react:string;
  commenter_date:string;
  commenter_star:number;
  comment:string;
  commenter_star_arr=[];
  constructor(private route:ActivatedRoute,private dataService:ApiService) { }

  ngOnInit(): void {
    // this.id=this.route.snapshot.params['id'];
    // console.log(this.id);
    

    const previewData:any=this.dataService.getValueForPreview();
    
    if(previewData['stage']=="knockout_jury"){
      console.log(previewData.data);
      let k_fileName=previewData.data.submission1_file;
      let cmt_type=previewData.data.type;
      this.commenter_type=cmt_type.charAt(0).toUpperCase() + cmt_type.slice(1);
      this.commenter_name=previewData.data.name;
      this.commenter_react=previewData.data.react;
      this.commenter_date=previewData.data.reaction_date;
      this.commenter_star=Number(previewData.data.star);
      this.comment=previewData.data.comment;
      this.fileSrc=this.base_file_root+"user_submission/submission1/"+(k_fileName);
    }
    else if(previewData['stage']=="knockout_mentor"){
      console.log(previewData.data);
      let k_fileName=previewData.data.submission1_file;
      let cmt_type=previewData.data.type;
      this.commenter_type=cmt_type.charAt(0).toUpperCase() + cmt_type.slice(1);
      this.commenter_name=previewData.data.name;
      this.commenter_react=previewData.data.react;
      this.commenter_date=previewData.data.reaction_date;
      this.commenter_star=Number(previewData.data.star);
      this.comment=previewData.data.comment;
      this.fileSrc=this.base_file_root+"user_submission/submission1/"+(k_fileName);
    }
    else if(previewData['stage']=="semifinal"){
      let s_fileName=previewData.data.submission2_file;
      let cmt_type=previewData.data.type;
      this.commenter_type=cmt_type.charAt(0).toUpperCase() + cmt_type.slice(1);
      this.commenter_name=previewData.data.name;
      this.commenter_react=previewData.data.react;
      this.commenter_date=previewData.data.reaction_date;
      this.commenter_star=Number(previewData.data.star);
      this.comment=previewData.data.comment;
      this.fileSrc=this.base_file_root+"user_submission/submission2/"+(s_fileName);
    }
    else if(previewData['stage']=="final"){
      let f_fileName=previewData.data.submission3_file;
      let cmt_type=previewData.data.type;
      this.commenter_type=cmt_type.charAt(0).toUpperCase() + cmt_type.slice(1);
      this.commenter_name=previewData.data.name;
      this.commenter_react=previewData.data.react;
      this.commenter_date=previewData.data.reaction_date;
      this.commenter_star=Number(previewData.data.star);
      this.comment=previewData.data.comment;
      this.fileSrc=this.base_file_root+"user_submission/submission3/"+(f_fileName);
    }

    
    this.user_data=this.dataService.acceptData();
    if(this.user_data.picture!=null){
    this.user_pic=this.base_file_root+"userprofile_img/"+(this.user_data.picture);
    } 

    
  }
  counterFullStar(i: number) {
    return new Array(i);
  }
  counterStar(i: number) {
    return new Array(i);
  }

}

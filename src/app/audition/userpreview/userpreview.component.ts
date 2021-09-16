import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userpreview',
  templateUrl: './userpreview.component.html',
  styleUrls: ['./userpreview.component.css']
})
export class UserpreviewComponent implements OnInit {
  user_data:any;
  fileSrc:string="";
  user_pic:string="../assets/images/user-home-img.jpg";
  constructor(private route:ActivatedRoute,private dataService:ApiService) { }

  ngOnInit(): void {
    // this.id=this.route.snapshot.params['id'];
    // console.log(this.id);

    const previewData:object=this.dataService.getValueForPreview();
    console.log(previewData);
    if(previewData['stage']=="knockout"){
      let k_fileName=previewData['file'];
      this.fileSrc="http://localhost/NSD/image/user_submission/submission1/"+(k_fileName);
      console.log(this.fileSrc);
    }
    else if(previewData['stage']=="semifinal"){
      let s_fileName=previewData['file'];
      this.fileSrc="http://localhost/NSD/image/user_submission/submission2/"+(s_fileName);
      console.log(this.fileSrc);
    }
    else if(previewData['stage']=="final"){
      let f_fileName=previewData['file'];
      this.fileSrc="http://localhost/NSD/image/user_submission/submission3/"+(f_fileName);
      console.log(this.fileSrc);

    }

    // this.fileSrc="http://localhost/NSD/image/user_submission/submission1/"+(fileName);
    this.user_data=this.dataService.acceptData();
    if(this.user_data.picture!=null){
    this.user_pic="http://localhost/NSD/image/userprofile_img/"+(this.user_data.picture);
    } 

    
  }

}

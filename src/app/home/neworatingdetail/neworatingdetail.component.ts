import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
declare var $: any;

@Component({
  selector: 'app-neworatingdetail',
  templateUrl: './neworatingdetail.component.html',
  styleUrls: ['./neworatingdetail.component.css']
})
export class NeworatingdetailComponent implements OnInit {
  video_code:any;
  video_link:string;
  // base_file_url:string="http://3.0.255.31/NS/video/ceator_video/";
  base_file_url:string="https://newostreet.flamingostech.com/video/ceator_video/";

  language:string;
  genre:string;
  year:string;
  cast:string;
  director:string;
  description:string;
  runtime:string;
  writer:string;
  camera:string;
  title:string;
  audience:string;

  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: [],
    dots:false,
    responsive: {
      0: {
       items: 3
     },
      480: {
       items: 3
     },
      940: {
       items: 3
     }
    },
   nav: false
  };

  constructor(private route:ActivatedRoute,private dataService:ApiService) { };

  ngOnInit(): void {
    this.video_code=this.route.snapshot.params['code'];
    this.dataService.fetchCreatorVideoData(this.video_code).subscribe((res)=>{
      //this.video_link=this.base_file_url+res.data.creator_video;
      this.video_link='<video width="100%" height="100%" controls="true" id="main_vid"><source src="'+this.base_file_url+res.data.creator_video+'" type="video/mp4" ></video>';
      document.getElementById('vid_div').innerHTML=this.video_link;
      this.language=res.data.language_name;
      this.genre=res.data.genre_name;
      this.year=res.data.year;
      this.cast=res.data.cast;
      this.director=res.data.director;
      this.description=res.data.video_desc;
      this.runtime=res.data.runtime;
      this.writer=res.data.writer;
      this.camera=res.data.camera;
      this.title=res.data.video_title;
      this.audience=res.data.audiance;
    });








    $(document).ready(function() {
      //alert('I am Called From jQuery');//select-native-id
      $("#select-native-id").change(function(){
        if($("#select-native-id").val()!=0){
          $("#blue-div-id").show();
          $("#rt-value-main-id").show();
          $("#grey-div-id").hide();
          $("#rate-id").hide();
          $("#top-sp").html($("#select-native-id").val());
      }
      else{
          $("#blue-div-id").hide();
          $("#rt-value-main-id").hide();
          $("#grey-div-id").show();
          $("#rate-id").show();
          $("#top-sp").html('');
      }
      });
    });




  };

}

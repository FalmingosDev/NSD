import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  blogsListData: any =[];
  id: string;
  blogId: string;
  author: string;
  title: string;
  date: string;
  text: string;
  blogimage: string;

  env=environment;


  constructor(private dataService: ApiService,private route:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogsDetail();
  }

  blogsDetail(){ 
    this.id= this.activatedRoute.snapshot.params['blog_id'];  
    this.dataService.blogsDetail(this.id).subscribe((result) => {
      this.blogsListData = result;
      console.log(this.blogsListData);
      this.blogId = this.id;
      this.author = this.blogsListData.blog_author;
      this.title = this.blogsListData.blog_title;
      this.date = this.blogsListData.blog_date;
      this.text = this.blogsListData.blog_text;
      this.blogimage = this.blogsListData.blog_img;

    });
  }

}

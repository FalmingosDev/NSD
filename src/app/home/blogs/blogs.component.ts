import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogsListData:any =[];
  env=environment;

  constructor(private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.blogsList();
  }

  blogsList(){   
    this.dataService.blogsList().subscribe((result) => {
      this.blogsListData = result
    });
  }

  blogsDetail(event,id){
    event.preventDefault();
    this.route.navigate(["/blogdetails/"+id]);
  }

}

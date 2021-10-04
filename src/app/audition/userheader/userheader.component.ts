import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css'] 
})
export class UserheaderComponent implements OnInit {
  current_url:string=""

  constructor(private router:Router,private dataservice:ApiService) { }
  
  ngOnInit(): void {
   
    if(this.router.url=='/userhome'){
      this.current_url='Dashboard';
    }
    else if(this.router.url=='/usersubmission'){
      this.current_url="Submission";
    }
    else if(this.router.url=='/userprofile'){
      this.current_url="Profile";
    }
    else if(this.router.url=='/userpreview'){
      this.current_url="Preview";
    }


  }

}

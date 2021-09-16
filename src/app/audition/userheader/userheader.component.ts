import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {
  current_url:string=""

  constructor(private router:Router) { }
  
  ngOnInit(): void {
    console.log(this.router.url);
    if(this.router.url=='/userhome'){
      this.current_url='Dashboard';
    }
    else if(this.router.url=='/usersubmission'){
      this.current_url="Submission";
    }
    else if(this.router.url=='/userprofile'){
      this.current_url="Profile";
    }
  }

}

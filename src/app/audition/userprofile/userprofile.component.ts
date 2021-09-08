import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user_data:any;

  constructor(private dataService:ApiService) { }

  ngOnInit(): void {
   this.user_data= this.dataService.acceptData();
   console.log("from user profile!!");
   console.log(this.user_data);
  }

}

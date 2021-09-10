import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-usersubbmission',
  templateUrl: './usersubbmission.component.html',
  styleUrls: ['./usersubbmission.component.css']
})
export class UsersubbmissionComponent implements OnInit {
  user_data:any;
  profie_pic_src:string;
 
  constructor(private dataService:ApiService) { }

  ngOnInit(): void {
    this.user_data = this.dataService.acceptData();
    if(this.user_data.picture!=null){
      this.profie_pic_src="http://localhost/NSD/image/userprofile_img/"+(this.user_data.picture);
    }
  }

}

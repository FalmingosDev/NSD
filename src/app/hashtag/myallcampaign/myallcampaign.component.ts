import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-myallcampaign',
  templateUrl: './myallcampaign.component.html',
  styleUrls: ['./myallcampaign.component.css']
})
export class MyallcampaignComponent implements OnInit {
  local_email: string | null = localStorage.getItem('token');
  email: string;
  AllcampaignListAll: any;
  todayDate: any;
  AllCampaign: any;
  offerList: any;
  env = environment;
  constructor(private dataService: ApiService, private campaignList: ApiService, status: FormBuilder, offer: FormBuilder, private _router: Router) { }

  ngOnInit(): void {

    this.email = this.local_email;
    this.campaignList.hashtagmyallcampaignList(this.email).subscribe((result) => {

      this.AllcampaignListAll = result.campaign_list;
      this.todayDate = result.todayDate;
      this.AllCampaign = this.AllcampaignListAll;
     

      console.log(result);
    })
  }

}

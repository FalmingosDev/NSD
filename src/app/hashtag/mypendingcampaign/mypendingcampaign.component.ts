import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-mypendingcampaign',
  templateUrl: './mypendingcampaign.component.html',
  styleUrls: ['./mypendingcampaign.component.css']
})
export class MypendingcampaignComponent implements OnInit {

  local_email: string | null = localStorage.getItem('token');
  email: string;
  AllcampaignListAll: any;
  todayDate: any;
  AllCampaign: any;
  offerList: any;
  env = environment;
  addSocialLink !: FormGroup;
  emails: string;
  camp_id: any;

  constructor(private dataService: ApiService, private campaignList: ApiService, private _router: Router, private addSocial: ApiService, private formBuilder: FormBuilder) {

    
  }

  ngOnInit(): void {

    this.addSocialLink = this.formBuilder.group({
      social_link: ['', Validators.required],
      campaign_uniq_id: ['', Validators.required],
    })


    this.email = this.local_email;
    this.campaignList.hashtagmyallcampaignList(this.email).subscribe((result) => {

      this.AllcampaignListAll = result.campaign_list;
      this.todayDate = result.todayDate;
      this.AllCampaign = this.AllcampaignListAll;
      console.log(result);

    })


  }





  addSocialLinkDetails() {
    this.emails = this.local_email;

    // var d = this.social(this.id);
    // console.log(d);

    this.addSocial.addSocialDetails(this.addSocialLink.value, this.emails).subscribe({
      next: (res) => {
        alert("Link Added SuccessFully !")
      },
      error: () => {
        alert("Error")
      }
    })
  }
  // social(id) {



  //   return id;

  //   //(document.getElementById('hidden_id') as HTMLInputElement).value = id;

  // }


}







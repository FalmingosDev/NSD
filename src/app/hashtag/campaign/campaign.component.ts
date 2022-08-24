import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  [x: string]: any;

  id: any;
  client_details: string;
  campaign_objective: string;
  offer_name: string;
  stepsList: any;
  client_name: string;
  local_email: string | null = localStorage.getItem('token');
  userid: any;
  max_participate: number;
  total_apply: number;
  userEmail: any;
  check: any;

  constructor(private activatedRoute: ActivatedRoute, private campaignDetailsList: ApiService, private addapiacceptcampaign: ApiService, private _router: Router) {

    this.id = this.activatedRoute.snapshot.params['id'];


  }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.campaignDetailsList.hashtagcampaignDetailsList(this.id, this.local_email).subscribe((result) => {

      this.client_details = result.data.campaign_details_list.client_details;
      this.campaign_objective = result.data.campaign_details_list.campaign_objective;
      this.offer_name = result.data.campaign_details_list.offer_name;
      this.client_name = result.data.campaign_details_list.client_name;

      this.stepsList = result.data.campaign_steps;

      this.max_participate = result.data.campaign_details_list.max_participate;
      this.total_apply = result.data.total_apply;

      this.active_user_apply_check = result.data.active_user_apply;

      this.campaign_hashtag = result.data.campaign_details_list.campaign_hashtag;

      this.campaign_name = result.data.campaign_details_list.campaign_name;

      this.campaign_current_status = result.data.campaign_details_list.campaign_current_status;

      this.campaign_spl_note = result.data.campaign_details_list.campaign_spl_note;

      this.campaign_description_link = result.data.campaign_details_list.campaign_description_link;

      this.message = result.data.message;

      this.results = result.data.common_cat;

      this.check = result.data.key;

     console.log(result);
    })


  }

  acceptcampaign_before(id: any) {

    if (this.check == "E") {
      this._router.navigateByUrl('/userprofile');

    } else {
      this._router.navigateByUrl('/acceptcampaignbefore/' + id);
    }



  }




}



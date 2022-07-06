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


  constructor(private activatedRoute: ActivatedRoute, private campaignDetailsList: ApiService, private addapiacceptcampaign: ApiService) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.campaignDetailsList.hashtagcampaignDetailsList(this.id, this.local_email).subscribe((result) => {

      this.client_details = result.campaign_details_list.client_details;
      this.campaign_objective = result.campaign_details_list.campaign_objective;
      this.offer_name = result.campaign_details_list.offer_name;
      this.client_name = result.campaign_details_list.client_name;

      this.stepsList = result.campaign_steps;

      this.max_participate = result.campaign_details_list.max_participate;
      this.total_apply = result.total_apply;

      this.active_user_apply_check = result.active_user_apply;



    })

  }

  acceptcampaign(id: any) {
    let campaignid = id;
    let userid = this.local_email;
    this.addapiacceptcampaign.addacceptcampaign(userid, campaignid).subscribe(res => {
      var resp: any = res;

      if (resp.success == true) {
        var successmsg =

          '<button type="button" class="hashtag-accept-btn btn btn-primary">Applied</button>';

        document.getElementById("applyreplace").innerHTML = successmsg;
      }
    }, error => {

    })
  }


}



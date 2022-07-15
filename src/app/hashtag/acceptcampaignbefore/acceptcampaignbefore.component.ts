import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-acceptcampaignbefore',
  templateUrl: './acceptcampaignbefore.component.html',
  styleUrls: ['./acceptcampaignbefore.component.css']
})
export class AcceptcampaignbeforeComponent implements OnInit {
  local_email: string = localStorage.getItem('token');
  name: any;
  user_contact_number: any;
  user_pincode: any;
  user_city: any;
  user_state: any;
  user_country: any;
  user_address1: any;
  acceptBefore: FormGroup;
  userid:any;

  campaign_id: any;
  user_address_all: any;
 
  constructor(private activatedRoute: ActivatedRoute, private addapiacceptcampaignbefore: ApiService, private _router: Router, private addapiacceptcampaign: ApiService) {

  }

  ngOnInit(): void {
    this.userid = this.local_email;

    this.campaign_id = this.activatedRoute.snapshot.params['id'];

    this.addapiacceptcampaignbefore.addAcceptCampaignBefore(this.userid, this.campaign_id).subscribe(result => {
   
    this.name = result.data.user_details.name;
    this.user_contact_number = result.data.user_details.user_contact_number;
    this.user_address1 = result.data.user_details.user_address1;
    this.user_pincode = result.data.user_details.user_pincode;
    this.user_city = result.data.user_details.user_city;
    this.user_state = result.data.user_details.user_state;
    this.user_country = result.data.user_details.country_name;
    this.user_address_all = this.user_address1 + ',' + this.user_pincode + ',' + this.user_city + ',' + this.user_state + ',' + this.user_country;

      this.acceptBefore = new FormGroup({
        name: new FormControl(this.name),
        mob: new FormControl(this.user_contact_number),
        address: new FormControl(this.user_address_all)
      })
    })
  }


  acceptcampaign() {
      this.campaign_id = this.activatedRoute.snapshot.params['id'];
      this.addapiacceptcampaign.addacceptcampaign(this.acceptBefore.value, this.local_email, this.campaign_id).subscribe(results => {
        if (results.success == true) {
          this._router.navigateByUrl('/mypendingcampaign');
        }

      })
  }

}




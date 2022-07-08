import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';



@Component({
  selector: 'app-hashtaghome',
  templateUrl: './hashtaghome.component.html',
  styleUrls: ['./hashtaghome.component.css']
})
export class HashtaghomeComponent implements OnInit {
  [x: string]: any;
  env = environment;
  todayDate: any;
  isReadMore = true;
  isReadMoreSpl = true;
  local_email: string | null = localStorage.getItem('token');
  username: string;
  filterLength: number;
  filterArray: any;
  AllCampaign: any;
 
  constructor(private dataService: ApiService, private campaignList: ApiService, status: FormBuilder, offer: FormBuilder) {


    this.forms = status.group({
      selectedStatus: new FormArray([])
    });

    this.form = offer.group({
      selectedOffer: new FormArray([])
    });

  }

  ngOnInit(): void {


    this.dataService.profileData(this.local_email).subscribe((res) => {
      if (res.data) {
        this.username = res.data.name;
      }
    });

    this.email=this.local_email;
    this.campaignList.hashtagcampaignList(this.email).subscribe((result) => {

      this.AllcampaignListAll = result.campaign_list;
      this.todayDate = result.todayDate;
      this.AllCampaign = this.AllcampaignListAll;
      
    })

  }
  showText() {
    this.isReadMore = !this.isReadMore
  }



  form: FormGroup;
  statusList: Array<any> = [
    { name: 'Expired', value: 'Expired' },
    { name: 'Active', value: 'Active' },
    { name: 'Upcoming', value: 'Upcoming' }
  ];


  onCheckboxstatusChange(event: any) {
    const selectedStatus = (this.forms.controls.selectedStatus as FormArray);

    if (event.target.checked) {
      selectedStatus.push(new FormControl(event.target.value));
    } else {
      const index = selectedStatus.controls
        .findIndex(x => x.value === event.target.value);
      selectedStatus.removeAt(index);
    }
    console.log(this.forms.value.selectedStatus);
  }

  onCheckboxofferChange(event: any) {
    const selectedOffer = (this.form.controls.selectedOffer as FormArray);

    if (event.target.checked) {
      selectedOffer.push(new FormControl(event.target.value));
    } else {
      const index = selectedOffer.controls
        .findIndex(x => x.value === event.target.value);
      selectedOffer.removeAt(index);
    }
    console.log(this.form.value.selectedOffer);
  }

  submitfilter() {

    let filterStatusArray = this.forms.value.selectedStatus;
    console.log(filterStatusArray);
    let filterStatusLength = filterStatusArray.length;

    let filterOfferArray = this.form.value.selectedOffer;
    console.log(filterOfferArray);
    let filterOfferLength = filterOfferArray.length;

    if (filterStatusLength == 0) {
      let arrayData;
      arrayData = this.AllCampaign.filter(function (singleData: any) {

        for (let j = 0; j < filterOfferLength; j++) {

          if (singleData.offer_name == filterOfferArray[j]) {
            return true;
          }

        }
        return arrayData;


      });

      this.AllcampaignListAll = arrayData;

    } else if (filterOfferLength == 0) {

      let arrayData;
      arrayData = this.AllCampaign.filter(function (singleData: any) {

        for (let j = 0; j < filterStatusLength; j++) {

          if (singleData.campaign_current_status == filterStatusArray[j]) {
            return true;
          }

        }
        return arrayData;


      });

      this.AllcampaignListAll = arrayData;


    } else {

      let filterdata = {
        "campaign_current_status": filterStatusArray,
        "offer_name": filterOfferArray,
      };

      let arrayData = this.AllCampaign.filter(obj =>
        Object.entries(filterdata).every(([prop, find]) => find.includes(obj[prop])));
      this.AllcampaignListAll = arrayData;

    }
  }

}

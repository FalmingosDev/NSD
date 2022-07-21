import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-categorymaster',
  templateUrl: './categorymaster.component.html',
  styleUrls: ['./categorymaster.component.css']
})
export class CategorymasterComponent implements OnInit {

  local_email: string | null = localStorage.getItem('token');
  env = environment;
  allcategorymaster: any;
  selectedInterest: any = [];
  singleInterest: any = [];

  getInterestandsocialForm: FormGroup;
  social: any;
  resultInterest: any;
  interest_blank: any;
  arr: any;
  msg_data: any;
  msgs: any;



  constructor(private categorymaster: ApiService, private getInterestAndSocialDetails: ApiService, private hashtagUserRegis: ApiService, private _router: Router, private alertService: AlertService) {

  }

  private data_arr = [];

  ngOnInit(): void {
    this.singleInterest = [];
    this.getInterestandsocialForm = new FormGroup({

      facebook: new FormControl(),
      instagram: new FormControl(),
      youtube: new FormControl(),
      twitter: new FormControl(),
      amazon: new FormControl()

    })
    this.categorymaster.categoryMasterList().subscribe((result) => {

      this.allcategorymaster = result;

    })

    this.getInterestAndSocialDetails.getUserInterestAndSocial(this.local_email).subscribe((result) => {

      this.social = result.data.checkUser;

      this.singleInterest = this.social.hashtag_interest;

      this.arr = JSON.parse(this.singleInterest);
      for (var i = 0; i < this.arr.length; i++) {

        this.data_arr.push(this.arr[i]);
      }

      if (result.data.checkUser != "NewUser") {


        this.getInterestandsocialForm = new FormGroup({

          facebook: new FormControl(this.social.social_link1),
          instagram: new FormControl(this.social.social_link2),
          youtube: new FormControl(this.social.social_link3),
          twitter: new FormControl(this.social.social_link4),
          amazon: new FormControl(this.social.social_link5)

        })

      }
    })

  }



  interestChange(event) {
    let index1 = this.data_arr.indexOf(event.target.value);
    if (index1 === -1) {
      this.data_arr.push(event.target.value);
    } else {
      this.data_arr.splice(index1, 1);
    }

  }


  registerhashtaguser() {
    const email = this.local_email;
    this.hashtagUserRegis.hashtagUserRegis(this.getInterestandsocialForm.value, this.data_arr, email).subscribe({
      next: (res) => {

        this.msg_data = res.data;
        this.msgs = this.msg_data.msg;
        this.alertService.success(this.msgs);

        setTimeout(() => {
          this._router.navigateByUrl('/hashtag');
        }, 3000);
      },
      error: () => {
        //alert("Error")
      }
    })
    // }

  }




}





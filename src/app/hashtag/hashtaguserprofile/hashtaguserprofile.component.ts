import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import * as $ from 'jquery';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-hashtaguserprofile',
  templateUrl: './hashtaguserprofile.component.html',
  styleUrls: ['./hashtaguserprofile.component.css']
})
export class HashtaguserprofileComponent implements OnInit {
  countryList: any;
  local_email: string | null = localStorage.getItem('token');
  language_list: any;
  professions_list: any;
  userid: string;
  UserForm !: FormGroup;
  addUserBankForm !: FormGroup;
  email_id: string;
  profileData: any;
  fullname: any;
  name: string;
  mob: any;
  dob: any;
  language: any;
  maritial: any;
  profession: any;
  user_country: any;
  user_state: any;
  user_city: any;
  user_pincode: any;
  user_address1: any;
  langu: any;

  constructor(private getCountryList: ApiService, private formBuilder: FormBuilder, private UserDetails: ApiService, private UserBankDetails: ApiService, private profileGet: ApiService) {
    $(document).ready(function () {
      $("#stepfunone").click(function () {
        $("#editwo").show();
        $("#editone").hide();
      });
      $("#stepfuntwo").click(function () {
        $("#editone").show();
        $("#editwo").hide();
      });
    });

    this.email_id = this.local_email;

    this.hashtagProfileGetDetails(this.email_id);

  }

  ngOnInit(): void {



    this.getCountryList.CountryList().subscribe((result) => {

      this.countryList = result.data.country_list;
      this.language_list = result.data.language_list;
      this.professions_list = result.data.professions_list;
      this.userid = this.local_email;

    })


    this.UserForm = this.formBuilder.group({

      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      dob: ['', Validators.required],
      language: ['', Validators.required],
      maritial: ['', Validators.required],
      profession: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      address: ['', Validators.required]
    })

    this.addUserBankForm = this.formBuilder.group({

      bankname: ['', Validators.required],
      acholdername: ['', Validators.required],
      acnumber: ['', Validators.required],
      ifsc: ['', Validators.required],
      upiid: ['', Validators.required]

    })




  };

  addUser() {
    // if (this.UserForm.valid) {
    this.UserDetails.addUserDetails(this.UserForm.value, this.userid).subscribe({
      next: (res) => {
        alert("User Added SuccessFully !")
      },
      error: () => {
        alert("Error")
      }
    })
    // }
  }

  addUserBank() {
    // if (this.UserForm.valid) {
    this.UserBankDetails.addUserBankDetails(this.addUserBankForm.value, this.userid).subscribe({
      next: (res) => {
        alert("User Bank Added SuccessFully !")
      },
      error: () => {
        alert("Error")
      }
    })
    // }
  }

  hashtagProfileGetDetails(userid) {

    this.profileGet.hashtagProfileGet(userid).subscribe((result) => {


      this.fullname = result.data[0].name;
      this.mob = result.data[0].user_contact_number;
      this.dob = result.data[0].dob;
      this.langu = result.data[0].language;
      this.maritial = result.data[0].maritial;
      this.profession = result.data[0].profession;
      this.user_country = result.data[0].user_country;
      this.user_state = result.data[0].user_state;
      this.user_city = result.data[0].user_city;
      this.user_pincode = result.data[0].user_pincode;
      this.user_address1 = result.data[0].user_address1;
      console.log(this.user_address1);

    })

  }


}

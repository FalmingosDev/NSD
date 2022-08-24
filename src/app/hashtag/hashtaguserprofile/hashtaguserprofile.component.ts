import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form, FormControl } from '@angular/forms';
// import * as $ from 'jquery';
declare var $: any;
import { ApiService } from 'src/app/api.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

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
  UserForm: FormGroup;
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
  bankname: any;
  acholder: any;
  acnumber: any;
  ifsc: any;
  upiid: any;
  msg_data: any;
  msgs: any;

  ngAfterViewInit() {
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

  }

  constructor(private getCountryList: ApiService, private formBuilder: FormBuilder, private UserDetails: ApiService, private UserBankDetails: ApiService, private profileGet: ApiService, private alertService: AlertService, private _router: Router, private UserBankDetailsOthers: ApiService) {

  }

  ngOnInit(): void {

    this.UserForm = new FormGroup({

      name: new FormControl('',Validators.required),
      mobile: new FormControl(''),
      dob: new FormControl(''),
      language: new FormControl(''),
      maritial: new FormControl(''),
      profession: new FormControl(''),
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl(''),
      address: new FormControl('')

    })

    this.addUserBankForm = new FormGroup({

      bankname: new FormControl(),
      acholder: new FormControl(),
      acnumber: new FormControl(),
      ifsc: new FormControl(),
      upiid: new FormControl()

    })


    this.getCountryList.CountryList().subscribe((result) => {

      this.countryList = result.data.country_list;
      this.language_list = result.data.language_list;
      this.professions_list = result.data.professions_list;


    }),
      this.userid = this.local_email;

    this.profileGet.hashtagProfileGet(this.local_email).subscribe((result) => {

      if (result) {
        this.name = result.data.name;
        this.mob = result.data.user_contact_number;
        this.dob = result.data.dob;
        this.langu = result.data.language;
        this.maritial = result.data.maritial_status;
        this.profession = result.data.profession;
        this.user_country = result.data.user_country;
        this.user_state = result.data.user_state;
        this.user_city = result.data.user_city;
        this.user_pincode = result.data.user_pincode;
        this.user_address1 = result.data.user_address1;

        console.log(this.name);

        this.UserForm = new FormGroup({

          name: new FormControl(this.name,Validators.required),
          mobile: new FormControl(this.mob),
          dob: new FormControl(this.dob),
          language: new FormControl(this.langu),
          maritial: new FormControl(this.maritial),
          profession: new FormControl(this.profession),
          country: new FormControl(this.user_country),
          state: new FormControl(this.user_state),
          city: new FormControl(this.user_city),
          pincode: new FormControl(this.user_pincode),
          address: new FormControl(this.user_address1)


        })
      }

    })


    /* bank updated  */


    this.UserBankDetailsOthers.getaddUserBankDetails(this.local_email).subscribe((result) => {

      if (result) {
        this.bankname = result.data.bank_details.bank_name;
        this.acholder = result.data.bank_details.bank_account_holder;
        this.acnumber = result.data.bank_details.bank_account_number;
        this.ifsc = result.data.bank_details.bank_ifsc;
        this.upiid = result.data.bank_details.upi_id;

        this.addUserBankForm = new FormGroup({

          bankname: new FormControl(this.bankname),
          acholder: new FormControl(this.acholder),
          acnumber: new FormControl(this.acnumber),
          ifsc: new FormControl(this.ifsc),
          upiid: new FormControl(this.upiid),

        })
      }

    })
  }




  addUser() {

    // // if (this.UserForm.valid) {
    this.UserDetails.addUserDetails(this.UserForm.value, this.local_email).subscribe({
      next: (res) => {
        // alert("User Profile Updated SuccessFully !")
        this.msg_data = res.data;
        this.msgs = this.msg_data.msg;
        this.alertService.success(this.msgs);

        setTimeout(() => {
          this._router.navigateByUrl('/hashtag');
        }, 3000);
      },
      error: () => {
        alert("Error")
      }
    })
    // // }
  }





  addUserBank() {
    // if (this.UserForm.valid) {
    this.UserBankDetails.addUserBankDetails(this.addUserBankForm.value, this.userid).subscribe({
      next: (res) => {
        //alert("User Bank Added SuccessFully !")
        this.msg_data = res.data;
        this.msgs = this.msg_data.msg;
        this.alertService.success(this.msgs);

        setTimeout(() => {
          this._router.navigateByUrl('/hashtag');
        }, 3000);
      },
      error: () => {
        alert("Error")
      }
    })
    // }
  }




}

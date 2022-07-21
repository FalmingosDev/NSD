import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-pendingsocialandaddressadd',
  templateUrl: './pendingsocialandaddressadd.component.html',
  styleUrls: ['./pendingsocialandaddressadd.component.css']
})
export class PendingsocialandaddressaddComponent implements OnInit {

  local_email: string | null = localStorage.getItem('token');
  campaign_id: any;
  userid: string;
  addsocialandaddress !: FormGroup;
  msg_data: any;
  msgs: any;


  constructor(private formBuilder: FormBuilder, private socialandaddress: ApiService, private activatedRoute: ActivatedRoute, private _router: Router,private alertService: AlertService) {

  }

  ngOnInit(): void {

    const userid = this.local_email;
    const campaign_id = this.activatedRoute.snapshot.params['id'];

    this.addsocialandaddress = this.formBuilder.group({

      camp_link: ['', Validators.required],
      
    })


  };



  addsocialadressFun() {

    var campaign_id = this.activatedRoute.snapshot.params['id'];
    var userid = this.local_email;

    this.socialandaddress.hashtagAddSocialAndAdress(this.addsocialandaddress.value, campaign_id, userid).subscribe({
      next: (res) => {
       
        this.msg_data = res.data;
        this.msgs = this.msg_data.msg;
        this.alertService.success(this.msgs);

        setTimeout(() => {
          this._router.navigateByUrl('/myallcampaign');
        }, 3000);
      },
      error: () => {
        alert("Error")
      }
    })
    // }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

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


  constructor(private formBuilder: FormBuilder, private socialandaddress: ApiService, private activatedRoute: ActivatedRoute, private _router: Router) {

  }

  ngOnInit(): void {

    const userid = this.local_email;
    const campaign_id = this.activatedRoute.snapshot.params['id'];

    this.addsocialandaddress = this.formBuilder.group({

      camp_link: ['', Validators.required],
      mob: ['', Validators.required],
      address: ['', Validators.required]

    })


  };



  addsocialadressFun() {

    var campaign_id = this.activatedRoute.snapshot.params['id'];
    var userid = this.local_email;

    this.socialandaddress.hashtagAddSocialAndAdress(this.addsocialandaddress.value, campaign_id, userid).subscribe({
      next: (res) => {
        this._router.navigateByUrl('/myallcampaign');
      },
      error: () => {
        alert("Error")
      }
    })
    // }
  }
}

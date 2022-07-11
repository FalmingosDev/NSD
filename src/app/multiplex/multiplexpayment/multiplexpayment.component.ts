import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-multiplexpayment',
  templateUrl: './multiplexpayment.component.html',
  styleUrls: ['./multiplexpayment.component.css']
})
export class MultiplexpaymentComponent implements OnInit {
  cc_url:any;
  sanitizer:any;

  constructor(private route:ActivatedRoute,private dataService: ApiService,sanitizer: DomSanitizer) {
    this.sanitizer=sanitizer;
   }

  ngOnInit(): void {
    const multiplex_id=this.route.snapshot.params['multiplex_id'];
    const price=this.route.snapshot.params['price'];
    const currency=this.route.snapshot.params['curr'];
    const coin=this.route.snapshot.params['coin'];
    const email=localStorage.getItem("token");


    const objUserData = {multiplex_id,price,currency,coin,email}

    //id,name,email,mobile
    this.dataService.multiplexCreateEncryption(objUserData).subscribe((res)=>{
      this.cc_url=this.getSafeUrl(res.url);
      // console.log(res.url);
      // console.log(this.cc_url);
    });
  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}

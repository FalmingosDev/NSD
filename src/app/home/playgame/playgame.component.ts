import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playgame',
  templateUrl: './playgame.component.html',
  styleUrls: ['./playgame.component.css']
})
export class PlaygameComponent implements OnInit {
  primaryUrl:string="https://www.gamezop.com/g/";
  // primaryUrl:string="https://www.gamezop.com/g/SyXuN7W1F?id=cfuucl7YgA&lang=en";
  baseGameUrl:string;
  data:string;
  // sanitizer: any;
 final_url:string;
 sanitizer:any;
  // validIframe:boolean=false;
  constructor(sanitizer: DomSanitizer,private route:ActivatedRoute) {
    this.sanitizer=sanitizer;
   }

  ngOnInit(): void {
    this.generateUrl();
    this.final_url=this.getSafeUrl(this.baseGameUrl);
  }
  //sanitize url--------
  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  generateUrl(){
    this.data=this.route.snapshot.params['data'];
    this.baseGameUrl=this.primaryUrl+this.data;
    return this.baseGameUrl;
    // console.log(this.baseGameUrl);
    // this.validIframe=true;
  }
  //end sanitize url--------
  

}
